import React, { ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Icon from "../Icon/Icon";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children?: ReactNode;
}

export const ModalRoot = ({ children, onClose, isOpen }: ModalProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="w-[60%] min-h-[75%] max-h-[75%] bg-white rounded-lg p-2 flex flex-col max-w-2xl relative"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="w-full flex justify-end items-end">
              <Icon
                size={20}
                name="X"
                onClick={onClose}
                color="#000"
                className="cursor-pointer"
              />
            </div>
            <div className="flex-grow w-full">{children}</div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
