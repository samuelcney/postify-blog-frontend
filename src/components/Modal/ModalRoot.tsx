import React, { ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Icon from "../Icon/Icon";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children?: ReactNode;
  widthPercentage?: number;
  heightPercentage?: number;
}

export const ModalRoot = ({
  children,
  onClose,
  isOpen,
  widthPercentage,
  heightPercentage,
}: ModalProps) => {
  const widthPer = widthPercentage ? widthPercentage : "w-[35%]";
  const heightPer = heightPercentage ? heightPercentage : "min-h-[55%]";
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
            className={`bg-[#171717] rounded-lg p-4 flex flex-col ${widthPer} ${heightPer} relative`}
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
                className="cursor-pointer"
              />
            </div>
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
