import { Route, Routes } from "react-router-dom";
import { NavBar } from "../../components/NavBar";
import { TaskFormPage } from "../TaskForm";
import { TasksLists } from "../TaskList";

export const Home = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/add_task" element={<TaskFormPage />} />
        <Route path="/view_tasks" element={<TasksLists />} />
        <Route path="/" element={<TasksLists />} />
      </Routes>
    </>
  );
};
