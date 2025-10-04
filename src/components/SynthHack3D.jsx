import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const SynthHack3D = () => {
  const mountRef = useRef(null);
  const sceneRef = useRef(null);
  const rendererRef = useRef(null);
  const animationIdRef = useRef(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    
    const containerRect = mountRef.current.getBoundingClientRect();
    renderer.setSize(containerRect.width, containerRect.height);
    renderer.setClearColor(0x000000, 0); // Transparent background
    mountRef.current.appendChild(renderer.domElement);
    
    sceneRef.current = scene;
    rendererRef.current = renderer;

    // Enhanced lighting for purple/magenta effect
    const ambientLight = new THREE.AmbientLight(0x404040, 0.3);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.6);
    directionalLight.position.set(0, 10, 5);
    scene.add(directionalLight);

    // Purple/magenta accent lights to match the image
    const purpleLight = new THREE.PointLight(0xdd00dd, 2, 100);
    purpleLight.position.set(-15, 5, 10);
    scene.add(purpleLight);

    const magentaLight = new THREE.PointLight(0xff00ff, 2, 100);
    magentaLight.position.set(15, 5, 10);
    scene.add(magentaLight);

    const pinkLight = new THREE.PointLight(0xff44ff, 1.5, 100);
    pinkLight.position.set(0, -5, 15);
    scene.add(pinkLight);

    // Load font and create 3D text
    const loader = new THREE.FontLoader();
    
    // Using a built-in font or you can load a custom one
    loader.load(
      'https://threejs.org/examples/fonts/helvetiker_bold.typeface.json',
      (font) => {
        // SYNTHHACK text with enhanced 3D effect
        const textGeometry1 = new THREE.TextGeometry('SYNTHHACK', {
          font: font,
          size: 3,
          height: 0.8,
          curveSegments: 16,
          bevelEnabled: true,
          bevelThickness: 0.15,
          bevelSize: 0.08,
          bevelOffset: 0,
          bevelSegments: 8
        });

        // 2K25 text
        const textGeometry2 = new THREE.TextGeometry('2K25', {
          font: font,
          size: 2.2,
          height: 0.8,
          curveSegments: 16,
          bevelEnabled: true,
          bevelThickness: 0.15,
          bevelSize: 0.08,
          bevelOffset: 0,
          bevelSegments: 8
        });

        // Center the geometries
        textGeometry1.computeBoundingBox();
        textGeometry2.computeBoundingBox();
        
        const centerOffset1X = -0.5 * (textGeometry1.boundingBox.max.x - textGeometry1.boundingBox.min.x);
        const centerOffset2X = -0.5 * (textGeometry2.boundingBox.max.x - textGeometry2.boundingBox.min.x);

        // Create purple/magenta gradient materials to match the image
        const material1 = new THREE.MeshPhongMaterial({
          color: 0xee44ee,
          shininess: 150,
          specular: 0xffffff,
          emissive: 0x220022,
          transparent: false
        });

        const material2 = new THREE.MeshPhongMaterial({
          color: 0xdd00dd,
          shininess: 150,
          specular: 0xffffff,
          emissive: 0x330033,
          transparent: false
        });

        // Create meshes
        const textMesh1 = new THREE.Mesh(textGeometry1, material1);
        const textMesh2 = new THREE.Mesh(textGeometry2, material2);

        // Position the text (stretched horizontally like in the image)
        textMesh1.position.x = centerOffset1X;
        textMesh1.position.y = 0.5;
        textMesh1.position.z = 0;
        textMesh1.scale.x = 1.3; // Horizontal stretch to match image

        textMesh2.position.x = centerOffset2X;
        textMesh2.position.y = -2;
        textMesh2.position.z = 0;
        textMesh2.scale.x = 1.3; // Horizontal stretch to match image

        // Add to scene
        scene.add(textMesh1);
        scene.add(textMesh2);

        // Store references for animation
        textMesh1.userData = { originalY: 0.5, type: 'synthhack' };
        textMesh2.userData = { originalY: -2, type: '2k25' };

        // Animation function
        const animate = () => {
          animationIdRef.current = requestAnimationFrame(animate);

          const time = Date.now() * 0.001;

          // Subtle rotation for 3D effect
          textMesh1.rotation.y = Math.sin(time * 0.3) * 0.05;
          textMesh2.rotation.y = Math.sin(time * 0.3 + Math.PI) * 0.05;

          // Gentle floating animation
          textMesh1.position.y = textMesh1.userData.originalY + Math.sin(time * 0.6) * 0.1;
          textMesh2.position.y = textMesh2.userData.originalY + Math.sin(time * 0.6 + Math.PI) * 0.1;

          // Purple/magenta color cycling to match the image
          const purpleHue = 0.83 + Math.sin(time * 0.5) * 0.1; // Purple range
          const magentaHue = 0.92 + Math.sin(time * 0.5 + Math.PI) * 0.08; // Magenta range
          
          material1.color.setHSL(purpleHue, 0.9, 0.7);
          material2.color.setHSL(magentaHue, 0.9, 0.6);

          // Purple light animation to enhance the gradient effect
          purpleLight.position.x = Math.sin(time * 0.8) * 12;
          purpleLight.position.z = Math.cos(time * 0.8) * 8;
          
          magentaLight.position.x = Math.sin(time * 0.8 + Math.PI) * 12;
          magentaLight.position.z = Math.cos(time * 0.8 + Math.PI) * 8;
          
          pinkLight.intensity = 1.5 + Math.sin(time * 2) * 0.3;

          renderer.render(scene, camera);
        };

        animate();
      },
      (progress) => {
        console.log('Font loading progress:', progress);
      },
      (error) => {
        console.error('Font loading error:', error);
        // Fallback: create simple geometry if font fails to load
        createFallbackText();
      }
    );

    // Fallback text creation
    const createFallbackText = () => {
      const geometry1 = new THREE.BoxGeometry(8, 1.5, 0.5);
      const geometry2 = new THREE.BoxGeometry(4, 1.5, 0.5);
      
      const material1 = new THREE.MeshPhongMaterial({ color: 0xff6b6b });
      const material2 = new THREE.MeshPhongMaterial({ color: 0x4ecdc4 });
      
      const mesh1 = new THREE.Mesh(geometry1, material1);
      const mesh2 = new THREE.Mesh(geometry2, material2);
      
      mesh1.position.set(0, 1, 0);
      mesh2.position.set(0, -1.5, 0);
      
      scene.add(mesh1);
      scene.add(mesh2);

      const animate = () => {
        animationIdRef.current = requestAnimationFrame(animate);
        const time = Date.now() * 0.001;
        
        mesh1.rotation.y = Math.sin(time * 0.5) * 0.1;
        mesh2.rotation.y = Math.sin(time * 0.5 + Math.PI) * 0.1;
        
        renderer.render(scene, camera);
      };

      animate();
    };

    // Camera position - perspective to match the image
    camera.position.z = 15;
    camera.position.y = 0;
    camera.position.x = 0;

    // Handle window resize
    const handleResize = () => {
      if (!mountRef.current) return;
      const rect = mountRef.current.getBoundingClientRect();
      const width = rect.width;
      const height = rect.height;
      
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener('resize', handleResize);

    // Enhanced mouse interaction for 3D perspective
    const handleMouseMove = (event) => {
      if (!mountRef.current) return;
      
      const rect = mountRef.current.getBoundingClientRect();
      const mouseX = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      const mouseY = -((event.clientY - rect.top) / rect.height) * 2 + 1;
      
      // Subtle camera movement to enhance 3D effect
      camera.position.x = mouseX * 1.5;
      camera.position.y = mouseY * 1.5;
      camera.lookAt(new THREE.Vector3(0, -0.75, 0)); // Look at center between texts
    };

    mountRef.current.addEventListener('mousemove', handleMouseMove);

    // Cleanup
    return () => {
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
      
      window.removeEventListener('resize', handleResize);
      
      if (mountRef.current) {
        mountRef.current.removeEventListener('mousemove', handleMouseMove);
        if (rendererRef.current?.domElement) {
          mountRef.current.removeChild(rendererRef.current.domElement);
        }
      }
      
      if (rendererRef.current) {
        rendererRef.current.dispose();
      }
    };
  }, []);

  return (
    <div 
      ref={mountRef} 
      style={{ 
        width: '100%', 
        height: '400px', 
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1,
        pointerEvents: 'auto'
      }} 
    />
  );
};

export default SynthHack3D;