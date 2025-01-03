
interface FeedRootProps {
  children?: React.ReactNode
}

export const FeedRoot = ({children} : FeedRootProps)=>{
  return(
    <div className="h-full flex-grow bg-[--background]">
      {children}
    </div>
  )
}