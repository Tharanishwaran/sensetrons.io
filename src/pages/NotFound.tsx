import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/Button";
import { ParticleField } from "@/components/3d/ParticleField";
import { SceneCanvas } from "@/components/3d/SceneCanvas";

const NotFound = () => {
  return (
    <div className="bg-background min-h-screen flex items-center justify-center relative overflow-hidden">
      <ParticleField />
      <SceneCanvas />

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-[12rem] md:text-[20rem] font-black text-foreground/5 uppercase leading-none select-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            404
          </h1>

          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6 uppercase tracking-tighter">
              LOST IN <span className="text-secondary italic">SPACE</span>
            </h2>
            <p className="text-foreground/50 text-xl mb-12 max-w-lg mx-auto font-light">
              The coordinates you provided do not exist in our current digital ecosystem.
            </p>
            <Link to="/">
              <Button size="lg">Return to Base</Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;
