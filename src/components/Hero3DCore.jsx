import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { Sparkles, RefreshCw, Zap, ShieldAlert, Cpu } from 'lucide-react';
import { soundFx } from '../utils/audio';

export default function Hero3DCore() {
  const mountRef = useRef(null);
  const [coreMode, setCoreMode] = useState('cyan'); // 'cyan' | 'purple' | 'emerald'
  const [rotationSpeed, setRotationSpeed] = useState(1);
  const [isWireframeOnly, setIsWireframeOnly] = useState(false);
  const [fps, setFps] = useState(60);

  // References to dynamic Three.js objects for real-time reactivity
  const sceneRef = useRef(null);
  const coreMeshRef = useRef(null);
  const innerCoreRef = useRef(null);
  const ring1Ref = useRef(null);
  const ring2Ref = useRef(null);
  const ring3Ref = useRef(null);
  const particlesRef = useRef(null);

  const colors = {
    cyan: {
      primary: 0x00f0ff,
      secondary: 0x38bdf8,
      accent: 0xa855f7,
      name: 'Quantum Cyan',
      glowClass: 'text-cyan-400 border-cyan-500/40 bg-cyan-950/30'
    },
    purple: {
      primary: 0xa855f7,
      secondary: 0xd946ef,
      accent: 0x00f0ff,
      name: 'Hyper Purple',
      glowClass: 'text-purple-400 border-purple-500/40 bg-purple-950/30'
    },
    emerald: {
      primary: 0x10b981,
      secondary: 0x34d399,
      accent: 0x00f0ff,
      name: 'Neural Matrix',
      glowClass: 'text-emerald-400 border-emerald-500/40 bg-emerald-950/30'
    }
  };

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // SCENE SETUP
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    const width = container.clientWidth;
    const height = container.clientHeight;

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.z = 7.5;

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    container.appendChild(renderer.domElement);

    // AMBIENT & POINT LIGHTING
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
    scene.add(ambientLight);

    const pointLight1 = new THREE.PointLight(colors[coreMode].primary, 5, 20);
    pointLight1.position.set(4, 4, 4);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(colors[coreMode].accent, 4, 20);
    pointLight2.position.set(-4, -4, 2);
    scene.add(pointLight2);

    // 1. CENTRAL HOLOGRAPHIC CORE (Icosahedron Geodesic)
    const coreGeo = new THREE.IcosahedronGeometry(1.6, 2);
    const coreMat = new THREE.MeshStandardMaterial({
      color: colors[coreMode].primary,
      wireframe: true,
      emissive: colors[coreMode].primary,
      emissiveIntensity: 0.45,
      roughness: 0.2,
      metalness: 0.9,
      transparent: true,
      opacity: 0.85
    });
    const coreMesh = new THREE.Mesh(coreGeo, coreMat);
    scene.add(coreMesh);
    coreMeshRef.current = coreMesh;

    // Inner Glowing Core Sphere
    const innerGeo = new THREE.IcosahedronGeometry(0.9, 3);
    const innerMat = new THREE.MeshBasicMaterial({
      color: colors[coreMode].secondary,
      wireframe: false,
      transparent: true,
      opacity: 0.25
    });
    const innerCore = new THREE.Mesh(innerGeo, innerMat);
    scene.add(innerCore);
    innerCoreRef.current = innerCore;

    // 2. ORBITAL RINGS
    const createRing = (radius, tube, color, rotX, rotY) => {
      const ringGeo = new THREE.TorusGeometry(radius, tube, 16, 100);
      const ringMat = new THREE.MeshStandardMaterial({
        color: color,
        emissive: color,
        emissiveIntensity: 0.35,
        wireframe: true,
        roughness: 0.3,
        metalness: 0.8
      });
      const ring = new THREE.Mesh(ringGeo, ringMat);
      ring.rotation.x = rotX;
      ring.rotation.y = rotY;

      // Small satellite node on the ring
      const satelliteGeo = new THREE.SphereGeometry(0.08, 16, 16);
      const satelliteMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
      const satellite = new THREE.Mesh(satelliteGeo, satelliteMat);
      satellite.position.set(radius, 0, 0);
      ring.add(satellite);

      return ring;
    };

    const ring1 = createRing(2.3, 0.025, colors[coreMode].primary, Math.PI / 3, 0);
    const ring2 = createRing(2.7, 0.02, colors[coreMode].accent, -Math.PI / 4, Math.PI / 6);
    const ring3 = createRing(3.1, 0.015, colors[coreMode].secondary, Math.PI / 6, -Math.PI / 4);

    scene.add(ring1);
    scene.add(ring2);
    scene.add(ring3);

    ring1Ref.current = ring1;
    ring2Ref.current = ring2;
    ring3Ref.current = ring3;

    // 3. CYBER NEURAL PARTICLES FIELD
    const particleCount = 750;
    const particleGeo = new THREE.BufferGeometry();
    const posArray = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i += 3) {
      posArray[i] = (Math.random() - 0.5) * 16;
      posArray[i + 1] = (Math.random() - 0.5) * 16;
      posArray[i + 2] = (Math.random() - 0.5) * 12;
    }

    particleGeo.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    const particleMat = new THREE.PointsMaterial({
      size: 0.04,
      color: colors[coreMode].primary,
      transparent: true,
      opacity: 0.7,
      blending: THREE.AdditiveBlending
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);
    particlesRef.current = particles;

    // MOUSE PARALLAX TRACKING
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      mouseX = x * 1.5;
      mouseY = y * 1.2;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // RESIZE LISTENER
    const handleResize = () => {
      if (!container) return;
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener('resize', handleResize);

    // ANIMATION LOOP & FPS COUNTER
    let animationFrameId;
    let lastTime = performance.now();
    let frameCount = 0;
    let fpsTimer = 0;

    const animate = (currentTime) => {
      animationFrameId = requestAnimationFrame(animate);

      // Simple FPS calculation
      const delta = (currentTime - lastTime) / 1000;
      lastTime = currentTime;
      frameCount++;
      fpsTimer += delta;
      if (fpsTimer >= 1) {
        setFps(frameCount);
        frameCount = 0;
        fpsTimer = 0;
      }

      // Smooth mouse lerping
      targetX += (mouseX - targetX) * 0.05;
      targetY += (mouseY - targetY) * 0.05;

      const speedFactor = rotationSpeed;

      if (coreMesh) {
        coreMesh.rotation.y += 0.007 * speedFactor;
        coreMesh.rotation.x += 0.004 * speedFactor;
        coreMesh.rotation.z = targetX * 0.4;
      }

      if (innerCore) {
        innerCore.rotation.y -= 0.012 * speedFactor;
        innerCore.rotation.x -= 0.006 * speedFactor;
        const scalePulse = 1 + Math.sin(currentTime * 0.003) * 0.08;
        innerCore.scale.set(scalePulse, scalePulse, scalePulse);
      }

      if (ring1) {
        ring1.rotation.z += 0.012 * speedFactor;
        ring1.rotation.y += 0.005 * speedFactor;
      }

      if (ring2) {
        ring2.rotation.z -= 0.016 * speedFactor;
        ring2.rotation.x += 0.008 * speedFactor;
      }

      if (ring3) {
        ring3.rotation.z += 0.008 * speedFactor;
        ring3.rotation.y -= 0.01 * speedFactor;
      }

      if (particles) {
        particles.rotation.y = currentTime * 0.00015 * speedFactor + targetX * 0.3;
        particles.rotation.x = targetY * 0.3;
      }

      // Camera parallax tilt
      camera.position.x += (targetX * 0.8 - camera.position.x) * 0.05;
      camera.position.y += (targetY * 0.8 - camera.position.y) * 0.05;
      camera.lookAt(0, 0, 0);

      renderer.render(scene, camera);
    };

    animate(performance.now());

    // CLEANUP
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);

      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }

      // Memory leak prevention
      coreGeo.dispose();
      coreMat.dispose();
      innerGeo.dispose();
      innerMat.dispose();
      particleGeo.dispose();
      particleMat.dispose();
      renderer.dispose();
    };
  }, []);

  // REACTIVE COLOR UPDATES WHEN MODE CHANGES
  useEffect(() => {
    const selected = colors[coreMode];
    if (coreMeshRef.current) {
      coreMeshRef.current.material.color.setHex(selected.primary);
      coreMeshRef.current.material.emissive.setHex(selected.primary);
    }
    if (innerCoreRef.current) {
      innerCoreRef.current.material.color.setHex(selected.secondary);
    }
    if (ring1Ref.current) {
      ring1Ref.current.material.color.setHex(selected.primary);
      ring1Ref.current.material.emissive.setHex(selected.primary);
    }
    if (ring2Ref.current) {
      ring2Ref.current.material.color.setHex(selected.accent);
      ring2Ref.current.material.emissive.setHex(selected.accent);
    }
    if (ring3Ref.current) {
      ring3Ref.current.material.color.setHex(selected.secondary);
      ring3Ref.current.material.emissive.setHex(selected.secondary);
    }
    if (particlesRef.current) {
      particlesRef.current.material.color.setHex(selected.primary);
    }
  }, [coreMode]);

  const cycleCoreMode = () => {
    soundFx.playWarp();
    const modes = ['cyan', 'purple', 'emerald'];
    const nextIndex = (modes.indexOf(coreMode) + 1) % modes.length;
    setCoreMode(modes[nextIndex]);
  };

  const toggleSpeed = () => {
    soundFx.playClick();
    setRotationSpeed((prev) => (prev === 1 ? 2.5 : prev === 2.5 ? 0.3 : 1));
  };

  return (
    <div className="relative w-full h-[520px] md:h-[620px] flex items-center justify-center">
      {/* Three.js Canvas Container */}
      <div 
        ref={mountRef} 
        className="w-full h-full cursor-grab active:cursor-grabbing"
        title="Interactive 3D Quantum Core: Drag or move mouse to inspect"
      />

      {/* Cyber HUD Interactive Controls Overlay */}
      <div className="absolute bottom-4 left-4 right-4 md:left-auto md:right-4 flex flex-wrap items-center justify-between md:justify-end gap-2 text-xs font-mono select-none pointer-events-auto">
        {/* Core Mode Switcher */}
        <button
          onClick={cycleCoreMode}
          onMouseEnter={() => soundFx.playHover()}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border backdrop-blur-md transition-all duration-300 shadow-lg ${colors[coreMode].glowClass} hover:scale-105 active:scale-95`}
        >
          <Sparkles className="w-3.5 h-3.5 animate-spin-slow" />
          <span>Core: {colors[coreMode].name}</span>
        </button>

        {/* Speed Multiplier */}
        <button
          onClick={toggleSpeed}
          onMouseEnter={() => soundFx.playHover()}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-700/80 bg-slate-900/60 text-slate-300 backdrop-blur-md hover:border-cyan-500/50 hover:text-cyan-300 transition-all duration-300"
        >
          <Zap className="w-3.5 h-3.5 text-yellow-400" />
          <span>Speed: {rotationSpeed === 1 ? '1.0x' : rotationSpeed === 2.5 ? '2.5x Overdrive' : '0.3x Orbit'}</span>
        </button>

        {/* Real-time FPS & WebGL telemetry */}
        <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border border-slate-800 bg-slate-950/80 text-slate-400 backdrop-blur-md">
          <Cpu className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
          <span>{fps} FPS | WebGL 2.0</span>
        </div>
      </div>

      {/* Floating Orbital Hologram Legend */}
      <div className="absolute top-4 left-4 hidden sm:flex items-center gap-2 text-[11px] font-mono text-cyan-400/80 bg-slate-950/70 border border-cyan-500/20 px-3 py-1 rounded-full backdrop-blur-md pointer-events-none">
        <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
        <span>R3F QUANTUM_MESH // ACTIVE ROTATION</span>
      </div>
    </div>
  );
}

