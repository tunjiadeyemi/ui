import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';


type RevealMode = 'fade' | 'slide-right' | 'slide-bottom';

interface ModalProps {
  children: React.ReactNode;
  className?: string;
  revealMode?: RevealMode;
  showModal?: boolean;
  onClose?: () => void;
  isDrag?: boolean;
}

const revealVariants = {
  fade: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 }
  },
  'slide-right': {
    initial: { x: '100%', opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: '100%', opacity: 0 }
  },
  'slide-bottom': {
    initial: { y: '100%', opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: '100%', opacity: 0 }
  }
};

const Modal = ({
  children,
  className,
  revealMode = 'fade',
  showModal = true,
  onClose,
  isDrag = false
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
            revealMode === 'slide-right' ? 'justify-end' : 'justify-center'
          }`}
          onClick={handleOverlayClick}
        >
          <motion.div
            key="modal-content"
            initial={variants.initial}
            animate={variants.animate}
            exit={variants.exit}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            className={`${className}`}
            onClick={(e) => e.stopPropagation()}
            drag={revealMode === 'slide-bottom' ? 'y' : false}
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
