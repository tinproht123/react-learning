import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef, useState } from "react";
import { updateStatus } from "../store/task-slice";
import { current } from "@reduxjs/toolkit";

const STATUS = ["Pomodoro", "Short Break", "Long Break"];

const Timer = () => {
  const dispatch = useDispatch();
  const { taskOrder, status } = useSelector((state) => state.task);
  const [isRunning, setIsRunning] = useState(false);
  const [pomoTime, setPomoTime] = useState("25:00");
  const [shortBreakTime, setShortBreakTIme] = useState("01:00");
  const [longBreakTime, setLongBreakTime] = useState("15:00");
  const [currentTime, setCurrentTime] = useState(pomoTime);

  var intervalId = null;

  const changeStatus = (sta) => {
    setIsRunning(false);
    dispatch(updateStatus({ status: sta }));
    if (sta === "Short Break") setCurrentTime(shortBreakTime);
    else if (sta === "Long Break") setCurrentTime(longBreakTime);
    else setCurrentTime(pomoTime);
  };

  const countdown = () => {
    let arr = currentTime.split(":");
    let minutes = parseInt(arr[0]);
    let seconds = parseInt(arr[1]);
    if (minutes === 0 && seconds === 0) {
      if (status === "Pomodoro") {
        setCurrentTime(shortBreakTime);
        dispatch(updateStatus({ status: "Long Break" }));
      } else if (status === "Short Break" || status === "Long Break") {
        setCurrentTime(pomoTime);
        dispatch(updateStatus({ status: "Poromodo" }));
      }
    }
    if (seconds === 0) {
      seconds = 59;
      minutes--;
    } else {
      seconds--;
    }
    arr[0] = minutes.toString();
    arr[1] = seconds.toString();
    let newTimer = arr.join(":");
    setCurrentTime(newTimer);
  };
  useEffect(() => {
    if (isRunning) {
      intervalId = setInterval(countdown, 1000);
    }

    return () => clearInterval(intervalId);
  }, [isRunning, currentTime]);
  return (
    <div className="container">
      <div className="timer-container">
        <div className="btn-container">
          {STATUS.map((sta) => (
            <button
              key={sta}
              className={`btn ${status === sta && "focus"}`}
              onClick={() => changeStatus(sta)}
            >
              {sta}
            </button>
          ))}
        </div>
        <div className="timer">{currentTime}</div>
        <button
          className={`btn-start ${
            status === "Pomodoro"
              ? "red-text"
              : status === "Short Break"
              ? "cyan-text"
              : "blue-text"
          }`}
          onClick={() => setIsRunning((prev) => !prev)}
        >
          {isRunning ? "PASUE" : "START"}
        </button>
      </div>
    </div>
  );
};

export default Timer;
