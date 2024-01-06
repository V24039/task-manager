import { Formik, FormikHelpers } from "formik";
import {
  NotificationType,
  taskDetailSchema,
  taskDetailsInitialValue,
} from "./constants";
import TaskForm from "./TaskForm";
import { ITaskFormValue } from "./types";
import {
  ReactNotifications,
  Store,
  iNotification,
} from "react-notifications-component";
import "react-notifications-component/dist/theme.css";

export const TaskFormPage = () => {
  const prevTasks = sessionStorage.getItem("tasks");
  const tasksArray: ITaskFormValue[] = prevTasks ? JSON.parse(prevTasks) : [];

  const handleSubmit = (
    values: ITaskFormValue,
    helpers: FormikHelpers<ITaskFormValue>
  ) => {
    if (
      !tasksArray.some(
        (value: ITaskFormValue) => value.taskName === values.taskName
      )
    ) {
      tasksArray.push(values);
      sessionStorage.setItem("tasks", JSON.stringify(tasksArray));
      helpers.resetForm();
      displayNotification(NotificationType.SUCCESS);
    } else {
      displayNotification(NotificationType.ERROR);
    }
  };

  const displayNotification = (notificationType: string) => {
    const notificationProps: iNotification = {
      insert: "top",
      container: "top-center",
      animationIn: ["animate__animated", "animate__fadeIn"],
      animationOut: ["animate__animated", "animate__fadeOut"],
      dismiss: {
        duration: 5000,
        onScreen: true,
      },
    };
    if (notificationType === NotificationType.SUCCESS) {
      Store.addNotification({
        title: "Success",
        message: "The task is added successfully.",
        type: "success",
        ...notificationProps,
      });
    } else {
      Store.addNotification({
        title: "Error",
        message:
          "A task with the provided already please provide a different name.",
        type: "danger",
        ...notificationProps,
      });
    }
  };

  return (
    <>
      <ReactNotifications />
      <Formik
        validateOnMount={true}
        initialValues={taskDetailsInitialValue}
        onSubmit={handleSubmit}
        validationSchema={taskDetailSchema}
        validateOnBlur={true}
      >
        <TaskForm />
      </Formik>
    </>
  );
};
