import { ReactNode } from "react"

interface SideBarRootProps {
  children: ReactNode
  isRight?: boolean
}

export const SideBarRoot = ({children, isRight} : SideBarRootProps)=>{

  
  return(
    <div className={`h-full flex-grow-[${isRight ? '0.5' : '0.45'}] bg-[--background]  ${!isRight ? 'border-r' : 'border-0'} border-[--foreground]`}>{children}</div>
  )
}