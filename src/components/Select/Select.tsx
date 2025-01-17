import CategoryProps from "@/types/CategoryInterface";
interface SelectProps {
  labelText?: string;
  isInverted?: boolean;
  data: CategoryProps[];
  onchange?: (value: string) => void;
  errorMessage?: string;
  isError?: boolean;
}

export const Select = ({
  labelText,
  isInverted,
  data,
  onchange,
  errorMessage,
  isError,
}: SelectProps) => {
  return (
    <div className="mb-8">
      {labelText && (
        <div className="flex flex-col w-full">
          <label className={`text-[--foreground] text-base ml-2 ${isInverted}`}>
            {labelText}
          </label>
        </div>
      )}
      <select
        className={`w-full border border-[--foreground] rounded-lg p-3 bg-[--background] flex h-12 outline-none text-[--foreground] focus:ring-2 focus:ring-[--highlight] ${isInverted} ${
          isError ? "border-red-600" : ""
        }`}
        onChange={(e) => onchange?.(e.target.value)}
        defaultValue=""
      >
        <option value="" disabled>
          Selecione uma categoria
        </option>
        {data.map((item: CategoryProps) => (
          <option
            key={item.id}
            value={item.id.toString()}
            className="bg-background text-[--foreground]"
          >
            {item.title}
          </option>
        ))}
      </select>
      {isError && (
        <span className="text-red-600 text-sm ml-2">{errorMessage}</span>
      )}
    </div>
  );
};
