import { FloatingObject } from "./FloatingObject";
import { Environment, ContactShadows } from "@react-three/drei";

export const SceneContent = () => {
    return (
        <>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} intensity={1} color="#6b46d4" />
            <spotLight position={[-10, 10, 10]} angle={0.15} penumbra={1} intensity={1} color="#00e8c6" />

            <FloatingObject
                position={[-2.5, 1, 0]}
                color="#6b46d4"
                type="icosahedron"
                speed={1.2}
            />

            <FloatingObject
                position={[2.5, -1, 1]}
                color="#00e8c6"
                type="torus"
                speed={0.8}
            />

            <FloatingObject
                position={[0, 2, -2]}
                color="#ffffff"
                type="sphere"
                speed={1}
            />

            <ContactShadows
                position={[0, -3.5, 0]}
                opacity={0.4}
                scale={20}
                blur={2}
                far={4.5}
            />

            <Environment preset="city" />
        </>
    );
};
