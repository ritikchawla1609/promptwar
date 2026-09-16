import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { sound } from '../utils/audioEngine';
import { 
  ShieldAlert, 
  Flashlight, 
  FileText, 
  Eye, 
  HelpCircle,
  Skull,
  Radio,
  Volume2
} from 'lucide-react';

// ==========================================
// CALL OF DUTY TACTICAL INTEL DATA (CONCISE)
// ==========================================
export const TACTICAL_INTEL_DATA: Record<string, {
  id: string;
  title: string;
  code: string;
  clueId: string;
  bullet1: string;
  bullet2: string;
  bullet3: string;
}> = {
  'ev-2': {
    id: 'ev-2',
    title: 'EAST GRANDFATHER CLOCK',
    code: 'OBJ-01 // TIME ARRESTED',
    clueId: 'ev-2',
    bullet1: 'CLOCK HALTED: 11:47 PM precisely.',
    bullet2: 'ANOMALY: Graphite sliver wedged in escapement wheel.',
    bullet3: 'TACTICAL FACT: Deliberately frozen before midnight to fabricate time of death.'
  },
  'ev-11': {
    id: 'ev-11',
    title: 'STUDY 17-B CRIME SCENE',
    code: 'BREACH // DEADBOLT SEALED',
    clueId: 'ev-11',
    bullet1: 'BREACH STATUS: Heavy oak door locked from inside.',
    bullet2: 'TIMELINE CONFLICT: Assault recorded at 11:47 PM; Sen alive at 12:03 AM.',
    bullet3: 'FATAL WINDOW: True smothering occurred during Kabir\'s 12:13 AM blackout.'
  },
  'ev-4': {
    id: 'ev-4',
    title: 'DICTAPHONE CASSETTE REEL #4',
    code: 'INTEL-04 // AUDIO RECON',
    clueId: 'ev-4',
    bullet1: 'NORMAL TAPE (1.0x): "When the house stopped... someone started."',
    bullet2: 'SUB-BASS SLOWDOWN (0.5x): "Someone started BEFORE the house stopped."',
    bullet3: 'FORENSIC LINK: Tampering initiated prior to the blackout.'
  },
  'ev-3': {
    id: 'ev-3',
    title: 'ARCHIVE CABINET VAULT',
    code: 'CLUE-03 // FORCED ENTRY',
    clueId: 'ev-3',
    bullet1: 'VAULT COMPROMISED: Chisel marks match Aarav Mehta\'s tool.',
    bullet2: 'STOLEN INTEL: 20 years of Blackwood memory-erasure experiments.',
    bullet3: 'SECONDARY CRIME: Aarav committed corporate espionage, not murder.'
  },
  'ev-13': {
    id: 'ev-13',
    title: 'CARETAKER SERVICE GRATE',
    code: 'ROUTE // SECRET SHAFT',
    clueId: 'ev-13',
    bullet1: 'CONCEALED TUNNEL: Directly bypasses the locked Study 17-B door.',
    bullet2: 'BOOT PRINTS: Muddy tread matches caretaker Devraj Negi.',
    bullet3: 'KILLER ROUTE: Dev entered silently during the 12:13 blackout.'
  }
};

interface House3DProps {
  onInspectClue: (clueId: string) => void;
  onOpenTerminal: () => void;
  onTriggerTrauma: () => void;
}

