interface SelectProps {
  labelText?: string;
  isInverted?: boolean;
  data?: any;
}

export const Select = ({ labelText, isInverted, data }: SelectProps) => {
  return (
    <>
      {labelText && (
        <div className="flex flex-col w-full">
          <label className={`text-[--foreground] text-base ml-2 ${isInverted}`}>
            {labelText}
          </label>
        </div>
      )}
      <select className="w-full border border-[--foreground] rounded-lg p-3 bg-[--background] flex h-12 outline-none text-[--foreground] focus:ring-2 focus:ring-[--highlight] mb-6">
        {data.map((item: { id: number; title: string }) => (
          <option value="1" className="bg-background text-[--foreground]">
            Público
          </option>
        ))}
      </select>
    </>
  );
};
