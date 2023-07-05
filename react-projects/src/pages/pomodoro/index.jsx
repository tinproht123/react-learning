import "./App.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faCircleCheck,
  faEllipsisVertical,
  faCirclePlus,
  faCaretUp,
  faCaretDown,
  faForwardStep,
} from "@fortawesome/free-solid-svg-icons";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";
import Navbar from "./components/Navbar";
import Timer from "./components/Timer";
import TaskList from "./components/TaskList";
import { useSelector } from "react-redux";

function Index() {
  const status = useSelector((state) => state.task.status);
  return (
    <div className="Pomodoro">
      <div
        className={`App ${
          status === "Pomodoro"
            ? "red"
            : status === "Short Break"
            ? "cyan"
            : "blue"
        }`}
      >
        <Navbar />
        <Timer />
        <TaskList />
      </div>
    </div>
  );
}

export default Index;
library.add(
  faCircleCheck,
  faEllipsisVertical,
  faCirclePlus,
  faCaretUp,
  faCaretDown,
  faForwardStep,
  faTrashCan
);
