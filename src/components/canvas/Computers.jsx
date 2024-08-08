import React, { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import CanvasLoader from '../Loader'; 

const Computers = ({isMobile}) => {
  const computer = useGLTF('./desktop_pc/scene.gltf');

  return (
    <mesh>
      <hemisphereLight intensity={1} groundColor="black" />
      <pointLight intensity={3} />
      <spotLight 
      position={[-20, 50, 10]} 
      />
      <primitive object={computer.scene} 
        scale={isMobile ? 0.7 : 0.75}
        position={isMobile ? [0, -3, -2,2] : [0, -3.25 , -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile , setIsMobile] = useState(false);

  useEffect(()=>{ //only changing the isMobile variable

    //add a listner for chnages to teh screen size
    const mediaQuery = window.matchMedia('(max-width: 500px)');

    //set the initial value of the 'isMobile' state variable
    // setIsMobile(mediaQuery.matches)

    //define a callback function to handle changes to the media query
    const handleMediaQuery = (event) => {
      setIsMobile(event.matches);
    }

    //event listner for the medaiQuery when ever it changes 
    mediaQuery.addEventListener('change' , handleMediaQuery);

    //removing of eventListner
    return () =>{
      mediaQuery.removeEventListener('change' , handleMediaQuery);
    }

  },[])

  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile}/>
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
