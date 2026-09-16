import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { sound } from '../utils/audioEngine';
import { Zap, Terminal, LogOut, Play } from 'lucide-react';

interface House3DProps {
  shards: { id: string; title: string; score: number | null }[];
  onInspectClue: (clueId: string) => void;
}

export const House3D: React.FC<House3DProps> = ({ shards, onInspectClue }) => {
  const mountRef = useRef<HTMLDivElement | null>(null);
  const [nearbyShard, setNearbyShard] = useState<{ id: string; title: string } | null>(null);
  const [isPaused, setIsPaused] = useState<boolean>(true); // Starts paused until they click

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
        color: shardData.score && shardData.score >= 50 ? '#10b981' : '#a855f7', 
        emissive: shardData.score && shardData.score >= 50 ? '#10b981' : '#a855f7',
        emissiveIntensity: 0.5,
        wireframe: true
      });
      const mesh = new THREE.Mesh(shardGeo, mat);
      mesh.position.set(pos.x, 1.5, pos.z);
      scene.add(mesh);

      const light = new THREE.PointLight(mat.color, 2, 10);
      mesh.add(light);

      shardObjects.push({ mesh, id: shardData.id, title: shardData.title, originalY: 1.5 });
    });

    // MOVEMENT & CONTROLS
    const keys = { w: false, a: false, s: false, d: false };
    const onKeyDown = (e: KeyboardEvent) => {
      const k = e.key.toLowerCase();
      if (keys.hasOwnProperty(k)) keys[k as keyof typeof keys] = true;
      if (k === 'e' && nearbyShardRef.current && document.pointerLockElement === mountRef.current) {
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
    
    const onPointerLockChange = () => {
      setIsPaused(document.pointerLockElement !== mountRef.current);
      if (document.pointerLockElement !== mountRef.current) {
        // Reset keys when paused
        keys.w = false; keys.a = false; keys.s = false; keys.d = false;
      }
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('pointerlockchange', onPointerLockChange);

    // ANIMATION LOOP
    let animationFrameId: number;
    let clock = new THREE.Clock();
    const speed = 6.0;

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

      // Perfect FPS Movement relative to camera yaw
      if (document.pointerLockElement === mountRef.current) {
        const forward = new THREE.Vector3(0, 0, -1).applyAxisAngle(new THREE.Vector3(0, 1, 0), euler.y);
        const right = new THREE.Vector3(1, 0, 0).applyAxisAngle(new THREE.Vector3(0, 1, 0), euler.y);
        
        const direction = new THREE.Vector3();
        if (keys.w) direction.add(forward);
        if (keys.s) direction.sub(forward);
        if (keys.a) direction.sub(right);
        if (keys.d) direction.add(right);
        
        direction.normalize();

        if (direction.lengthSq() > 0) {
          camera.position.addScaledVector(direction, speed * delta);
          // Walk bob
          camera.position.y = 1.6 + Math.sin(time * 12) * 0.06;
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
      document.removeEventListener('pointerlockchange', onPointerLockChange);
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
      mountRef.current?.removeChild(renderer.domElement);
    };
  }, [shards]);

  const requestLock = () => {
    mountRef.current?.requestPointerLock();
  };

  return (
    <div className="relative w-full h-screen bg-admin-bg overflow-hidden font-sans">
      {/* 3D Canvas */}
      <div ref={mountRef} className="w-full h-full cursor-crosshair" />

      {/* Crosshair (only visible when playing) */}
      {!isPaused && (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-10">
          <div className="w-1.5 h-1.5 bg-white/70 rounded-full" />
        </div>
      )}

      {/* UI Overlay - Game Title */}
      <div className="absolute top-6 left-6 text-admin-blue font-sans pointer-events-none z-10">
        <h1 className="text-2xl font-bold tracking-widest uppercase text-transparent bg-clip-text bg-gradient-to-r from-admin-blue to-admin-uv">The Corrupted Shrine</h1>
        <p className="text-sm text-admin-cyan mt-1 opacity-80">Locate the 5 Yokai Data Shards.</p>
      </div>

      {/* Interaction Prompt (only when playing) */}
      {!isPaused && nearbyShard && (
        <div className="absolute bottom-24 left-1/2 -translate-x-1/2 text-center pointer-events-none z-10">
          <div className="bg-admin-panel/90 backdrop-blur-md border border-admin-uv/50 rounded-xl px-8 py-4 shadow-[0_0_30px_rgba(168,85,247,0.3)] transform transition-transform animate-bounce">
            <h2 className="text-xl font-bold text-admin-uv mb-2">{nearbyShard.title}</h2>
            <div className="flex items-center justify-center gap-2 text-white font-mono">
              <span className="px-3 py-1 bg-white/20 rounded font-bold">E</span> 
              <span>TO INTERFACE</span>
            </div>
          </div>
        </div>
      )}

      {/* Escape / Pause Menu */}
      {isPaused && (
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm z-50 flex flex-col items-center justify-center">
          <div className="bg-admin-panel border border-admin-blue/30 p-10 rounded-2xl shadow-[0_0_50px_rgba(59,130,246,0.15)] flex flex-col items-center max-w-md w-full text-center">
            <Zap className="w-12 h-12 text-admin-blue mb-4 animate-pulse" />
            <h2 className="text-3xl font-bold text-white mb-2 uppercase tracking-widest">SYSTEM PAUSED</h2>
            <p className="text-gray-400 mb-8">Navigation suspended. Use WASD to move and Mouse to look when active.</p>
            
            <div className="flex flex-col gap-4 w-full">
              <button 
                onClick={requestLock}
                className="w-full py-4 bg-admin-blue/20 hover:bg-admin-blue/30 border border-admin-blue/50 text-admin-blue rounded-xl font-bold tracking-wider transition-colors flex justify-center items-center gap-2"
              >
                <Play className="w-5 h-5" />
                RESUME SIMULATION
              </button>
              
              <button 
                onClick={() => window.location.href = '/'} // Change this URL to wherever the "other website" is
                className="w-full py-4 bg-gray-800/50 hover:bg-gray-800 border border-gray-700 text-gray-300 rounded-xl font-bold tracking-wider transition-colors flex justify-center items-center gap-2"
              >
                <LogOut className="w-5 h-5" />
                RETURN TO LOBBY
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
