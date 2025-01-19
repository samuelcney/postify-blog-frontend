"use client";
import { Auth } from "@/components/AuthLayout";
import { useState } from "react";

export default function Home() {
  const [isRegister, setIsRegister] = useState(false);

  const toggleAuthView = () => {
    setIsRegister(!isRegister);
  };

  return (
    <div
      className={`w-full h-screen flex items-center background overflow-hidden`}
    >
      <div
        className={`w-full flex flex-1 h-full font-[family-name:var(--font-geist-sans)] items-center transition-transform duration-500 justify-center`}
        style={{
          transform: `translateX(${isRegister ? "-26%" : "26%"})`,
        }}
      >
        <Auth.Root isRegister={isRegister}>
          {isRegister ? (
            <Auth.Register onToggle={toggleAuthView} />
          ) : (
            <Auth.Login onToggle={toggleAuthView} />
          )}
        </Auth.Root>
      </div>
    </div>
  );
}
