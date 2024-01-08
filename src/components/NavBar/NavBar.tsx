import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <>
      <nav className="tabs">
        <Link className="tab" to="/add_task">Add Task</Link>
        <Link className="tab" to="/view_tasks">View Task</Link>
      </nav>
    </>
  );
};
