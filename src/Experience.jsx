import { OrbitControls } from "@react-three/drei";
import { Perf } from "r3f-perf";
import {
  EffectComposer,
  Vignette,
  Glitch,
  Noise,
  Bloom,
} from "@react-three/postprocessing";
import { ToneMapping } from "@react-three/postprocessing";
import { BlendFunction, GlitchMode } from "postprocessing";
console.log(GlitchMode);
export default function Experience() {
  return (
    <>
      <color args={["#000000"]} attach="background" />

      <EffectComposer disableNormalPass>
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
        <Bloom mipmapBlur luminanceThreshold={1.1} />
        <ToneMapping />
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
        {/* bloom effect relies on color value exceeding 1; play with color values to change effect */}
        <meshStandardMaterial color={[1.5, 1, 4]} />
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
