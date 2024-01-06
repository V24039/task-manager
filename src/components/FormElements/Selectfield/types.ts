export interface IFormSelectInputProps {
  label: string;
  name: string;
  placeholder: string;
  options: ISelectOptionsProps;
}

export type ISelectOptionsProps = {
    value: string;
    label: string;
  }[];
