"use client";
import { Button } from "@/components/Button";
import Icon from "@/components/Icon/Icon";
import { Input } from "@/components/Input";
import { Auth } from "@/components/AuthLayout";
import { useState } from "react";

export default function Home() {
  const [isRegister, setIsRegister] = useState(false);

  const toggleAuthView = () => {
    setIsRegister(!isRegister);
  };

  return (
    <div className="w-full flex flex-1 h-screen font-[family-name:var(--font-geist-sans) justify-center items-center bg-[color:var(--geist-background)]">
      <Auth.Root isRegister={isRegister}>
        {isRegister ? (
          <Auth.Register onToggle={toggleAuthView} />
        ) : (
          <Auth.Login onToggle={toggleAuthView} />
        )}
      </Auth.Root>
    </div>
  );
}
