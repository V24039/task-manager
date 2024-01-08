import { DragDropContext, DropResult } from "react-beautiful-dnd";
import { ITaskFormValue } from "../TaskForm/types";
import { TaskColumn } from "./TaskColumn";
import { useEffect, useState } from "react";

const status = ["added", "started", "completed"];

export const TasksLists = () => {
  const tasks = sessionStorage.getItem("tasks");
  const [tasksArray, setTasksArray] = useState<ITaskFormValue[]>(
    tasks ? JSON.parse(tasks) : []
  );

  useEffect(() => {
    sessionStorage.setItem("tasks", JSON.stringify(tasksArray));
  }, [tasksArray]);

  const getCurrentTasks = (taskType: string) =>
    tasksArray.filter((value) => value.currentStatus === taskType);

  const handleDrag = (result: DropResult) => {
    const { destination, draggableId } = result;

    if (destination) {
      const changedTask: ITaskFormValue[] = tasksArray.map((value) => {
        if (value.taskName === draggableId) {
          return {
            ...value,
            currentStatus: destination?.droppableId || value.currentStatus,
          };
        } else {
          return value;
        }
      });

      if (changedTask !== undefined) {
        setTasksArray(changedTask);
      }
    }
  };

  return (
    <DragDropContext onDragEnd={handleDrag}>
      <div className="task_lists">
        {status.map((taskType, index) => (
          <TaskColumn
            key={`${taskType}-${index}`}
            taskType={taskType}
            currentTasks={getCurrentTasks(taskType)}
          />
        ))}
      </div>
    </DragDropContext>
  );
};
