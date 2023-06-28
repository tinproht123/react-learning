import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TaskItem from "./TaskItem";

const TaskList = () => {
  const tasks = useSelector((state) => state.task.tasks);

  return (
    <div className="container">
      <div className="tasks-list">
        <div className="tasks-header">
          <p>Tasks</p>
          <FontAwesomeIcon icon="fa-solid fa-ellipsis-vertical" />
        </div>
        <div className="tasks-body">
          {tasks.map((task) => (
            <TaskItem key={task.id} {...task} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TaskList;
