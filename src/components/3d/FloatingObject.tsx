import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, MeshWobbleMaterial } from "@react-three/drei";
import * as THREE from "three";

interface FloatingObjectProps {
    position?: [number, number, number];
    color?: string;
    type?: "sphere" | "cube" | "torus" | "icosahedron";
    speed?: number;
    rotationSpeed?: number;
}

export const FloatingObject = ({
    position = [0, 0, 0],
    color = "#6b46d4",
    type = "sphere",
    speed = 1,
    rotationSpeed = 1,
}: FloatingObjectProps) => {
    const meshRef = useRef<THREE.Mesh>(null);

    useFrame((state) => {
        if (!meshRef.current) return;
        const time = state.clock.getElapsedTime();
        meshRef.current.rotation.x = time * 0.2 * rotationSpeed;
        meshRef.current.rotation.y = time * 0.3 * rotationSpeed;
    });

    const getGeometry = () => {
        switch (type) {
            case "cube":
                return <boxGeometry args={[1, 1, 1]} />;
            case "torus":
                return <torusGeometry args={[0.7, 0.2, 16, 100]} />;
            case "icosahedron":
                return <icosahedronGeometry args={[1, 0]} />;
            default:
                return <sphereGeometry args={[1, 32, 32]} />;
        }
    };

    return (
        <Float
            speed={speed * 2}
            rotationIntensity={1.5}
            floatIntensity={2}
            position={position}
        >
            <mesh ref={meshRef}>
                {getGeometry()}
                {type === "sphere" ? (
                    <MeshDistortMaterial
                        color={color}
                        speed={2}
                        distort={0.4}
                        radius={1}
                    />
                ) : (
                    <MeshWobbleMaterial
                        color={color}
                        speed={2}
                        factor={0.5}
                    />
                )}
            </mesh>
        </Float>
    );
};
