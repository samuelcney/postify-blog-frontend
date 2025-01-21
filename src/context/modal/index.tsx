"use client";
import { createContext, useContext, useState } from "react";

interface ModalContextProps {
  isModalOpen: boolean;
  modalType: string | null;
  modalProps: Record<string, any> | null;
  openModal: (type: string, props?: Record<string, any>) => void;
  closeModal: () => void;
}

const ModalContext = createContext<ModalContextProps | undefined>(undefined);

export const ModalProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState<string | null>(null);
  const [modalProps, setModalProps] = useState<Record<string, any> | null>(
    null
  );

  const openModal = (type: string, props?: Record<string, any>) => {
    setModalType(type);
    setModalProps(props || null);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setModalType(null);
    setModalProps(null);
    setIsModalOpen(false);
  };

  return (
    <ModalContext.Provider
      value={{ isModalOpen, modalType, modalProps, openModal, closeModal }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return context;
};
