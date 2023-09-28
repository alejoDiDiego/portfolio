"use client";

import React, { Suspense, useEffect, useMemo, useRef, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF, Float } from "@react-three/drei";
import Loader from "../Loader";
import { useInView } from "react-intersection-observer";
// "1970s retro computer" (https://skfb.ly/oxZFA) by Tim.Morrow is licensed under Creative Commons Attribution (http://creativecommons.org/licenses/by/4.0/).

// "IBM PCjr 4863 Computer-Freepoly.org" (https://skfb.ly/oLnG9) by Freepoly.org is licensed under Creative Commons Attribution (http://creativecommons.org/licenses/by/4.0/).

const Computer = ({ isMobile }: { isMobile: boolean }) => {
  // For the mobile version I needed to compress the scene.gltf to a glb. To do that I used the following command: "npx gltfjsx scene.gltf --transform" inside the public/pc folder. It created scene-transformed.glb and a Scene.jsx. The last one was deleted
  //Then, that compressed file was exported to https://juunini.github.io/gltf-optimizer/ where I compressed again to gain a lot of performance

  // invalidate makes the frames to be continuously rendered. But frameloop={inView ? "always" : "never"} solves it and makes the performance much better
  // const { invalidate } = useThree();
  // useFrame(() => {
  //   invalidate();
  // });

  // To float I have to use invalidate and <Float></Float>

  const computer = useGLTF(
    useMemo(
      () => (isMobile ? "/pc/compressed.glb" : "/pc/compressed2.glb"),
      [isMobile]
    )
  );

  return (
    <Float
      speed={5}
      floatIntensity={isMobile ? 1 : 0.75}
      rotationIntensity={isMobile ? 0.35 : 0.25}
    >
      {/* <mesh ref={meshRef}> */}
      <mesh>
        <hemisphereLight intensity={isMobile ? 3 : 4} groundColor="black" />
        <spotLight
          position={[-20, 50, 10]}
          angle={0.12}
          penumbra={1}
          intensity={4}
          shadow-mapSize-width={1024}
        />
        <pointLight intensity={2} />
        <primitive
          object={computer.scene}
          scale={isMobile ? 4 : 6}
          position={isMobile ? [0, 0.1, -0.1] : [-0, -0.75, -0]}
          rotation={[0, 0.7, -0]}
          // rotation={[0, 0.6, -0]}
        />
      </mesh>
    </Float>
  );
};
// [-1, -0.07, -0]
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
  // [20, 10, 5]
  // [20, 12.5, 5]
  const { ref, inView } = useInView({
    threshold: 0,
  });
  // [20, 3, 5]
  return (
    <Canvas
      ref={ref}
      frameloop={inView ? "always" : "never"}
      shadows
      dpr={[1, 2]}
      camera={{
        position: isMobile ? [20, 12.5, 5] : [20, 10, 5],
        fov: isMobile ? 17.5 : 20,
      }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<Loader />}>
        <OrbitControls
          enablePan={false}
          enableZoom={false}
          // maxPolarAngle={Math.PI / 2}
          // minPolarAngle={Math.PI / 2}
        />
        <Computer isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputerCanvas;
