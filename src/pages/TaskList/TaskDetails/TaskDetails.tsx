import { Draggable } from "react-beautiful-dnd";
import { ITaskFormValue } from "../../TaskForm/types";
import { useState } from "react";

interface ITaskDetailsProps {
  task: ITaskFormValue;
  index: number;
}
export const TaskDetails = ({ task, index }: ITaskDetailsProps) => {
  const [toggle, setToggle] = useState<boolean>(false);
  const handleClick = () => {
    setToggle((prev) => !prev);
  };
  const getTaskDetails = () => {
    if (toggle) {
      return (
        <div>
          <p>
            <label>Name: </label>
            {task.taskName}
          </p>
          <p>
            <label>Date: </label>
            {task.exceptedCompletion}
          </p>
          <p>
            <label>Description: </label>
            {task.taskDescription}
          </p>
          <p>
            <label>Priority: </label>
            {task.priority}
          </p>
        </div>
      );
    } else {
      return task.taskName;
    }
  };
  return (
    <Draggable key={task.taskName} draggableId={task.taskName} index={index}>
      {(provided) => (
        <div
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          className="task_details"
          onClick={handleClick}
        >
          {getTaskDetails()}
        </div>
      )}
    </Draggable>
  );
};
