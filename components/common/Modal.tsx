import { AnimatePresence, motion } from "framer-motion";

const Modal: React.FC<
  React.PropsWithChildren & { state: [boolean, React.Dispatch<React.SetStateAction<boolean>>] }
> = ({ children, state: [open, setOpen] }) => {
  return (
    <AnimatePresence initial={false} exitBeforeEnter={true} onExitComplete={() => null}>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50"
            onClick={() => setOpen(false)}
          />
          <motion.div
            initial={{ y: "100vh" }}
            animate={{ y: 0 }}
            exit={{ y: "100vh" }}
            transition={{ type: "tween" }}
            className="fixed bottom-0 left-0 flex w-full bg-white rounded-t-xl pt-3 z-50"
          >
            {children}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default Modal;
