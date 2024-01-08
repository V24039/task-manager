import { Droppable } from "react-beautiful-dnd";
import { currentStatusOptions } from "../../TaskForm/constants";
import { ITaskFormValue } from "../../TaskForm/types";
import { TaskDetails } from "../TaskDetails";

interface ITaskColumnProps {
  taskType: string;
  currentTasks: ITaskFormValue[];
}

export const TaskColumn = ({ taskType, currentTasks }: ITaskColumnProps) => {
  const getTaskTitle = () =>
    currentStatusOptions.find((ele) => ele.value === taskType)?.label;

  return (
    <div key={taskType} className="column" id={taskType}>
      <h1>{getTaskTitle()}</h1>
      <Droppable droppableId={taskType} >
        {(provided) => (
          <div className="column-height" ref={provided.innerRef} {...provided.droppableProps}>
            {currentTasks.map((value, index) => (
              <TaskDetails key={value.taskName} task={value} index={index} />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
};