export const House3D: React.FC<House3DProps> = ({
  onInspectClue,
  onOpenTerminal,
  onTriggerTrauma
}) => {
  const mountRef = useRef<HTMLDivElement | null>(null);
  const [nearbyPrompt, setNearbyPrompt] = useState<{ title: string; clueId: string } | null>(null);
  const [flashlightOn, setFlashlightOn] = useState<boolean>(true);
  const [isUvMode, setIsUvMode] = useState<boolean>(false);
  const [whisperNotice, setWhisperNotice] = useState<string | null>(null);

  // Call of Duty Tactical HUD States
  const [compassYaw, setCompassYaw] = useState<number>(0);
  const [activeTarget, setActiveTarget] = useState<{
    id: string;
    title: string;
    clueId: string;
    code: string;
    dist: number;
    summary: string;
  } | null>(null);
  const [inspectingIntel, setInspectingIntel] = useState<{
    id: string;
    title: string;
    code: string;
    clueId: string;
    bullet1: string;
    bullet2: string;
    bullet3: string;
  } | null>(null);
  const [intelUnlockedPopup, setIntelUnlockedPopup] = useState<{ title: string; pts: number } | null>(null);

  const toggleFlashlightRef = useRef<() => void>(() => {});
  const toggleUvRef = useRef<() => void>(() => {});

  // ==========================================
  // PROCEDURAL CANVAS TEXTURE GENERATORS
  // ==========================================

  // Procedural Glowing Luminol Text & Decals for UV Mode
  const createLuminolDecalTexture = (text: string, subText: string, glowColor = '#00ffcc') => {
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 256;
    const ctx = canvas.getContext('2d')!;

    ctx.clearRect(0, 0, 512, 256);

    // Glowing Neon Luminol Text with drop shadow
    ctx.shadowColor = glowColor;
    ctx.shadowBlur = 24;
    ctx.fillStyle = glowColor;
    ctx.font = 'bold 24px "Courier New", monospace';
    ctx.textAlign = 'center';
    ctx.fillText(text, 256, 100);

    if (subText) {
      ctx.font = 'bold 16px "Courier New", monospace';
      ctx.fillStyle = '#ff66ff';
      ctx.shadowColor = '#ff00ff';
      ctx.shadowBlur = 18;
      ctx.fillText(subText, 256, 150);
    }

    // Glowing scratch border
    ctx.strokeStyle = glowColor;
    ctx.lineWidth = 3;
    ctx.strokeRect(20, 20, 472, 216);

    const texture = new THREE.CanvasTexture(canvas);
    return texture;
  };

  // Victorian Damask Burgundy Wallpaper
  const createWallpaperTexture = () => {
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 512;
    const ctx = canvas.getContext('2d')!;

    // Base dark maroon
    ctx.fillStyle = '#22080c';
    ctx.fillRect(0, 0, 512, 512);

    // Damask vertical stripes & flourishes
    ctx.strokeStyle = '#3d1016';
    ctx.lineWidth = 4;
    for (let x = 0; x < 512; x += 64) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, 512);
      ctx.stroke();

      // Diamond flourishes
      for (let y = 32; y < 512; y += 64) {
        ctx.fillStyle = '#4a141b';
        ctx.beginPath();
        ctx.arc(x, y, 8, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    // Aged grunge vignette
    const grad = ctx.createLinearGradient(0, 0, 0, 512);
    grad.addColorStop(0, 'rgba(0,0,0,0.6)');
    grad.addColorStop(0.5, 'rgba(0,0,0,0.1)');
    grad.addColorStop(1, 'rgba(0,0,0,0.8)');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 512, 512);

    const texture = new THREE.CanvasTexture(canvas);
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set(4, 1);
    return texture;
  };

  // Dark Herringbone Varnished Parquet Wood Floor
  const createParquetFloorTexture = () => {
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 512;
    const ctx = canvas.getContext('2d')!;

    ctx.fillStyle = '#140c08';
    ctx.fillRect(0, 0, 512, 512);

    ctx.strokeStyle = '#080503';
    ctx.lineWidth = 3;

    // Wood planks
    for (let y = 0; y < 512; y += 32) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(512, y);
      ctx.stroke();

      for (let x = (y % 64 === 0 ? 0 : 40); x < 512; x += 80) {
        ctx.fillStyle = Math.random() > 0.5 ? '#1a100a' : '#120a06';
        ctx.fillRect(x, y, 78, 30);
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(x, y + 32);
        ctx.stroke();
      }
    }

    const texture = new THREE.CanvasTexture(canvas);
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set(2, 6);
    return texture;
  };

  // Ornate Persian Carpet with Blood Spatter
  const createPersianRugTexture = () => {
    const canvas = document.createElement('canvas');
    canvas.width = 256;
    canvas.height = 1024;
    const ctx = canvas.getContext('2d')!;

    // Crimson field
    ctx.fillStyle = '#38060b';
    ctx.fillRect(0, 0, 256, 1024);

    // Gold/Navy ornate borders
    ctx.strokeStyle = '#997a3d';
    ctx.lineWidth = 8;
    ctx.strokeRect(12, 12, 232, 1000);

    ctx.strokeStyle = '#1a243b';
    ctx.lineWidth = 4;
    ctx.strokeRect(24, 24, 208, 976);

    // Blood Drag Mark down the rug
    ctx.fillStyle = 'rgba(90, 0, 0, 0.85)';
    ctx.beginPath();
    ctx.moveTo(110, 800);
    ctx.bezierCurveTo(140, 600, 90, 300, 130, 50);
    ctx.lineTo(150, 50);
    ctx.bezierCurveTo(110, 300, 160, 600, 130, 800);
    ctx.fill();

    const texture = new THREE.CanvasTexture(canvas);
    return texture;
  };

  // Creepy Oil Painting Generator
  const createFramedPaintingTexture = (subjectName: string, year: string, bloodSplat = false) => {
    const canvas = document.createElement('canvas');
    canvas.width = 256;
    canvas.height = 340;
    const ctx = canvas.getContext('2d')!;

    // Gold ornate gilded frame
    ctx.fillStyle = '#8a6d2b';
    ctx.fillRect(0, 0, 256, 340);
    ctx.fillStyle = '#543f12';
    ctx.fillRect(8, 8, 240, 324);
    ctx.fillStyle = '#100b08';
    ctx.fillRect(18, 18, 220, 304);

    // Portrait Silhouette
    ctx.fillStyle = '#261914';
    ctx.beginPath();
    ctx.arc(128, 120, 55, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.ellipse(128, 240, 75, 60, 0, 0, Math.PI * 2);
    ctx.fill();

    // Glowing creepy eyes
    ctx.fillStyle = '#ff3333';
    ctx.beginPath();
    ctx.arc(115, 115, 3.5, 0, Math.PI * 2);
    ctx.arc(141, 115, 3.5, 0, Math.PI * 2);
    ctx.fill();

    // Blood dripping from portrait
    if (bloodSplat) {
      ctx.fillStyle = '#8b0000';
      ctx.beginPath();
      ctx.moveTo(115, 120);
      ctx.lineTo(112, 280);
      ctx.lineTo(118, 280);
      ctx.fill();
    }

    // Nameplate
    ctx.fillStyle = '#c9b277';
    ctx.fillRect(50, 285, 156, 26);
    ctx.fillStyle = '#1a1005';
    ctx.font = 'bold 11px Courier New';
    ctx.textAlign = 'center';
    ctx.fillText(subjectName, 128, 302);

    return new THREE.CanvasTexture(canvas);
  };

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene & Dark Fog
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x06050a, 0.09);

    const camera = new THREE.PerspectiveCamera(
      70,
      mountRef.current.clientWidth / mountRef.current.clientHeight,
      0.1,
      100
    );
    camera.position.set(0, 1.6, 12);

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: 'high-performance' });
    renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    mountRef.current.appendChild(renderer.domElement);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0x0a060a, 0.8);
    scene.add(ambientLight);

    // Handheld Flashlight Spotlight
    const flashlight = new THREE.SpotLight(0xffeedd, 4.2, 26, Math.PI / 5.5, 0.5, 1.1);
    flashlight.castShadow = true;
    camera.add(flashlight);
    flashlight.position.set(0.2, -0.2, 0);
    flashlight.target.position.set(0, 0, -5);
    camera.add(flashlight.target);
    scene.add(camera);

    // Chandelier Flickering Pointlight
    const chandelier = new THREE.PointLight(0xff7722, 1.4, 12, 1.2);
    chandelier.position.set(0, 2.8, 0);
    scene.add(chandelier);

    // ==========================================
    // PROCEDURAL TEXTURED ARCHITECTURE
    // ==========================================

    // Floor
    const floorGeo = new THREE.PlaneGeometry(8, 36);
    const floorMat = new THREE.MeshStandardMaterial({
      map: createParquetFloorTexture(),
      roughness: 0.6,
      metalness: 0.2
    });
    const floor = new THREE.Mesh(floorGeo, floorMat);
    floor.rotation.x = -Math.PI / 2;
    floor.receiveShadow = true;
    scene.add(floor);

    // Carpet Runner
    const carpetGeo = new THREE.PlaneGeometry(2.4, 34);
    const carpetMat = new THREE.MeshStandardMaterial({
      map: createPersianRugTexture(),
      roughness: 0.9
    });
    const carpet = new THREE.Mesh(carpetGeo, carpetMat);
    carpet.rotation.x = -Math.PI / 2;
    carpet.position.set(0, 0.015, 0);
    carpet.receiveShadow = true;
    scene.add(carpet);

    // Ceiling
    const ceiling = new THREE.Mesh(
      new THREE.PlaneGeometry(8, 36),
      new THREE.MeshStandardMaterial({ color: 0x0a090d, roughness: 0.9 })
    );
    ceiling.rotation.x = Math.PI / 2;
    ceiling.position.y = 3.2;
    scene.add(ceiling);

    // Walls with Damask Wallpaper
    const wallGeo = new THREE.PlaneGeometry(36, 3.2);
    const wallMat = new THREE.MeshStandardMaterial({
      map: createWallpaperTexture(),
      roughness: 0.7
    });

    const leftWall = new THREE.Mesh(wallGeo, wallMat);
    leftWall.rotation.y = Math.PI / 2;
    leftWall.position.set(-4, 1.6, 0);
    scene.add(leftWall);

    const rightWall = new THREE.Mesh(wallGeo, wallMat);
    rightWall.rotation.y = -Math.PI / 2;
    rightWall.position.set(4, 1.6, 0);
    scene.add(rightWall);

    const backWall = new THREE.Mesh(new THREE.PlaneGeometry(8, 3.2), wallMat);
    backWall.position.set(0, 1.6, 18);
    backWall.rotation.y = Math.PI;
    scene.add(backWall);

    // ==========================================
    // FLOATING DUST MOTES (VOLUMETRIC FOG PARTICLES)
    // ==========================================
    const particleCount = 400;
    const particleGeo = new THREE.BufferGeometry();
    const particlePos = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i += 3) {
      particlePos[i] = (Math.random() - 0.5) * 7.5;
      particlePos[i + 1] = Math.random() * 3.0;
      particlePos[i + 2] = (Math.random() - 0.5) * 34;
    }
    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePos, 3));

    const particleMat = new THREE.PointsMaterial({
      color: 0xddc8a0,
      size: 0.04,
      transparent: true,
      opacity: 0.55
    });
    const dustParticles = new THREE.Points(particleGeo, particleMat);
    scene.add(dustParticles);

    // ==========================================
    // FRAMED OIL PAINTINGS ON WALLS
    // ==========================================
    const paintingGeo = new THREE.PlaneGeometry(1.2, 1.6);

    // Portrait 1: Professor Vikram Sen (Left wall, bleeding temple)
    const senPainting = new THREE.Mesh(
      paintingGeo,
      new THREE.MeshStandardMaterial({ map: createFramedPaintingTexture('PROF. V. SEN', '1968-DECEASED', true) })
    );
    senPainting.rotation.y = Math.PI / 2;
    senPainting.position.set(-3.95, 1.8, 6);
    scene.add(senPainting);

    // Portrait 2: Professor Alistair Blackwood (Right wall)
    const blackwoodPainting = new THREE.Mesh(
      paintingGeo,
      new THREE.MeshStandardMaterial({ map: createFramedPaintingTexture('A. BLACKWOOD', 'MISSING 20 YRS', false) })
    );
    blackwoodPainting.rotation.y = -Math.PI / 2;
    blackwoodPainting.position.set(3.95, 1.8, 0);
    scene.add(blackwoodPainting);

    // Portrait 3: Dr. Meera Patel (Left wall, near crime scene)
    const meeraPainting = new THREE.Mesh(
      paintingGeo,
      new THREE.MeshStandardMaterial({ map: createFramedPaintingTexture('DR. M. PATEL', 'PRIMARY SUSPECT', true) })
    );
    meeraPainting.rotation.y = Math.PI / 2;
    meeraPainting.position.set(-3.95, 1.8, -8);
    scene.add(meeraPainting);

    // ==========================================
    // 3D CRIME SCENE OBJECTS
    // ==========================================

    // 1. GRANDFATHER CLOCK (East Hallway End)
    const clockGroup = new THREE.Group();
    clockGroup.position.set(0, 0, 16);

    const clockBody = new THREE.Mesh(
      new THREE.BoxGeometry(1.0, 2.7, 0.65),
      new THREE.MeshStandardMaterial({ color: 0x241107, roughness: 0.5, metalness: 0.2 })
    );
    clockBody.position.y = 1.35;
    clockGroup.add(clockBody);

    // Antique Roman Numeral Clock Face
    const clockFace = new THREE.Mesh(
      new THREE.CylinderGeometry(0.35, 0.35, 0.06, 32),
      new THREE.MeshStandardMaterial({ color: 0xe6d4b3, roughness: 0.3 })
    );
    clockFace.rotation.x = Math.PI / 2;
    clockFace.position.set(0, 2.1, 0.35);
    clockGroup.add(clockFace);

    // Pendulum
    const pendulumRod = new THREE.Mesh(
      new THREE.CylinderGeometry(0.02, 0.02, 1.0, 8),
      new THREE.MeshStandardMaterial({ color: 0xd4af37, metalness: 0.9, roughness: 0.1 })
    );
    pendulumRod.position.set(0, 1.05, 0.15);
    clockGroup.add(pendulumRod);
    scene.add(clockGroup);

    // 2. STUDY ROOM 17-B DOOR (Murder Scene)
    const doorGroup = new THREE.Group();
    doorGroup.position.set(0, 0, -17.8);

    const door = new THREE.Mesh(
      new THREE.BoxGeometry(1.8, 2.9, 0.12),
      new THREE.MeshStandardMaterial({ color: 0x2e0808, roughness: 0.4 })
    );
    door.position.y = 1.45;
    doorGroup.add(door);

    const knob = new THREE.Mesh(
      new THREE.SphereGeometry(0.09, 16, 16),
      new THREE.MeshStandardMaterial({ color: 0xc8963e, metalness: 0.95, roughness: 0.1 })
    );
    knob.position.set(0.65, 1.35, 0.12);
    doorGroup.add(knob);

    // Police Tape Barrier
    const tape = new THREE.Mesh(
      new THREE.PlaneGeometry(1.7, 0.22),
      new THREE.MeshStandardMaterial({ color: 0xffea00, roughness: 0.3 })
    );
    tape.position.set(0, 1.6, 0.15);
    doorGroup.add(tape);
    scene.add(doorGroup);

    // 3. TABLE WITH TAPE RECORDER (Evidence 04)
    const tableGroup = new THREE.Group();
    tableGroup.position.set(-3.2, 0, -4);
    const table = new THREE.Mesh(
      new THREE.BoxGeometry(1.1, 0.9, 1.4),
      new THREE.MeshStandardMaterial({ color: 0x1f1007, roughness: 0.7 })
    );
    table.position.y = 0.45;
    tableGroup.add(table);

    const tapeRecorder = new THREE.Mesh(
      new THREE.BoxGeometry(0.55, 0.18, 0.45),
      new THREE.MeshStandardMaterial({ color: 0x333338, metalness: 0.7 })
    );
    tapeRecorder.position.set(0, 0.99, 0);
    tableGroup.add(tapeRecorder);
    scene.add(tableGroup);

    // 4. ARCHIVE CABINET (Aarav's Crime)
    const cabinetGroup = new THREE.Group();
    cabinetGroup.position.set(3.2, 0, 4);
    const cabinet = new THREE.Mesh(
      new THREE.BoxGeometry(0.9, 2.3, 1.3),
      new THREE.MeshStandardMaterial({ color: 0x18181f, roughness: 0.6 })
    );
    cabinet.position.y = 1.15;
    cabinetGroup.add(cabinet);
    scene.add(cabinetGroup);

    // 5. STALKING SHADOW SILHOUETTE
    const shadowFig = new THREE.Mesh(
      new THREE.CylinderGeometry(0.38, 0.48, 1.85, 16),
      new THREE.MeshBasicMaterial({ color: 0x000000 })
    );
    shadowFig.position.set(-2.5, 0.92, -15);
    scene.add(shadowFig);
    let shadowVisible = true;

    // ==========================================
    // UV LUMINOL DECALS (REVEALED IN UV MODE)
    // ==========================================
    const luminolMaterials: THREE.MeshBasicMaterial[] = [];

    const createLuminolDecalMesh = (text: string, subText: string, color: string, w = 3.0, h = 1.4) => {
      const geo = new THREE.PlaneGeometry(w, h);
      const mat = new THREE.MeshBasicMaterial({
        map: createLuminolDecalTexture(text, subText, color),
        transparent: true,
        opacity: 0.0,
        visible: false,
        depthWrite: false,
        side: THREE.DoubleSide
      });
      luminolMaterials.push(mat);
      return new THREE.Mesh(geo, mat);
    };

    // 1. Clock Anomaly Graffiti (Left wall)
    const uvClockDecal = createLuminolDecalMesh(
      "DON'T TRUST KITCHEN CLOCK",
      "+16 MIN FORWARD OFFSET",
      "#00ffcc",
      3.2,
      1.5
    );
    uvClockDecal.position.set(-3.94, 1.5, 9);
    uvClockDecal.rotation.y = Math.PI / 2;
    scene.add(uvClockDecal);

    // 2. Meera Assault Forensics (Floor carpet)
    const uvFloorDecal = createLuminolDecalMesh(
      "MEERA STRUCK HIM AT 11:47 PM",
      "SEN WAS BREATHING AT 12:03 AM",
      "#00ff88",
      2.5,
      1.3
    );
    uvFloorDecal.position.set(0, 0.03, 0);
    uvFloorDecal.rotation.x = -Math.PI / 2;
    scene.add(uvFloorDecal);

    // 3. Secret Servant Passage Clue (Right wall)
    const uvPassageDecal = createLuminolDecalMesh(
      "DEV IS IN THE WALLS",
      "SERVICE TUNNEL BYPASSES 17-B LOCK",
      "#ff00ea",
      3.2,
      1.5
    );
    uvPassageDecal.position.set(3.94, 1.5, -8);
    uvPassageDecal.rotation.y = -Math.PI / 2;
    scene.add(uvPassageDecal);

    // 4. Pre-Crime Spool Decal (Study 17-B Door)
    const uvDoorDecal = createLuminolDecalMesh(
      "SPOOL 12: PRINTED AT 11:41 PM",
      "PRE-CRIME FABRICATION DETECTED",
      "#00ffff",
      1.6,
      0.9
    );
    uvDoorDecal.position.set(0, 2.0, -17.7);
    scene.add(uvDoorDecal);

    // ==========================================
    // CALL OF DUTY 3D IN-WORLD TACTICAL WAYPOINTS
    // ==========================================
    const tacticalWaypoints: Array<{
      id: string;
      clueId: string;
      code: string;
      title: string;
      pos: THREE.Vector3;
      mesh: THREE.Mesh;
      color: string;
      canvas: HTMLCanvasElement;
      texture: THREE.CanvasTexture;
    }> = [];

    const create3DWaypoint = (
      id: string,
      clueId: string,
      code: string,
      title: string,
      color: string,
      pos: THREE.Vector3
    ) => {
      const canvas = document.createElement('canvas');
      canvas.width = 512;
      canvas.height = 140;
      const texture = new THREE.CanvasTexture(canvas);
      texture.minFilter = THREE.LinearFilter;

      const mat = new THREE.MeshBasicMaterial({
        map: texture,
        transparent: true,
        opacity: 0.95,
        depthWrite: false,
        side: THREE.DoubleSide
      });

      const mesh = new THREE.Mesh(new THREE.PlaneGeometry(2.6, 0.7), mat);
      mesh.position.copy(pos);
      scene.add(mesh);

      tacticalWaypoints.push({
        id,
        clueId,
        code,
        title,
        pos,
        mesh,
        color,
        canvas,
        texture
      });
    };

    create3DWaypoint(
      'wp-clock',
      'ev-2',
      'OBJ 01 // HALTED 11:47 PM',
      'GRANDFATHER CLOCK',
      '#f59e0b',
      new THREE.Vector3(0, 2.7, 16)
    );

    create3DWaypoint(
      'wp-door',
      'ev-11',
      'BREACH // LOCKED SCENE',
      'STUDY 17-B DOOR',
      '#ef4444',
      new THREE.Vector3(0, 3.1, -17.5)
    );

    create3DWaypoint(
      'wp-tape',
      'ev-4',
      'INTEL 04 // AUDIO REEL',
      'DICTAPHONE TAPE #4',
      '#06b6d4',
      new THREE.Vector3(-3.2, 1.8, -4)
    );

    create3DWaypoint(
      'wp-cabinet',
      'ev-3',
      'CLUE 03 // EVIDENCE THEFT',
      'ARCHIVE CABINET',
      '#a855f7',
      new THREE.Vector3(3.2, 2.0, 4)
    );

    create3DWaypoint(
      'wp-grate',
      'ev-13',
      'ROUTE // CARETAKER ACCESS',
      'SERVICE TUNNEL GRATE',
      '#10b981',
      new THREE.Vector3(2.8, 1.3, -10)
    );

    // ==========================================
    // LIGHTING & UV LOGIC
    // ==========================================
    let isFlashlightActive = true;
    let isUvActive = false;

    const applyLighting = (flashlightState: boolean, uvState: boolean) => {
      if (!flashlightState) {
        flashlight.intensity = 0;
      } else if (uvState) {
        flashlight.color.setHex(0x9d4edd); // Rich neon ultraviolet
        flashlight.intensity = 6.2;
        ambientLight.color.setHex(0x06020c);
      } else {
        flashlight.color.setHex(0xffeedd); // Halogen warm
        flashlight.intensity = 4.2;
        ambientLight.color.setHex(0x0a060a);
      }

      luminolMaterials.forEach((mat) => {
        mat.visible = uvState && flashlightState;
        mat.opacity = uvState && flashlightState ? 0.96 : 0.0;
      });
    };

    const toggleFlashlight = () => {
      isFlashlightActive = !isFlashlightActive;
      setFlashlightOn(isFlashlightActive);
      sound.playTick(false);
      applyLighting(isFlashlightActive, isUvActive);
    };

    const toggleUvMode = () => {
      isUvActive = !isUvActive;
      setIsUvMode(isUvActive);
      sound.playNightVisionToggle();
      if (isUvActive) {
        sound.playHorrorStinger();
      }
      applyLighting(isFlashlightActive, isUvActive);
    };

    toggleFlashlightRef.current = toggleFlashlight;
    toggleUvRef.current = toggleUvMode;

    // ==========================================
    // CONTROLS & MOVEMENT
    // ==========================================
    const keys: Record<string, boolean> = {};
    let pitch = 0;
    let yaw = 0;
    let isMouseDown = false;
    let prevMouseX = 0;
    let prevMouseY = 0;
    let stepCycle = 0;
    let footstepCooldown = 0;
    let idleWhisperTimer = 0;

    const onKeyDown = (e: KeyboardEvent) => {
      keys[e.code] = true;
      idleWhisperTimer = 0;

      if (e.code === 'KeyF') {
        toggleFlashlight();
      }

      if (e.code === 'KeyL') {
        toggleUvMode();
      }

      if (e.code === 'KeyE') {
        checkInteraction(true);
      }

      if (e.code === 'Tab') {
        e.preventDefault();
        onOpenTerminal();
        sound.playTick(false);
      }
    };

    const onKeyUp = (e: KeyboardEvent) => {
      keys[e.code] = false;
    };

    const onMouseDown = (e: MouseEvent) => {
      isMouseDown = true;
      prevMouseX = e.clientX;
      prevMouseY = e.clientY;
    };

    const onMouseUp = () => {
      isMouseDown = false;
    };

    const onMouseMove = (e: MouseEvent) => {
      if (!isMouseDown) return;
      const deltaX = e.clientX - prevMouseX;
      const deltaY = e.clientY - prevMouseY;
      prevMouseX = e.clientX;
      prevMouseY = e.clientY;

      yaw -= deltaX * 0.003;
      pitch -= deltaY * 0.003;
      pitch = Math.max(-Math.PI / 2.5, Math.min(Math.PI / 2.5, pitch));
    };

    window.addEventListener('keydown', onKeyDown);
    window.addEventListener('keyup', onKeyUp);
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);
    window.addEventListener('mousemove', onMouseMove);

    const checkInteraction = (isTrigger = false) => {
      const p = camera.position;
      let found: { title: string; clueId: string } | null = null;

      if (p.distanceTo(clockGroup.position) < 3.8) {
        found = { title: 'GRANDFATHER CLOCK (HALTED AT 11:47 PM)', clueId: 'ev-2' };
      } else if (p.distanceTo(doorGroup.position) < 4.2) {
        found = { title: 'STUDY 17-B LOCKED CRIME SCENE DOOR', clueId: 'ev-11' };
        if (isTrigger) {
          // Play door stress rattle and human scream
          sound.playDoorRattle();
          sound.playTerrifyingScream();
          onTriggerTrauma();
        }
      } else if (p.distanceTo(tableGroup.position) < 3.2) {
        found = { title: 'DICTAPHONE CASSETTE RECORDER #4', clueId: 'ev-4' };
      } else if (p.distanceTo(cabinetGroup.position) < 3.2) {
        found = { title: 'ARCHIVE CABINET (AARAV STOLEN NOTEBOOK)', clueId: 'ev-3' };
      } else if (p.distanceTo(new THREE.Vector3(2.8, 0, -10)) < 3.0) {
        found = { title: 'HIDDEN CARETAKER SERVICE GRATE (DEV ROUTE)', clueId: 'ev-13' };
      }

      setNearbyPrompt(found);

      if (isTrigger && found) {
        sound.playHitmarker();
        sound.playRadioChirp();
        const intel = TACTICAL_INTEL_DATA[found.clueId];
        if (intel) {
          setInspectingIntel(intel);
          setIntelUnlockedPopup({ title: intel.title, pts: 100 });
          sound.playObjectiveComplete();
          setTimeout(() => setIntelUnlockedPopup(null), 2500);
        } else {
          onInspectClue(found.clueId);
        }
      }
    };

    // Animation Loop
    let animId: number;
    let clockTime = 0;

    const animate = () => {
      animId = requestAnimationFrame(animate);
      clockTime += 0.02;

      // Pendulum swinging
      pendulumRod.rotation.z = Math.sin(clockTime * 2.8) * 0.28;

      // Flickering chandelier
      chandelier.intensity = 1.0 + Math.sin(clockTime * 18) * 0.3 + (Math.random() > 0.96 ? -0.7 : 0);

      // Drift dust particles
      const positions = dustParticles.geometry.attributes.position.array as Float32Array;
      for (let i = 1; i < positions.length; i += 3) {
        positions[i] -= 0.002;
        if (positions[i] < 0) positions[i] = 3.0;
      }
      dustParticles.geometry.attributes.position.needsUpdate = true;

      // Update Call of Duty Compass Heading (0 to 360 deg)
      setCompassYaw(yaw);

      // Update 3D Tactical Holographic Waypoint Billboards & Find Closest Target
      const camPos = camera.position;
      let closestTarget: {
        id: string;
        title: string;
        clueId: string;
        code: string;
        dist: number;
        summary: string;
      } | null = null;
      let minDistance = 3.8;

      tacticalWaypoints.forEach((wp) => {
        wp.mesh.lookAt(camera.position);
        wp.mesh.position.y = wp.pos.y + Math.sin(clockTime * 2.8 + wp.pos.z) * 0.06;

        const dist = camPos.distanceTo(wp.pos);
        if (dist < minDistance) {
          minDistance = dist;
          closestTarget = {
            id: wp.id,
            title: wp.title,
            clueId: wp.clueId,
            code: wp.code,
            dist,
            summary: ''
          };
        }

        const isNear = dist < 3.8;
        const ctx = wp.canvas.getContext('2d')!;
        ctx.clearRect(0, 0, 512, 140);

        // Tactical Corner Brackets
        ctx.strokeStyle = isNear ? '#ff0033' : wp.color;
        ctx.lineWidth = isNear ? 5 : 3;
        ctx.shadowColor = isNear ? '#ff0033' : wp.color;
        ctx.shadowBlur = isNear ? 22 : 10;

        const pad = 8;
        const w = 512 - pad * 2;
        const h = 140 - pad * 2;
        const b = 25;
        ctx.beginPath();
        ctx.moveTo(pad, pad + b); ctx.lineTo(pad, pad); ctx.lineTo(pad + b, pad);
        ctx.moveTo(pad + w - b, pad); ctx.lineTo(pad + w, pad); ctx.lineTo(pad + w, pad + b);
        ctx.moveTo(pad, pad + h - b); ctx.lineTo(pad, pad + h); ctx.lineTo(pad + b, pad + h);
        ctx.moveTo(pad + w - b, pad + h); ctx.lineTo(pad + w, pad + h); ctx.lineTo(pad + w, pad + h - b);
        ctx.stroke();

        ctx.fillStyle = isNear ? 'rgba(50, 0, 10, 0.88)' : 'rgba(8, 8, 16, 0.75)';
        ctx.fillRect(pad + 3, pad + 3, w - 6, h - 6);

        // Diamond Icon
        ctx.fillStyle = isNear ? '#ff0033' : wp.color;
        ctx.beginPath();
        ctx.moveTo(40, 70); ctx.lineTo(55, 50); ctx.lineTo(70, 70); ctx.lineTo(55, 90); ctx.closePath();
        ctx.fill();

        // Code
        ctx.fillStyle = '#888888';
        ctx.font = 'bold 16px "Courier New", monospace';
        ctx.textAlign = 'left';
        ctx.fillText(wp.code, 85, 48);

        // Title
        ctx.fillStyle = '#ffffff';
        ctx.font = 'bold 22px "Courier New", monospace';
        ctx.fillText(wp.title, 85, 76);

        // Status / Distance
        ctx.fillStyle = isNear ? '#ff3344' : '#00ffcc';
        ctx.font = 'bold 18px "Courier New", monospace';
        const statusTxt = isNear ? `[E] SECURE INTEL (${dist.toFixed(1)}m)` : `DISTANCE: ${dist.toFixed(1)}m`;
        ctx.fillText(statusTxt, 85, 104);

        wp.texture.needsUpdate = true;
      });

      setActiveTarget(closestTarget);

      // Jumpscare when approaching Study Door:
      // The shadow disappears with bloodcurdling human scream!
      if (shadowVisible && camera.position.z < 1) {
        shadowVisible = false;
        scene.remove(shadowFig);
        sound.playTerrifyingScream();
        sound.playViolinShriek();
        onTriggerTrauma();
      }

      // Idle eerie whispers
      idleWhisperTimer++;
      if (idleWhisperTimer > 700) {
        idleWhisperTimer = 0;
        const whispers = [
          "He's behind you...",
          "The clock lied...",
          "Meera didn't kill him...",
          "Dev was waiting in the dark..."
        ];
        const randomWhisper = whispers[Math.floor(Math.random() * whispers.length)];
        setWhisperNotice(randomWhisper);
        sound.playBinauralWhisper(randomWhisper);
        setTimeout(() => setWhisperNotice(null), 3000);
      }

      // Camera Movement
      camera.rotation.order = 'YXZ';
      camera.rotation.y = yaw;
      camera.rotation.x = pitch;

      const moveSpeed = 0.085;
      const forward = new THREE.Vector3(0, 0, -1).applyAxisAngle(new THREE.Vector3(0, 1, 0), yaw);
      const right = new THREE.Vector3(1, 0, 0).applyAxisAngle(new THREE.Vector3(0, 1, 0), yaw);
      let isMoving = false;

      if (keys['KeyW'] || keys['ArrowUp']) {
        camera.position.addScaledVector(forward, moveSpeed);
        isMoving = true;
      }
      if (keys['KeyS'] || keys['ArrowDown']) {
        camera.position.addScaledVector(forward, -moveSpeed);
        isMoving = true;
      }
      if (keys['KeyA'] || keys['ArrowLeft']) {
        camera.position.addScaledVector(right, -moveSpeed);
        isMoving = true;
      }
      if (keys['KeyD'] || keys['ArrowRight']) {
        camera.position.addScaledVector(right, moveSpeed);
        isMoving = true;
      }

      camera.position.x = Math.max(-3.4, Math.min(3.4, camera.position.x));
      camera.position.z = Math.max(-16.5, Math.min(16.5, camera.position.z));

      if (isMoving) {
        stepCycle += 0.16;
        camera.position.y = 1.6 + Math.sin(stepCycle) * 0.04;
        footstepCooldown++;
        if (footstepCooldown > 18) {
          sound.playFootstep();
          footstepCooldown = 0;
        }
      } else {
        camera.position.y = 1.6;
      }

      checkInteraction(false);
      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      if (!mountRef.current) return;
      camera.aspect = mountRef.current.clientWidth / mountRef.current.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('keydown', onKeyDown);
      window.removeEventListener('keyup', onKeyUp);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      window.removeEventListener('mousemove', onMouseMove);
      renderer.dispose();
      if (mountRef.current) mountRef.current.innerHTML = '';
    };
  }, []);

  return (
    <div className="relative w-full h-[78vh] min-h-[550px] bg-black rounded-lg overflow-hidden border-2 border-red-950 shadow-[0_0_60px_rgba(0,0,0,0.95)] select-none font-mono crt-overlay">
      {/* 3D Canvas */}
      <div ref={mountRef} className="w-full h-full cursor-crosshair" />

      {/* CALL OF DUTY TACTICAL COMPASS HUD */}
      <div className="absolute top-2 left-1/2 -translate-x-1/2 w-[340px] sm:w-[480px] h-8 bg-black/80 backdrop-blur-md border border-gray-800/90 rounded-sm overflow-hidden pointer-events-none z-30 shadow-2xl flex flex-col items-center justify-center">
        {/* Reticle Center Line */}
        <div className="absolute top-0 bottom-0 w-0.5 bg-red-500 z-10 shadow-[0_0_8px_#ff0000]" />
        <div className="absolute -top-1 w-2 h-2 rotate-45 bg-red-500 z-10" />

        {/* Sliding Compass Tape */}
        <div
          className="flex items-center gap-6 text-[10px] font-mono tracking-widest text-gray-400 select-none whitespace-nowrap transition-transform ease-out duration-75"
          style={{
            transform: `translateX(${-(compassYaw * (180 / Math.PI) * 2.2) % 360}px)`
          }}
        >
          {[-360, 0, 360].map((base) => (
            <React.Fragment key={base}>
              <span>000° <strong className="text-white">N</strong></span>
              <span>•</span>
              <span>045° <strong className="text-amber-400">NE</strong></span>
              <span>•</span>
              <span>090° <strong className="text-white">E</strong></span>
              <span>•</span>
              <span>135° <strong className="text-amber-400">SE</strong></span>
              <span>•</span>
              <span>180° <strong className="text-red-500">S</strong></span>
              <span>•</span>
              <span>225° <strong className="text-amber-400">SW</strong></span>
              <span>•</span>
              <span>270° <strong className="text-white">W</strong></span>
              <span>•</span>
              <span>315° <strong className="text-amber-400">NW</strong></span>
              <span>•</span>
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* CALL OF DUTY DYNAMIC RETICLE & HITMARKER */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center z-20">
        {activeTarget ? (
          // Targeted / In-Range: Crimson Hitmarker Brackets & Distance
          <div className="relative flex items-center justify-center animate-pulse">
            <div className="w-10 h-10 border-2 border-red-500/80 rounded-sm rotate-45 shadow-[0_0_15px_rgba(255,0,0,0.9)]" />
            <div className="w-2.5 h-2.5 rounded-full bg-red-500 absolute shadow-[0_0_8px_#ff0000]" />
            <span className="absolute -top-8 text-[10px] bg-black/95 px-2.5 py-0.5 rounded border border-red-600 text-red-400 font-black tracking-widest uppercase whitespace-nowrap shadow-xl">
              [E] {activeTarget.title} ({activeTarget.dist.toFixed(1)}m)
            </span>
          </div>
        ) : (
          // Passive Tactical 4-Axis Reticle
          <div className="relative flex items-center justify-center">
            <div className="w-1.5 h-1.5 rounded-full bg-red-500/80 shadow-[0_0_6px_#ff0000]" />
            <div className="absolute w-4 h-0.5 bg-red-500/40 -left-5" />
            <div className="absolute w-4 h-0.5 bg-red-500/40 -right-5" />
            <div className="absolute h-4 w-0.5 bg-red-500/40 -top-5" />
            <div className="absolute h-4 w-0.5 bg-red-500/40 -bottom-5" />
          </div>
        )}
      </div>

      {/* CALL OF DUTY NVG / UV LUMINOL OVERLAY */}
      {isUvMode && (
        <div className="absolute inset-0 pointer-events-none z-10">
          <div className="absolute inset-0 shadow-[inset_0_0_120px_rgba(147,51,234,0.7)]" />
          <div className="absolute top-12 left-4 flex items-center gap-3 text-[10px] text-purple-300 font-mono font-bold tracking-widest bg-purple-950/85 px-3 py-1 rounded border border-purple-600 shadow-xl">
            <span className="w-2 h-2 rounded-full bg-purple-400 animate-ping" />
            <span>NVG // UV LUMINOL OPTICS [ACTIVE]</span>
            <span className="text-purple-400">BATTERY: 98%</span>
          </div>
        </div>
      )}

      {/* TOP LEFT TACTICAL HUD */}
      <div className="absolute top-4 left-4 flex flex-wrap items-center gap-2 z-20">
        <div className="px-3 py-1.5 rounded bg-black/85 border border-red-900 text-xs text-red-400 font-black flex items-center gap-2 shadow-2xl tracking-wider">
          <ShieldAlert className="w-4 h-4 text-red-500 animate-pulse" />
          <span>BLACKWOOD HALLWAY // 3D RECON</span>
        </div>

        {/* Flashlight Toggle */}
        <button
          onClick={() => toggleFlashlightRef.current()}
          className={`cursor-pointer px-3 py-1.5 rounded text-xs border font-bold flex items-center gap-1.5 shadow transition ${
            flashlightOn 
              ? 'bg-amber-950/80 border-amber-500 text-amber-300 shadow-[0_0_15px_rgba(245,158,11,0.4)]' 
              : 'bg-black/80 border-gray-800 text-gray-500'
          }`}
          title="Toggle Halogen Flashlight [F]"
        >
          <Flashlight className="w-3.5 h-3.5" />
          <span>[F] {flashlightOn ? 'LIGHT ON' : 'LIGHT OFF'}</span>
        </button>

        {/* UV Blacklight Toggle */}
        <button
          onClick={() => toggleUvRef.current()}
          className={`cursor-pointer px-3 py-1.5 rounded text-xs border font-bold flex items-center gap-1.5 shadow transition ${
            isUvMode 
              ? 'bg-purple-950 border-purple-500 text-purple-200 shadow-[0_0_25px_rgba(168,85,247,0.8)] animate-pulse' 
              : 'bg-black/80 border-gray-800 text-purple-400/80 hover:text-purple-300'
          }`}
          title="Toggle UV Blacklight [L]"
        >
          <Eye className="w-3.5 h-3.5 text-purple-400" />
          <span>[L] UV LUMINOL {isUvMode ? 'ON' : 'OFF'}</span>
        </button>
      </div>

      {/* TOP RIGHT SWITCH BUTTON */}
      <div className="absolute top-4 right-4 z-20">
        <button
          onClick={onOpenTerminal}
          className="px-4 py-2 bg-red-950 hover:bg-red-900 border-2 border-red-600 text-white font-black text-xs rounded transition shadow-[0_0_25px_rgba(229,9,20,0.6)] flex items-center gap-2 tracking-wider uppercase cursor-pointer"
        >
          <FileText className="w-4 h-4" />
          <span>CASE TERMINAL [TAB]</span>
        </button>
      </div>

      {/* CALL OF DUTY XP INTEL SECURED POPUP */}
      {intelUnlockedPopup && (
        <div className="absolute top-14 right-4 z-30 pointer-events-none animate-bounce">
          <div className="px-4 py-2 bg-emerald-950/95 border-2 border-emerald-500 rounded text-emerald-200 font-mono text-xs font-black shadow-[0_0_30px_rgba(16,185,129,0.9)] flex items-center gap-2">
            <span className="text-emerald-400 text-base">✓</span>
            <span>+{intelUnlockedPopup.pts} XP INTEL SECURED // {intelUnlockedPopup.title}</span>
          </div>
        </div>
      )}

      {/* Eerie Ghostly Whisper Notification */}
      {whisperNotice && (
        <div className="absolute top-20 left-1/2 -translate-x-1/2 z-20 pointer-events-none animate-pulse">
          <div className="px-6 py-2 rounded-full bg-red-950/80 border border-red-600 text-red-200 text-xs font-serif italic tracking-widest flex items-center gap-2 shadow-2xl">
            <Volume2 className="w-4 h-4 text-red-400 animate-bounce" />
            <span>"{whisperNotice}"</span>
          </div>
        </div>
      )}

      {/* CALL OF DUTY IN-GAME 3D HOLOGRAPHIC INTEL INSPECTION CARD */}
      {inspectingIntel && (
        <div className="absolute inset-0 z-40 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 select-none font-mono animate-fade-in">
          <div className="w-full max-w-lg bg-[#0b0b14] border-2 border-cyan-500/80 rounded-lg p-6 shadow-[0_0_50px_rgba(6,182,212,0.4)] space-y-4 text-gray-200 relative overflow-hidden">
            {/* Top Scanline */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-pulse" />

            {/* Card Header */}
            <div className="flex items-center justify-between pb-3 border-b border-cyan-950">
              <div className="flex items-center gap-2">
                <ShieldAlert className="w-5 h-5 text-cyan-400 animate-pulse" />
                <span className="text-xs font-black text-cyan-400 tracking-widest uppercase">
                  CALL OF DUTY // TACTICAL INTEL
                </span>
              </div>
              <span className="text-[10px] px-2 py-0.5 bg-cyan-950 border border-cyan-800 text-cyan-300 font-bold rounded">
                {inspectingIntel.code}
              </span>
            </div>

            {/* Title */}
            <div>
              <h3 className="text-xl font-black text-white tracking-wide uppercase font-serif">
                {inspectingIntel.title}
              </h3>
              <p className="text-[11px] text-cyan-400/90 font-mono tracking-wider mt-0.5">
                PHYSICAL RECONNAISSANCE VERIFIED
              </p>
            </div>

            {/* 3 High-Impact Tactical Bullet Points (NO HEAVY TEXT!) */}
            <div className="p-4 bg-black/60 rounded border border-cyan-900/50 space-y-2 text-xs">
              <div className="flex items-start gap-2">
                <span className="text-cyan-400 font-black">►</span>
                <span className="text-gray-100">{inspectingIntel.bullet1}</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-amber-400 font-black">►</span>
                <span className="text-amber-200">{inspectingIntel.bullet2}</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-red-400 font-black">►</span>
                <span className="text-red-300 font-bold">{inspectingIntel.bullet3}</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <button
                onClick={() => {
                  sound.playHitmarker();
                  sound.playRadioChirp();
                  onInspectClue(inspectingIntel.clueId);
                  setInspectingIntel(null);
                }}
                className="cursor-pointer py-3 px-4 bg-cyan-800 hover:bg-cyan-700 text-white font-black text-xs uppercase tracking-widest rounded transition shadow-[0_0_20px_rgba(6,182,212,0.4)] flex items-center justify-center gap-2"
              >
                <FileText className="w-4 h-4" />
                <span>ANALYZE IN TERMINAL</span>
              </button>

              <button
                onClick={() => {
                  sound.playHitmarker();
                  setInspectingIntel(null);
                }}
                className="cursor-pointer py-3 px-4 bg-gray-900 hover:bg-gray-800 border border-gray-700 text-gray-300 font-bold text-xs uppercase tracking-widest rounded transition flex items-center justify-center gap-2"
              >
                <span>RESUME RECON</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Proximity Interaction Prompt (Large & Obvious) */}
      {nearbyPrompt && !inspectingIntel && (
        <div className="absolute bottom-16 left-1/2 -translate-x-1/2 z-30 animate-bounce">
          <button
            onClick={() => {
              sound.playHitmarker();
              sound.playRadioChirp();
              const intel = TACTICAL_INTEL_DATA[nearbyPrompt.clueId];
              if (intel) {
                setInspectingIntel(intel);
                setIntelUnlockedPopup({ title: intel.title, pts: 100 });
                sound.playObjectiveComplete();
                setTimeout(() => setIntelUnlockedPopup(null), 2500);
              } else {
                onInspectClue(nearbyPrompt.clueId);
              }
            }}
            className="cursor-pointer px-8 py-3.5 bg-red-700 hover:bg-red-600 border-2 border-red-300 text-white font-black text-sm rounded-lg shadow-[0_0_35px_rgba(255,0,0,0.9)] tracking-widest uppercase flex items-center gap-3"
          >
            <Eye className="w-5 h-5" />
            <span>[E] SECURE INTEL: {nearbyPrompt.title}</span>
          </button>
        </div>
      )}

      {/* Bottom Controls Bar */}
      <div className="absolute bottom-3 left-4 right-4 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-400 bg-black/80 backdrop-blur-md border border-gray-800 rounded px-4 py-2 pointer-events-none z-20">
        <div className="flex flex-wrap items-center gap-2 sm:gap-3">
          <span className="text-red-400 font-bold uppercase tracking-wider">CONTROLS:</span>
          <span><kbd className="px-1.5 py-0.5 rounded bg-gray-900 border border-gray-700 text-gray-100 font-bold">W</kbd><kbd className="px-1.5 py-0.5 rounded bg-gray-900 border border-gray-700 text-gray-100 font-bold ml-1">A</kbd><kbd className="px-1.5 py-0.5 rounded bg-gray-900 border border-gray-700 text-gray-100 font-bold ml-1">S</kbd><kbd className="px-1.5 py-0.5 rounded bg-gray-900 border border-gray-700 text-gray-100 font-bold ml-1">D</kbd> Move</span>
          <span>• Mouse Look</span>
          <span>• <kbd className="px-1.5 py-0.5 rounded bg-gray-900 border border-gray-700 text-gray-100 font-bold">E</kbd> Intel</span>
          <span>• <kbd className="px-1.5 py-0.5 rounded bg-gray-900 border border-gray-700 text-purple-300 font-bold">L</kbd> UV Goggles</span>
          <span>• <kbd className="px-1.5 py-0.5 rounded bg-gray-900 border border-gray-700 text-amber-300 font-bold">TAB</kbd> Mode</span>
        </div>
        <div className="text-red-400 font-semibold tracking-wide italic mt-1 sm:mt-0">
          Walk toward Waypoints: Clock (16m), Study 17-B (26m), Tape (8m)
        </div>
      </div>
    </div>
  );
};
