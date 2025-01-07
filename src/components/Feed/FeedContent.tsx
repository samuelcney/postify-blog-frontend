interface FeedContentProps {
  children?: React.ReactNode;
}

export const FeedContent = ({ children }: FeedContentProps) => {
  return (
    <div
      className="flex flex-col h-full ml-4 items-center py-4 gap-12 overflow-y-auto"
      style={{ scrollbarWidth: "thin", scrollbarColor: "#ffffff transparent" }}
    >
      {children}
    </div>
  );
};
