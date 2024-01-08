import { ISelectOptionsProps } from "./types";

export function useSelectOptions(
  options: ISelectOptionsProps,
  placeholder: string
) {
  return (
    <>
      <option key={-1} value="none" selected hidden>
        {placeholder}
      </option>
      {options.map((option, index) => (
        <option key={index} value={option.value}>
          {option.label}
        </option>
      ))}
    </>
  );
}
