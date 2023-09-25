"use client";

import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import Loader from "../Loader";
import THREE from "three";

// "1970s retro computer" (https://skfb.ly/oxZFA) by Tim.Morrow is licensed under Creative Commons Attribution (http://creativecommons.org/licenses/by/4.0/).

const Computer = ({ isMobile }: { isMobile: boolean }) => {
  // For the mobile version I needed to compress the scene.gltf to a glb. To do that I used the following command: "npx gltfjsx scene.gltf --transform" inside the public/pc folder. It created scene-transformed.glb and a Scene.jsx. The last one was deleted
  //Then, that compressed file was exported to https://juunini.github.io/gltf-optimizer/ where I compressed again to gain a lot of performance

  const computer = useGLTF(
    `${isMobile ? "/pc/compressed.glb" : "/pc/scene.gltf"}`
  );

  return (
    <mesh>
      <hemisphereLight intensity={3} groundColor="black" />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={4}
        castShadow
        shadow-mapSize-width={1024}
      />
      <pointLight intensity={1} />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.8 : 0.9}
        position={isMobile ? [-0, -1.75, -0] : [-0, -2.25, -0]}
        rotation={[0, 0.6, -0]}
      />
    </mesh>
  );
};

const ComputerCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event: {
      matches: boolean | ((prevState: boolean) => boolean);
    }) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop="demand"
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 30 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<Loader />}>
        <OrbitControls
          enablePan={false}
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computer isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputerCanvas;
