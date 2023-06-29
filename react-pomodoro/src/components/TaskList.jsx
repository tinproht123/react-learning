import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TaskItem from "./TaskItem";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { saveNewTask } from "../store/task-slice";

const TaskList = () => {
  const [showTaskForm, setShowTaskForm] = useState(false);
  const [taskName, setTaskName] = useState("");
  const [taskNumber, setTaskNumber] = useState(1);

  const tasks = useSelector((state) => state.task.tasks);
  const dispatch = useDispatch();

  const saveTask = () => {
    if (taskName.trim() === "") return;
    const newTask = {
      id: uuidv4(),
      name: taskName,
      finished: false,
      totalPomos: taskNumber,
      finishedPomos: 0,
      note: "",
      isRunning: false,
    };
    console.log(newTask);
    dispatch(saveNewTask({ newTask }));
    setShowTaskForm(false);
  };

  return (
    <div className="container">
      <div className="task-container">
        <div className="tasks-list">
          <div className="tasks-header">
            <p>Tasks</p>
            <button className="btn btn-tasks">
              <FontAwesomeIcon icon="fa-solid fa-ellipsis-vertical" />
            </button>
          </div>
          <hr />
          <div className="tasks-body">
            {tasks.map((task) => (
              <TaskItem key={task.id} {...task} />
            ))}
          </div>
        </div>
        {!showTaskForm && (
          <button
            className="btn btn-add-task"
            onClick={() => setShowTaskForm(true)}
          >
            <FontAwesomeIcon
              icon="fa-solid fa-circle-plus"
              style={{ marginRight: "10px" }}
            />
            Add Task
          </button>
        )}

        {/* Task form */}
        {showTaskForm && (
          <div className="form-add-task">
            <div className="form-body">
              {/* Create new task name */}
              <input
                type="text"
                className="task-input"
                placeholder="What are you working on?"
                value={taskName}
                onChange={(e) => setTaskName(e.target.value)}
              />
              <p style={{ fontWeight: "bold" }}>Est Pomodoros</p>
              <div>
                {/* Set task number */}
                <input
                  type="number"
                  readOnly
                  className="input-task-number"
                  value={taskNumber}
                />
                <button
                  className="btn btn-task-number"
                  onClick={() => setTaskNumber((prev) => prev + 1)}
                >
                  <FontAwesomeIcon icon="fa-solid fa-caret-up" />
                </button>
                <button
                  className="btn btn-task-number"
                  onClick={() => {
                    if (taskNumber === 0) {
                      return;
                    }
                    setTaskNumber((prev) => prev - 1);
                  }}
                >
                  <FontAwesomeIcon icon="fa-solid fa-caret-down" />
                </button>
              </div>
              <button className="btn btn-add-note">+ Add Note</button>
            </div>
            <div className="form-footer">
              <button
                className="btn btn-cancel"
                onClick={() => setShowTaskForm(false)}
              >
                Cancel
              </button>
              <button className="btn btn-save" onClick={() => saveTask()}>
                Save
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TaskList;
