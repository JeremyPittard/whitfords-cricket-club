import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";

const variants = {
  initial: { opacity: 0, x: 0, y: 10 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: -10 },
};

const Transition = ({ children }) => {
  const router = useRouter();
  return (
    <motion.main
      key={`transistion-${router.asPath}`}
      animate="enter"
      initial="initial"
      exit="exit"
      variants={variants}
      transition={{
        duration: 0.5,
      }}
    >
      {children}
    </motion.main>
  );
};

export default Transition;
