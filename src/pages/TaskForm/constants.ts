import * as Yup from "yup";
import { ISelectOptionsProps } from "../../components/FormElements/Selectfield/types";
import moment from "moment";

export const taskDetailsInitialValue = {
  taskName: "",
  exceptedCompletion: "",
  priority: "",
  taskDescription: "",
  currentStatus: "",
};

const todayDate = new Date();

export const taskDetailSchema = Yup.object().shape({
  taskName: Yup.string()
    .max(
      50,
      "Task Name exceds the maximum length of 50, please shorten the name"
    )
    .label("Name")
    .required(),
  exceptedCompletion: Yup.date()
    .label("Excepted Date of Completion")
    .min(moment(todayDate).add(-1, "day"), "The date cannot be in past.")
    .required(),
  priority: Yup.string().label("Priority").required(),
  taskDescription: Yup.string()
    .required()
    .min(20, "Task description should of atleast 20 character")
    .max(500, "Task description cannot exceed 200 character"),
  currentStatus: Yup.string().label("Current Status").required(),
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
