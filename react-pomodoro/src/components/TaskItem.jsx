/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch } from "react-redux";
import { deleteTask, runTask, updateTask } from "../store/task-slice";
import { useState } from "react";

const TaskItem = (props) => {
  const { id, name, finished, totalPomos, finishedPomos, isRunning } = props;
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [finishedNumber, setFinishedNumber] = useState(finishedPomos);
  const [totalNumber, setTotalNumber] = useState(totalPomos);
  const [taskName, setTaskName] = useState(name);

  const checkItem = (e) => {
    e.stopPropagation();
    const updatedTask = { ...props, finished: !finished };
    dispatch(updateTask({ updatedTask, id }));
  };

  const handleDelete = () => {
    dispatch(deleteTask({ id }));
  };

  const saveTask = () => {
    const updatedTask = {
      ...props,
      name: taskName,
      finishedPomos: finishedNumber,
      totalPomos: totalNumber,
    };
    dispatch(updateTask({ updatedTask }));
    setIsEditing(false);
  };

  const chooseRunTask = (e) => {
    e.stopPropagation();
    if (isRunning === true) return;
    dispatch(runTask({ id }));
  };

  return (
    <>
      {!isEditing && (
        <div
          className={`task-item ${isRunning && "task-running"}`}
          onClick={(e) => chooseRunTask(e)}
        >
          <div className="flex-start">
            <button
              className={`btn btn-check ${finished && "checked"}`}
              onClick={(e) => checkItem(e)}
            >
              <FontAwesomeIcon icon="fa-solid fa-circle-check" />
            </button>
            <p
              style={{ marginLeft: "15px" }}
              className={`task-name ${finished ? "cross-line" : ""}`}
            >
              {name}
            </p>
          </div>
          <div className="flex-end">
            <p>
              <span>{finishedPomos}</span>/{totalPomos}
            </p>
            <button
              className="btn btn-tasks"
              onClick={(e) => {
                e.stopPropagation();
                setIsEditing(true);
              }}
            >
              <FontAwesomeIcon icon="fa-solid fa-ellipsis-vertical" />
            </button>
          </div>
        </div>
      )}
      {isEditing && (
        <div className="form-add-task" style={{ marginBottom: "8px" }}>
          <div className="form-body">
            {/* Create new task name */}
            <input
              type="text"
              className="task-input"
              placeholder="What are you working on?"
              value={taskName}
              onChange={(e) => setTaskName(e.target.value)}
              autoFocus
            />
            <p style={{ fontWeight: "bold" }}>Act/Est Pomodoros</p>
            <div>
              {/* Set task number */}
              <input
                type="number"
                className="input-task-number"
                value={finishedNumber}
                onChange={(e) => setFinishedNumber(e.target.value)}
              />
              {/* Set task number */}
              <input
                type="number"
                readOnly
                className="input-task-number"
                value={totalNumber}
              />
              <button
                className="btn btn-task-number"
                onClick={() => setTotalNumber((prev) => prev + 1)}
              >
                <FontAwesomeIcon icon="fa-solid fa-caret-up" />
              </button>
              <button
                className="btn btn-task-number"
                onClick={() => {
                  if (totalNumber === 0) {
                    return;
                  }
                  setTotalNumber((prev) => prev - 1);
                }}
              >
                <FontAwesomeIcon icon="fa-solid fa-caret-down" />
              </button>
            </div>
            <button className="btn btn-add-note">+ Add Note</button>
          </div>
          <div className="form-footer">
            <button className="btn btn-delete" onClick={() => handleDelete(id)}>
              Delete
            </button>
            <div>
              <button
                className="btn btn-cancel"
                onClick={() => setIsEditing(false)}
              >
                Cancel
              </button>
              <button className="btn btn-save" onClick={() => saveTask()}>
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default TaskItem;
