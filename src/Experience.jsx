import { OrbitControls } from "@react-three/drei";
import { Perf } from "r3f-perf";
import {
  EffectComposer,
  Vignette,
  Glitch,
  Noise,
  Bloom,
  DepthOfField,
} from "@react-three/postprocessing";
import { ToneMapping } from "@react-three/postprocessing";
import { BlendFunction, GlitchMode } from "postprocessing";
import Drunk from "./Drunk";
import { useRef } from "react";
import { useControls } from "leva";

export default function Experience() {
  const drunkRef = useRef();
  const drunkControls = useControls("drunk controls", {
    amplitude: { value: 0.1, min: 0, max: 1.0 },
    frequency: { value: 2, min: 0, max: 100 },
  });

  return (
    <>
      <color args={["#ffffff"]} attach="background" />

      <EffectComposer disableNormalPass>
        <Drunk ref={drunkRef} {...drunkControls} />
        {/* <Vignette
          offset={0.3}
          darkness={0.9}
          blendFunction={BlendFunction.NORMAL}
        /> */}
        {/* <Glitch
          delay={[0.5, 1]}
          duration={[0.1, 0.3]}
          strength={[0.2, 0.4]}
          mode={GlitchMode.CONSTANT_MILD}
        /> */}
        {/* <Noise blendFunction={BlendFunction.SOFT_LIGHT} premultiply /> */}
        {/* <Bloom mipmapBlur luminanceThreshold={0} intensity={0.1} /> */}
        {/* <DepthOfField
          focusDistance={0.025}
          focalLength={0.025}
          bokehScale={6}
        /> */}
        {/* <ToneMapping /> */}
      </EffectComposer>

      <Perf position="top-left" />

      <OrbitControls makeDefault />

      <directionalLight castShadow position={[1, 2, 3]} intensity={4.5} />
      <ambientLight intensity={1.5} />

      <mesh castShadow position-x={-2}>
        <sphereGeometry />
        <meshStandardMaterial color="orange" />
      </mesh>

      <mesh castShadow position-x={2} scale={1.5}>
        <boxGeometry />
        <meshStandardMaterial color="mediumpurple" />
      </mesh>

      <mesh
        receiveShadow
        position-y={-1}
        rotation-x={-Math.PI * 0.5}
        scale={10}
      >
        <planeGeometry />
        <meshStandardMaterial color="greenyellow" />
      </mesh>
    </>
  );
}
