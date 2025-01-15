"use client";
import { Bounce, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function ToastProvider() {
  return (
    <ToastContainer
      autoClose={3000}
      position="bottom-right"
      pauseOnHover={false}
      transition={Bounce}
    />
  );
}
