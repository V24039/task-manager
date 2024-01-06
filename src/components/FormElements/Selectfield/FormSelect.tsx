import { useField } from "formik";
import { IFormSelectInputProps } from "./types";
import { useSelectOptions } from "./useSelectOptions";

export const FormSelect = ({
  label,
  options,
  ...props
}: IFormSelectInputProps) => {
  const [field, meta] = useField(props);
  const formOptions = useSelectOptions(options);
  return (
    <>
      <label>
        {label}
        <select
          {...field}
          {...props}
          className={meta.touched && meta.error ? "error-field" : ""}
        >
          {formOptions}
        </select>
      </label>
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
};
