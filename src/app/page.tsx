"use client";
import Icon from "@/components/Icon/Icon";
import { Input } from "@/components/Input";
import { Login } from "@/components/Login";
import { useState } from "react";

export default function Home() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="w-full flex flex-1 h-screen font-[family-name:var(--font-geist-sans) justify-center items-center bg-[color:var(--geist-background)]">
      <Login.Root>
        <div className="flex flex-1 h-full flex-col items-center">
          <Input.Root>
            <Input.Content
              labelText="Email"
              name="email"
              value={username}
              icon={<Icon name="AtSign" size={22} />}
              onchange={(e) => setUsername(e.target.value)}
            />

            <Input.Content
              labelText="Senha"
              name="senha"
              value={password}
              icon={<Icon name="Lock" size={22} />}
              onchange={(e) => setPassword(e.target.value)}
            />
          </Input.Root>
        </div>
      </Login.Root>
    </div>
  );
}
