import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useEffect } from "react";

const Modal: React.FC<
  React.PropsWithChildren & { state: [boolean, React.Dispatch<React.SetStateAction<boolean>>] }
> = ({ children, state: [open, setOpen] }) => {
  const closeModal = useCallback(
    (backButtonPressed: boolean = false) => {
      if (!backButtonPressed) window.history.back();
      setOpen(false);
    },
    [open]
  );

  useEffect(() => {
    if (open) {
      window.history.pushState(null, "");
      window.addEventListener("popstate", () => closeModal(true), { once: true });
    }
  }, [open]);

  return (
    <AnimatePresence initial={false} mode="wait" onExitComplete={() => null}>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50"
            onClick={() => closeModal()}
          />
          <motion.div
            initial={{ y: "100vh" }}
            animate={{ y: 0 }}
            exit={{ y: "100vh" }}
            transition={{ type: "tween" }}
            className="fixed bottom-2 left-0 flex bg-white rounded-2xl pt-3 mx-2 w-[calc(100%_-_1rem)] z-50"
          >
            {children}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default Modal;
