import { Form, useFormikContext } from "formik";
import { FormInput, FormSelect } from "../../components/FormElements";
import { currentStatusOptions, priorityOptions } from "./constants";

const TaskForm = () => {
  const { handleSubmit } = useFormikContext();
  return (
    <Form>
      <p className="form_instruction">*Indicates required field</p>
      <FormInput
        label="*Name:"
        name="taskName"
        type="text"
        placeholder="Please enter the name of the task"
      />
      <FormInput
        label="*Excepted date of completion:"
        name="exceptedCompletion"
        type="date"
        placeholder="Please choose the excepted date"
      />
      <FormInput
        label="Description:"
        name="taskDescription"
        type="text"
        placeholder="Please enter the task description"
      />
      <FormSelect
        label="*Status"
        name="currentStatus"
        placeholder="Please choose the current task status from the dropdown"
        options={currentStatusOptions}
      />
      <FormSelect
        label="*Priority"
        name="priority"
        placeholder="Please choose task priority level from the dropdown"
        options={priorityOptions}
      />
      <button type="submit" onSubmit={() => handleSubmit}>
        Submit
      </button>
    </Form>
  );
};

export default TaskForm;
