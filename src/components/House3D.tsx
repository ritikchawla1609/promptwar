import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { sound } from '../utils/audioEngine';
import { Zap, Terminal } from 'lucide-react';

interface House3DProps {
  shards: { id: string; title: string; score: number | null }[];
  onInspectClue: (clueId: string) => void;
}

export const House3D: React.FC<House3DProps> = ({ shards, onInspectClue }) => {
  const mountRef = useRef<HTMLDivElement | null>(null);
  const [nearbyShard, setNearbyShard] = useState<{ id: string; title: string } | null>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // SCENE SETUP
    const scene = new THREE.Scene();
    scene.background = new THREE.Color('#020205');
    scene.fog = new THREE.FogExp2('#020205', 0.03);

    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 100);
    camera.position.set(0, 1.6, 0);

    const renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: 'high-performance' });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mountRef.current.appendChild(renderer.domElement);

    // ENVIRONMENT: Shrine Floor
    const floorGeo = new THREE.PlaneGeometry(100, 100);
    const floorMat = new THREE.MeshStandardMaterial({ 
      color: '#050a14',
      roughness: 0.1,
      metalness: 0.8
    });
    const floor = new THREE.Mesh(floorGeo, floorMat);
    floor.rotation.x = -Math.PI / 2;
    scene.add(floor);

    // LIGHTING
    const ambientLight = new THREE.AmbientLight('#111827', 1.5);
    scene.add(ambientLight);

    // TORII GATES (Holographic / Glowing)
    const gateGroup = new THREE.Group();
    const createGate = (zPos: number) => {
      const mat = new THREE.MeshBasicMaterial({ color: '#ef4444', transparent: true, opacity: 0.8 });
      const leftPillar = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.2, 4), mat);
      leftPillar.position.set(-3, 2, zPos);
      const rightPillar = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.2, 4), mat);
      rightPillar.position.set(3, 2, zPos);
      const topBeam = new THREE.Mesh(new THREE.BoxGeometry(7, 0.4, 0.4), mat);
      topBeam.position.set(0, 3.8, zPos);
      gateGroup.add(leftPillar, rightPillar, topBeam);
    };
    for(let i=0; i<5; i++) {
      createGate(-10 - (i * 10));
    }
    scene.add(gateGroup);

    // SHARDS (The Clues)
    const shardObjects: { mesh: THREE.Mesh; id: string; title: string; originalY: number }[] = [];
    const shardGeo = new THREE.OctahedronGeometry(0.5);
    
    // Distribute shards around the shrine
    const positions = [
      { x: -2, z: -8 },
      { x: 3, z: -18 },
      { x: -4, z: -25 },
      { x: 2, z: -35 },
      { x: 0, z: -45 }
    ];

    shards.forEach((shardData, index) => {
      const pos = positions[index];
      const mat = new THREE.MeshStandardMaterial({ 
        color: shardData.score && shardData.score > 50 ? '#10b981' : '#a855f7', 
        emissive: shardData.score && shardData.score > 50 ? '#10b981' : '#a855f7',
        emissiveIntensity: 0.5,
        wireframe: true
      });
      const mesh = new THREE.Mesh(shardGeo, mat);
      mesh.position.set(pos.x, 1.5, pos.z);
      scene.add(mesh);

      // Add a point light to each shard
      const light = new THREE.PointLight(mat.color, 2, 10);
      mesh.add(light);

      shardObjects.push({ mesh, id: shardData.id, title: shardData.title, originalY: 1.5 });
    });

    // MOVEMENT & CONTROLS
    const keys = { w: false, a: false, s: false, d: false };
    const onKeyDown = (e: KeyboardEvent) => {
      const k = e.key.toLowerCase();
      if (keys.hasOwnProperty(k)) keys[k as keyof typeof keys] = true;
      if (k === 'e' && nearbyShardRef.current) {
        onInspectClue(nearbyShardRef.current.id);
      }
    };
    const onKeyUp = (e: KeyboardEvent) => {
      const k = e.key.toLowerCase();
      if (keys.hasOwnProperty(k)) keys[k as keyof typeof keys] = false;
    };
    window.addEventListener('keydown', onKeyDown);
    window.addEventListener('keyup', onKeyUp);

    // Mouse Look
    let euler = new THREE.Euler(0, 0, 0, 'YXZ');
    const onMouseMove = (e: MouseEvent) => {
      if (document.pointerLockElement === mountRef.current) {
        euler.setFromQuaternion(camera.quaternion);
        euler.y -= e.movementX * 0.002;
        euler.x -= e.movementY * 0.002;
        euler.x = Math.max(-Math.PI/2, Math.min(Math.PI/2, euler.x));
        camera.quaternion.setFromEuler(euler);
      }
    };
    const onClick = () => mountRef.current?.requestPointerLock();
    document.addEventListener('mousemove', onMouseMove);
    mountRef.current.addEventListener('click', onClick);

    // ANIMATION LOOP
    let animationFrameId: number;
    let clock = new THREE.Clock();
    const speed = 5.0;

    // Use a ref for the nearby shard so the keydown listener gets the latest value
    const nearbyShardRef = { current: null as { id: string; title: string } | null };

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const delta = clock.getDelta();
      const time = clock.getElapsedTime();

      // Shard floating animation
      shardObjects.forEach((s, i) => {
        s.mesh.rotation.y += delta * 0.5;
        s.mesh.rotation.x += delta * 0.3;
        s.mesh.position.y = s.originalY + Math.sin(time * 2 + i) * 0.2;
      });

      // Movement
      if (document.pointerLockElement === mountRef.current) {
        const direction = new THREE.Vector3();
        if (keys.w) direction.z -= 1;
        if (keys.s) direction.z += 1;
        if (keys.a) direction.x -= 1;
        if (keys.d) direction.x += 1;
        
        direction.normalize();
        direction.applyQuaternion(camera.quaternion);
        // Keep movement flat on xz plane
        direction.y = 0;
        direction.normalize();

        if (direction.lengthSq() > 0) {
          camera.position.addScaledVector(direction, speed * delta);
          // Walk bob
          camera.position.y = 1.6 + Math.sin(time * 10) * 0.05;
        }
      }

      // Proximity check for shards
      let closest: { id: string; title: string } | null = null;
      let minDistance = 3.0;

      shardObjects.forEach(shard => {
        const dist = camera.position.distanceTo(shard.mesh.position);
        if (dist < minDistance) {
          minDistance = dist;
          closest = { id: shard.id, title: shard.title };
        }
      });

      if (closest !== nearbyShardRef.current) {
        nearbyShardRef.current = closest;
        setNearbyShard(closest);
      }

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('keydown', onKeyDown);
      window.removeEventListener('keyup', onKeyUp);
      document.removeEventListener('mousemove', onMouseMove);
      mountRef.current?.removeEventListener('click', onClick);
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
      mountRef.current?.removeChild(renderer.domElement);
    };
  }, [shards]);

  return (
    <div className="relative w-full h-screen bg-admin-bg overflow-hidden">
      {/* 3D Canvas */}
      <div ref={mountRef} className="w-full h-full cursor-crosshair" />

      {/* UI Overlay */}
      <div className="absolute top-6 left-6 text-admin-blue font-sans pointer-events-none">
        <h1 className="text-2xl font-bold tracking-widest uppercase">The Corrupted Shrine</h1>
        <p className="text-sm text-admin-cyan mt-1">Locate the 5 Yokai Data Shards. Click to look around. WASD to move.</p>
      </div>

      {/* Interaction Prompt */}
      {nearbyShard && (
        <div className="absolute bottom-20 left-1/2 -translate-x-1/2 text-center pointer-events-none">
          <div className="bg-admin-panel/80 backdrop-blur-md border border-admin-uv/50 rounded-xl px-8 py-4 shadow-[0_0_20px_rgba(168,85,247,0.3)]">
            <h2 className="text-xl font-bold text-admin-uv mb-2">{nearbyShard.title}</h2>
            <div className="flex items-center justify-center gap-2 text-white font-mono">
              <span className="px-2 py-1 bg-white/10 rounded">E</span> 
              <span>TO INTERFACE</span>
            </div>
          </div>
        </div>
      )}

      {/* Crosshair */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
        <div className="w-1 h-1 bg-white/50 rounded-full" />
      </div>
    </div>
  );
};
