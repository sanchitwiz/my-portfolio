import React, { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import CanvasLoader from '../Loader';

const Computers = ({ isMobile, rotation }) => {
  const computer = useGLTF('./desktop_pc/scene.gltf');

  return (
    <mesh rotation={rotation}>
      <hemisphereLight intensity={1} groundColor="black" />
      <pointLight intensity={3} />
      <spotLight position={[-20, 50, 10]} />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.7 : 0.75}
        position={isMobile ? [0, -3, -2] : [0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
/>

    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [rotation, setRotation] = useState([0, 0, 0]);

  useEffect(() => {
    // Event listener for screen size changes
    const mediaQuery = window.matchMedia('(max-width: 500px)');
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener('change', handleMediaQueryChange);

    // Event listener for scroll
    const handleScroll = () => {
      const scrollY = window.scrollY;
      // Adjust these values to control the rotation range
      const rotationY = (scrollY / window.innerHeight) * Math.PI * 2;
      setRotation([0, rotationY, 0]);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
      style={{ width: '100%', height: '100vh' }} // Ensure full viewport height
    >

      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} rotation={rotation} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
