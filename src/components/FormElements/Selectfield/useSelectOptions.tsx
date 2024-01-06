import { ISelectOptionsProps } from "./types";

export function useSelectOptions(options: ISelectOptionsProps) {
  return (
    <>
      {options.map((option, index) => (
        <option key={index} value={index}>
          {option.label}
        </option>
      ))}
    </>
  );
}
