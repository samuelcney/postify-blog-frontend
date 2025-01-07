interface FeedRootProps {
  children?: React.ReactNode;
}

export const FeedRoot = ({ children }: FeedRootProps) => {
  return (
    <div className="h-full flex flex-[4] justify-center pt-4">{children}</div>
  );
};
