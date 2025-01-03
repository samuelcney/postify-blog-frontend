import { ReactNode } from "react"

interface LoginRootProps {
  children: ReactNode
}

export const LoginRoot = ({children} : LoginRootProps) => {
  return (
    <div className="border-[--foreground] border-2 flex flex-[0.4] h-[85%] rounded-2xl">{children}</div>
  )
}