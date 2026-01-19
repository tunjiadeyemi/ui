import React from "react";
import { motion, AnimatePresence } from "framer-motion";

import { ModalProps } from "./types";
import { revealVariants } from "./constant";

const Modal = ({
  isDrag = false,
  showModal = true,
  onClose,
  children,
  className,
  revealMode = "fade",
}: ModalProps) => {
  const variants = revealVariants[revealMode];

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget && onClose) {
      onClose();
    }
  };

  const handleDragEnd = (_event: any, info: any) => {
    if (info.offset.y > 100 && onClose) {
      onClose();
    }
  };

  return (
    <AnimatePresence mode="wait">
      {showModal && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className={`fixed inset-0 bg-black/80 flex items-center z-50 ${
            revealMode === "slide-right" ? "justify-end" : "justify-center"
          }`}
          onClick={handleOverlayClick}
        >
          <motion.div
            key="modal-content"
            initial={variants.initial}
            animate={variants.animate}
            exit={variants.exit}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className={`${className}`}
            onClick={(e) => e.stopPropagation()}
            drag={revealMode === "slide-bottom" ? "y" : false}
            dragConstraints={{ top: 0, bottom: 0 }}
            dragElastic={{ top: 0, bottom: 0.5 }}
            onDragEnd={handleDragEnd}
          >
            {isDrag && (
              <button
                className="w-full flex justify-center mb-4 lg:hidden pt-2"
                aria-label="Drag Indicator"
              >
                <img
                  src={`/icons/mobile-modal-drag.svg`}
                  height={50}
                  width={50}
                  alt="Modal Icon"
                />
              </button>
            )}
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
