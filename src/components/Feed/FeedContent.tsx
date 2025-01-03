
interface FeedContentProps {
  children?: React.ReactNode
}

export const FeedContent = ({children} : FeedContentProps)=>{
  return(
    <div className="h-full flex-grow bg-[--background]">
      {children}
    </div>  
  )
}
