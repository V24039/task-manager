import * as Yup from "yup";
import { ISelectOptionsProps } from "../../components/FormElements/Selectfield/types";

export const taskDetailsInitialValue = {
  taskName: "",
  exceptedCompletion: "",
  priority: "",
  taskDescription: "",
  currentStatus: ""
};

export const taskDetailSchema = Yup.object().shape({
  taskName: Yup.string()
    .max(
      50,
      "Task Name exceds the maximum length of 50, please shorten the name"
    )
    .required("Required"),
  exceptedCompletion: Yup.date().required("Required"),
  priority: Yup.string(),
  taskDescription: Yup.string()
    .min(20, "Task description should of atleast 20 character")
    .max(500, "Task description cannot exceed 200 character"),
  currentStatus: Yup.string()
});

export const priorityOptions: ISelectOptionsProps = [
  { value: "high", label: "P1(High Priority)" },
  { value: "medium", label: "P2(Medium Priority)" },
  { value: "low", label: "P3(Low Priority)" },
];

export const currentStatusOptions: ISelectOptionsProps = [
  { value: "added", label: "Added" },
  { value: "started", label: "Started" },
  { value: "completed", label: "Completed" },
];

export enum NotificationType {
  SUCCESS = "SUCESS",
  ERROR = "ERROR",
}
