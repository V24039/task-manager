import { HomePage } from "./pages/HomePage";
import "./App.css";

export default function App() {
  // useEffect(() => {
  //   sessionStorage.setItem(
  //     "tasks",
  //     JSON.stringify([
  //       {
  //         taskName: "task1",
  //         exceptedCompletion: "",
  //         priority: "",
  //         taskDescription: "",
  //         currentStatus: "added",
  //       },
  //       {
  //         taskName: "task2",
  //         exceptedCompletion: "",
  //         priority: "",
  //         taskDescription: "",
  //         currentStatus: "started",
  //       },
  //       {
  //         taskName: "task3",
  //         exceptedCompletion: "",
  //         priority: "",
  //         taskDescription: "",
  //         currentStatus: "completed",
  //       },
  //     ])
  //   );
  // }, []);

  return (
    <>
      <HomePage />
    </>
  );
}
