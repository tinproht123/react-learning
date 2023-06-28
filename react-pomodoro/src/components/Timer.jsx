import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { updateStatus } from "../store/task-slice";

const Timer = () => {
  const dispatch = useDispatch();
  const { taskOrder, status } = useSelector((state) => state.task);
  const [isRunning, setIsRunning] = useState(false);
  const [pomoTime, setPomoTime] = useState("25:00");
  const [shortBreakTime, setShortBreakTIme] = useState("01:00");
  const [longBreakTime, setLongBreakTime] = useState("15:00");
  const [currentTime, setCurrentTime] = useState(pomoTime);

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
    console.log(currentTime);
    setCurrentTime((prev) => (prev === newTimer ? prev : newTimer));
  };
  useEffect(() => {
    let intervalId = null;
    if (isRunning) {
      intervalId = setInterval(countdown, 1000);
    }

    return () => clearInterval(intervalId);
  }, [isRunning]);
  return (
    <div className="container">
      <div className="timer-container">
        <div className="btn-container">
          <button className={`btn ${status === "Pomodoro" && "focus"}`}>
            Pomodoro
          </button>
          <button className={`btn ${status === "Short Break" && "focus"}`}>
            Short Break
          </button>
          <button className={`btn ${status === "Long Break" && "focus"}`}>
            Long Break
          </button>
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
