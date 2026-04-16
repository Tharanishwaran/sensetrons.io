import { Canvas } from "@react-three/fiber";
import { SceneContent } from "./SceneContent";
import { Suspense } from "react";

export const SceneCanvas = () => {
    return (
        <div className="absolute inset-0 -z-0 pointer-events-none">
            <Canvas
                camera={{ position: [0, 0, 5], fov: 75 }}
                gl={{ antialias: true, alpha: true }}
                dpr={[1, 2]}
            >
                <Suspense fallback={null}>
                    <SceneContent />
                </Suspense>
            </Canvas>
        </div>
    );
};
