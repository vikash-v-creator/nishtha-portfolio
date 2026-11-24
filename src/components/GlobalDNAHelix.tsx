import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface GlobalDNAHelixProps {
  isDark: boolean;
  activeSection: string;
}

export const GlobalDNAHelix: React.FC<GlobalDNAHelixProps> = ({ isDark, activeSection }) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const activeSectionRef = useRef<string>(activeSection);
  const isDarkRef = useRef<boolean>(isDark);

  useEffect(() => {
    activeSectionRef.current = activeSection;
  }, [activeSection]);

  useEffect(() => {
    isDarkRef.current = isDark;
  }, [isDark]);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Window dimensions
    let width = window.innerWidth;
    let height = window.innerHeight;

    // Three.js Scene Setup
    const scene = new THREE.Scene();

    // Perspective Camera
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(0, 0, 26);

    // Renderer with full alpha transparency and local clipping enabled for progressive reveal
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    });
    renderer.localClippingEnabled = true;
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75));
    renderer.domElement.style.position = 'absolute';
    renderer.domElement.style.top = '0';
    renderer.domElement.style.left = '0';
    renderer.domElement.style.width = '100%';
    renderer.domElement.style.height = '100%';
    renderer.domElement.style.pointerEvents = 'none';
    mount.appendChild(renderer.domElement);

    // Group Hierarchy:
    // orbitalGroup -> controls 3D orbital revolution around scene space, depth (Z), and horizontal placement (X)
    //   dnaLongitudinalGroup -> controls axial rotation around its own spine/longitudinal axis
    const orbitalGroup = new THREE.Group();
    scene.add(orbitalGroup);

    const dnaLongitudinalGroup = new THREE.Group();
    orbitalGroup.add(dnaLongitudinalGroup);

    // Initial positioning: Large, positioned towards the right side
    const isMobile = width < 768;
    const isTablet = width >= 768 && width < 1024;
    
    // Scale according to device
    const baseScale = isMobile ? 0.72 : isTablet ? 0.9 : 1.18;
    orbitalGroup.scale.set(baseScale, baseScale, baseScale);
    orbitalGroup.position.set(isMobile ? 1.5 : 4.5, 0, -2);
    orbitalGroup.rotation.set(0.12, -0.25, -0.22);

    // Color definitions for Light & Dark Themes
    const getColors = (dark: boolean) => ({
      strandA: dark ? 0x69E4DB : 0x63B7AA, // Cyan / Muted Teal
      strandB: dark ? 0xC9F66D : 0xA8BE91, // Neon Lime / Sage Green
      rung: dark ? 0x4F9DCA : 0x8DA674,    // Blue Teal / Warm Sage
      emissiveA: dark ? 0x114444 : 0x000000,
      emissiveB: dark ? 0x224411 : 0x000000,
      particles: dark ? 0x69E4DB : 0x8DA674,
      lightAmbient: dark ? 0.9 : 1.5,
      lightDir1: dark ? 1.8 : 2.2,
      lightDir2: dark ? 1.2 : 1.4,
    });

    let currentColors = getColors(isDark);

    // Progressive Clipping Plane (for scroll-driven assembly reveal in Journey)
    const clipPlane = new THREE.Plane(new THREE.Vector3(0, 1, 0), 100);

    // Materials
    const strandMatA = new THREE.MeshStandardMaterial({
      color: currentColors.strandA,
      roughness: 0.32,
      metalness: 0.15,
      transparent: true,
      opacity: 0.85,
      emissive: currentColors.emissiveA,
      clippingPlanes: [clipPlane],
      clipShadows: true,
    });

    const strandMatB = new THREE.MeshStandardMaterial({
      color: currentColors.strandB,
      roughness: 0.32,
      metalness: 0.15,
      transparent: true,
      opacity: 0.85,
      emissive: currentColors.emissiveB,
      clippingPlanes: [clipPlane],
      clipShadows: true,
    });

    const rungMat = new THREE.MeshStandardMaterial({
      color: currentColors.rung,
      roughness: 0.45,
      metalness: 0.1,
      transparent: true,
      opacity: 0.72,
      clippingPlanes: [clipPlane],
      clipShadows: true,
    });

    // Sphere Geometries for Nucleotide Nodes
    const sphereGeoA = new THREE.SphereGeometry(0.32, 16, 16);
    const sphereGeoB = new THREE.SphereGeometry(0.32, 16, 16);

    // Construct Persistent Giant 3D DNA Double Helix
    // Total height 34 units, 3.6 turns, radius 3.8 units
    const turns = 3.6;
    const pointsPerTurn = 18;
    const totalPoints = Math.floor(turns * pointsPerTurn);
    const helixRadius = 3.8;
    const helixHeight = 34;

    const rungMeshes: THREE.Mesh[] = [];

    // Construct strand points and base pairs
    const strandAPoints: THREE.Vector3[] = [];
    const strandBPoints: THREE.Vector3[] = [];

    for (let i = 0; i < totalPoints; i++) {
      const progress = i / totalPoints;
      const angle = progress * Math.PI * 2 * turns;
      const y = (progress - 0.5) * helixHeight;

      // Strand A coordinates
      const x1 = Math.cos(angle) * helixRadius;
      const z1 = Math.sin(angle) * helixRadius;
      const posA = new THREE.Vector3(x1, y, z1);
      strandAPoints.push(posA);

      const nodeA = new THREE.Mesh(sphereGeoA, strandMatA);
      nodeA.position.copy(posA);
      dnaLongitudinalGroup.add(nodeA);

      // Strand B coordinates (opposite phase: angle + PI)
      const x2 = Math.cos(angle + Math.PI) * helixRadius;
      const z2 = Math.sin(angle + Math.PI) * helixRadius;
      const posB = new THREE.Vector3(x2, y, z2);
      strandBPoints.push(posB);

      const nodeB = new THREE.Mesh(sphereGeoB, strandMatB);
      nodeB.position.copy(posB);
      dnaLongitudinalGroup.add(nodeB);

      // Base Pair Connecting Rung
      const distance = posA.distanceTo(posB);
      const cylinderGeo = new THREE.CylinderGeometry(0.08, 0.08, distance, 8);
      const rungMesh = new THREE.Mesh(cylinderGeo, rungMat);

      // Position and orient cylinder between posA and posB
      const midpoint = new THREE.Vector3().addVectors(posA, posB).multiplyScalar(0.5);
      rungMesh.position.copy(midpoint);
      rungMesh.quaternion.setFromUnitVectors(
        new THREE.Vector3(0, 1, 0),
        new THREE.Vector3().subVectors(posB, posA).normalize()
      );
      dnaLongitudinalGroup.add(rungMesh);
      rungMeshes.push(rungMesh);
    }

    // Smooth continuous helical backbone tubes
    const curveA = new THREE.CatmullRomCurve3(strandAPoints);
    const tubeGeoA = new THREE.TubeGeometry(curveA, 120, 0.12, 8, false);
    const tubeMeshA = new THREE.Mesh(tubeGeoA, strandMatA);
    dnaLongitudinalGroup.add(tubeMeshA);

    const curveB = new THREE.CatmullRomCurve3(strandBPoints);
    const tubeGeoB = new THREE.TubeGeometry(curveB, 120, 0.12, 8, false);
    const tubeMeshB = new THREE.Mesh(tubeGeoB, strandMatB);
    dnaLongitudinalGroup.add(tubeMeshB);

    // Frontier Assembly Beacon: subtle glowing ring at the reveal edge
    const beaconGeo = new THREE.RingGeometry(3.5, 4.3, 32);
    const beaconMat = new THREE.MeshBasicMaterial({
      color: currentColors.strandA,
      transparent: true,
      opacity: 0,
      side: THREE.DoubleSide,
    });
    const beaconMesh = new THREE.Mesh(beaconGeo, beaconMat);
    beaconMesh.rotation.x = Math.PI / 2;
    dnaLongitudinalGroup.add(beaconMesh);

    // Floating Molecular Particle Cloud
    const particleCount = isMobile ? 60 : 160;
    const particleGeo = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount * 3; i += 3) {
      particlePositions[i] = (Math.random() - 0.5) * 44;
      particlePositions[i + 1] = (Math.random() - 0.5) * 44;
      particlePositions[i + 2] = (Math.random() - 0.5) * 30;
    }
    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    const particleMat = new THREE.PointsMaterial({
      color: currentColors.particles,
      size: isMobile ? 0.14 : 0.18,
      transparent: true,
      opacity: isDark ? 0.45 : 0.35,
    });
    const particlesGroup = new THREE.Points(particleGeo, particleMat);
    scene.add(particlesGroup);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, currentColors.lightAmbient);
    scene.add(ambientLight);

    const dirLight1 = new THREE.DirectionalLight(0xffffff, currentColors.lightDir1);
    dirLight1.position.set(15, 20, 25);
    scene.add(dirLight1);

    const dirLight2 = new THREE.DirectionalLight(currentColors.strandA, currentColors.lightDir2);
    dirLight2.position.set(-15, -15, -15);
    scene.add(dirLight2);

    // Global scroll tracking state
    let targetScrollProgress = 0;
    let currentScrollProgress = 0;
    let currentClipY = 100;
    let mouseX = 0;
    let mouseY = 0;
    let targetMouseX = 0;
    let targetMouseY = 0;

    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        targetScrollProgress = Math.min(Math.max(window.scrollY / totalScroll, 0), 1);
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      targetMouseX = (e.clientX / window.innerWidth - 0.5) * 1.5;
      targetMouseY = (e.clientY / window.innerHeight - 0.5) * 1.5;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    handleScroll();

    // Section-specific target transforms:
    // [targetX, targetY, targetZ, targetRotX, targetRotZ, targetOpacity]
    const getSectionConfig = (section: string, isMob: boolean) => {
      const rightX = isMob ? 1.4 : 4.6;
      switch (section) {
        case 'hero':
          return {
            x: rightX,
            y: 0,
            z: -2,
            rotX: 0.12,
            rotZ: -0.22,
            opacity: isDarkRef.current ? 0.85 : 0.75,
            scaleMult: 1.0,
          };
        case 'about':
          return {
            x: isMob ? 1.8 : 5.2, // Floats behind portrait without obstructing it
            y: 1.0,
            z: -5,
            rotX: 0.18,
            rotZ: -0.28,
            opacity: isDarkRef.current ? 0.75 : 0.65,
            scaleMult: 0.95,
          };
        case 'science':
          return {
            x: isMob ? 0.4 : 1.2, // Becomes prominent and central in Scientific World
            y: 0,
            z: 0.5,
            rotX: 0.08,
            rotZ: -0.15,
            opacity: isDarkRef.current ? 0.95 : 0.9,
            scaleMult: 1.15,
          };
        case 'skills':
          return {
            x: isMob ? 2.0 : 4.8,
            y: -1.2,
            z: -4,
            rotX: 0.22,
            rotZ: -0.32,
            opacity: isDarkRef.current ? 0.7 : 0.6,
            scaleMult: 0.95,
          };
        case 'journey':
          return {
            x: isMob ? 1.4 : 4.2,
            y: 0.3,
            z: -2.8,
            rotX: 0.14,
            rotZ: -0.22,
            opacity: isDarkRef.current ? 0.85 : 0.75,
            scaleMult: 1.08,
          };
        case 'beyond-science':
          return {
            x: isMob ? 2.5 : 5.8,
            y: 1.8,
            z: -7,
            rotX: 0.28,
            rotZ: -0.36,
            opacity: isDarkRef.current ? 0.35 : 0.28, // Soft opacity to preserve editorial photography
            scaleMult: 0.88,
          };
        case 'roadmap':
          return {
            x: isMob ? 1.2 : 3.6,
            y: -0.8,
            z: -2.5,
            rotX: 0.16,
            rotZ: -0.2,
            opacity: isDarkRef.current ? 0.8 : 0.7,
            scaleMult: 1.05,
          };
        case 'contact':
          return {
            x: isMob ? 1.8 : 4.5,
            y: 0.2,
            z: -3.5,
            rotX: 0.14,
            rotZ: -0.25,
            opacity: isDarkRef.current ? 0.75 : 0.65,
            scaleMult: 1.0,
          };
        default:
          return {
            x: rightX,
            y: 0,
            z: -2,
            rotX: 0.12,
            rotZ: -0.22,
            opacity: 0.75,
            scaleMult: 1.0,
          };
      }
    };

    // Animation variables
    let frameId = 0;
    let clock = new THREE.Clock();

    // Theme update tracker
    let lastThemeIsDark = isDark;

    const animate = () => {
      const elapsedTime = clock.getElapsedTime();

      // Check if theme changed dynamically
      if (lastThemeIsDark !== isDarkRef.current) {
        lastThemeIsDark = isDarkRef.current;
        const newColors = getColors(lastThemeIsDark);
        strandMatA.color.setHex(newColors.strandA);
        strandMatA.emissive.setHex(newColors.emissiveA);
        strandMatB.color.setHex(newColors.strandB);
        strandMatB.emissive.setHex(newColors.emissiveB);
        rungMat.color.setHex(newColors.rung);
        particleMat.color.setHex(newColors.particles);
        beaconMat.color.setHex(newColors.strandA);
        ambientLight.intensity = newColors.lightAmbient;
        dirLight1.intensity = newColors.lightDir1;
        dirLight2.color.setHex(newColors.strandA);
        dirLight2.intensity = newColors.lightDir2;
      }

      // Smooth scroll interpolation (lerp)
      currentScrollProgress += (targetScrollProgress - currentScrollProgress) * 0.06;
      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;

      // Section target configuration
      const secCfg = getSectionConfig(activeSectionRef.current, window.innerWidth < 768);

      if (!prefersReducedMotion) {
        // A. AXIAL ROTATION
        // Rotates the DNA around its own longitudinal axis directly linked to scroll progress + gentle idle drift
        const axialRotation = currentScrollProgress * Math.PI * 6.5 + elapsedTime * 0.12;
        dnaLongitudinalGroup.rotation.y = axialRotation;

        // B. ORBITAL REVOLUTION
        // The entire structure revolves gently along an elliptical 3D path around scene space
        const orbitalAngle = currentScrollProgress * Math.PI * 2.2;
        const orbitalRadiusX = 1.2;
        const orbitalRadiusZ = 1.8;

        const targetX = secCfg.x + Math.sin(orbitalAngle) * orbitalRadiusX + mouseX * 0.4;
        const targetZ = secCfg.z + Math.cos(orbitalAngle) * orbitalRadiusZ;
        const targetY = secCfg.y + Math.sin(elapsedTime * 0.5) * 0.3 - mouseY * 0.3;

        orbitalGroup.position.x += (targetX - orbitalGroup.position.x) * 0.06;
        orbitalGroup.position.y += (targetY - orbitalGroup.position.y) * 0.06;
        orbitalGroup.position.z += (targetZ - orbitalGroup.position.z) * 0.06;

        // C. PERSPECTIVE TILT
        const targetRotX = secCfg.rotX + Math.sin(orbitalAngle * 0.8) * 0.1 - mouseY * 0.08;
        const targetRotZ = secCfg.rotZ + Math.cos(orbitalAngle * 0.8) * 0.08;
        orbitalGroup.rotation.x += (targetRotX - orbitalGroup.rotation.x) * 0.06;
        orbitalGroup.rotation.z += (targetRotZ - orbitalGroup.rotation.z) * 0.06;
        orbitalGroup.rotation.y = Math.sin(orbitalAngle * 0.5) * 0.25;

        // D. PROGRESSIVE DNA HELIX REVEAL IN JOURNEY SECTION
        let targetClipY = 100; // unclipped outside journey section
        let targetBeaconOpacity = 0;

        const journeyEl = document.getElementById('journey');
        if (journeyEl) {
          const rect = journeyEl.getBoundingClientRect();
          const winH = window.innerHeight;

          // When journey enters viewport until it departs
          if (rect.top <= winH && rect.bottom >= 0) {
            // Scroll progress through the journey section timeline:
            // 0 at initial entry, 1 at bottom of milestone cards
            const totalJourneyHeight = Math.max(rect.height - winH * 0.3, 1);
            const journeyOffset = winH * 0.75 - rect.top;
            const journeyProgress = Math.max(0, Math.min(1, journeyOffset / totalJourneyHeight));

            // Clip plane equation: keeps points where y >= -constant
            // At journeyProgress = 0: constant = -14 (only top 2-3 rungs at y >= +14 are revealed)
            // At journeyProgress = 1: constant = +22 (100% of helix down to y = -17 is revealed)
            targetClipY = -14 + journeyProgress * 36;
            targetBeaconOpacity = (journeyProgress > 0.02 && journeyProgress < 0.98) ? (isDarkRef.current ? 0.75 : 0.5) : 0;
          }
        }

        // Smoothly interpolate clipping plane
        currentClipY += (targetClipY - currentClipY) * 0.08;
        clipPlane.constant = currentClipY;

        // Update beacon frontier position & opacity
        beaconMesh.position.y = -currentClipY;
        beaconMat.opacity += (targetBeaconOpacity - beaconMat.opacity) * 0.1;

        // E. OPACITY & SCALE
        strandMatA.opacity += (secCfg.opacity - strandMatA.opacity) * 0.08;
        strandMatB.opacity += (secCfg.opacity - strandMatB.opacity) * 0.08;
        rungMat.opacity += (secCfg.opacity * 0.85 - rungMat.opacity) * 0.08;

        const currentBaseScale = (window.innerWidth < 768 ? 0.72 : window.innerWidth < 1024 ? 0.9 : 1.18) * secCfg.scaleMult;
        orbitalGroup.scale.lerp(new THREE.Vector3(currentBaseScale, currentBaseScale, currentBaseScale), 0.06);

        // Particle rotation for depth parallax
        particlesGroup.rotation.y = elapsedTime * 0.02 + currentScrollProgress * 0.5;
        particlesGroup.position.y = -currentScrollProgress * 4;
      } else {
        // Reduced motion: stable, attractive static pose with no clipping
        clipPlane.constant = 100;
        beaconMat.opacity = 0;
        strandMatA.opacity = secCfg.opacity * 0.7;
        strandMatB.opacity = secCfg.opacity * 0.7;
        rungMat.opacity = secCfg.opacity * 0.6;
        orbitalGroup.position.set(secCfg.x, secCfg.y, secCfg.z);
        orbitalGroup.rotation.set(secCfg.rotX, 0, secCfg.rotZ);
      }

      renderer.render(scene, camera);
      frameId = requestAnimationFrame(animate);
    };

    animate();

    // Resize handler
    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);

      const isMob = width < 768;
      const isTab = width >= 768 && width < 1024;
      const newScale = isMob ? 0.72 : isTab ? 0.9 : 1.18;
      orbitalGroup.scale.set(newScale, newScale, newScale);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup on unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(frameId);

      // Dispose Three.js objects
      sphereGeoA.dispose();
      sphereGeoB.dispose();
      tubeGeoA.dispose();
      tubeGeoB.dispose();
      beaconGeo.dispose();
      particleGeo.dispose();
      strandMatA.dispose();
      strandMatB.dispose();
      rungMat.dispose();
      beaconMat.dispose();
      particleMat.dispose();
      renderer.dispose();

      if (mount && mount.contains(renderer.domElement)) {
        mount.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0 overflow-hidden select-none"
      aria-hidden="true"
    />
  );
};
