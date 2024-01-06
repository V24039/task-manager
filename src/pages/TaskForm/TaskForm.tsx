import { Form, useFormikContext } from "formik";
import { FormInput, FormSelect } from "../../components/FormElements";
import { currentStatusOptions, priorityOptions } from "./constants";

const TaskForm = () => {
  const { handleSubmit } = useFormikContext();
  return (
    <Form>
      <FormInput
        label={"Name:"}
        name={"taskName"}
        type={"text"}
        placeholder={""}
      />
      <FormInput
        label={"Excepted date of completion:"}
        name={"exceptedCompletion"}
        type={"date"}
        placeholder={""}
      />
      <FormInput
        label={"Description:"}
        name={"taskDescription"}
        type={"text"}
        placeholder={""}
      />
      <FormSelect
        label="Status"
        name="currentStatus"
        placeholder=""
        options={currentStatusOptions}
      />
      <FormSelect
        label="Priority"
        name="priority"
        placeholder=""
        options={priorityOptions}
      />
      <button type="submit" onSubmit={() => handleSubmit}>
        Submit
      </button>
    </Form>
  );
};

export default TaskForm;
