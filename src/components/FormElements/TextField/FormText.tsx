import { useField } from "formik";

interface IFormInputProps {
  label: string;
  name: string;
  type: string;
  placeholder: string;
}

export const FormInput = ({ label, ...props }: IFormInputProps) => {
  const [field, meta] = useField(props);
  return (
    <>
      <label>
        {label}
        <input
          {...field}
          {...props}
          className={meta.touched && meta.error ? "error-field" : ""}
        />
      </label>
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
};
