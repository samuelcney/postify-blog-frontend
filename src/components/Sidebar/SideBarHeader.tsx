export const SideBarHeader = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex h-[4rem] items-center w-full pt-5 pl-3">
      {children}
    </div>
  );
};
