import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { updateProgress, updateStatus } from "../store/task-slice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const STATUS = ["Pomodoro", "Short Break", "Long Break"];

const Timer = () => {
  const dispatch = useDispatch();
  const { taskOrder, status, progress } = useSelector((state) => state.task);
  const [isRunning, setIsRunning] = useState(false);
  const [pomoTime, setPomoTime] = useState("25:00");
  const [shortBreakTime, setShortBreakTIme] = useState("01:00");
  const [longBreakTime, setLongBreakTime] = useState("15:00");
  const [currentTime, setCurrentTime] = useState(pomoTime);
  const [totalProgress, setTotalProgress] = useState(0);

  const setProgress = (currTime) => {
    let arr = currTime.split(":");
    let minutes = parseInt(arr[0]);
    let seconds = parseInt(arr[1]);
    let newTotalProgress = 60 * minutes + seconds;
    setTotalProgress(newTotalProgress);
  };

  const countProgress = () => {
    let arr = currentTime.split(":");
    let minutes = parseInt(arr[0]);
    let seconds = parseInt(arr[1]);
    const totalCurrentTime = 60 * minutes + seconds;
    let newProgress =
      ((totalProgress - totalCurrentTime) / totalProgress) * 100;
    dispatch(updateProgress({ progress: newProgress }));
  };

  const skipTimer = () => {
    setCurrentTime("00:00");
  };

  const changeStatus = (sta) => {
    setIsRunning(false);
    dispatch(updateStatus({ status: sta }));
    if (sta === "Short Break") {
      setCurrentTime(shortBreakTime);
      setProgress(shortBreakTime);
    } else if (sta === "Long Break") {
      setCurrentTime(longBreakTime);
      setProgress(longBreakTime);
    } else {
      setCurrentTime(pomoTime);
      setProgress(pomoTime);
    }
    countProgress();
  };

  const countdown = () => {
    if (status === "Pomodoro" && currentTime === pomoTime) {
      setProgress(pomoTime);
      countProgress();
    }
    let arr = currentTime.split(":");
    let minutes = parseInt(arr[0]);
    let seconds = parseInt(arr[1]);
    if (minutes === 0 && seconds === 0) {
      setIsRunning(false);
      if (status === "Pomodoro") {
        dispatch(updateStatus({ status: "Short Break" }));
        setCurrentTime(shortBreakTime);
        setProgress(shortBreakTime);
        countProgress();
        dispatch(updateProgress({ progress: 0 }));
        return;
      } else if (status === "Short Break" || status === "Long Break") {
        dispatch(updateStatus({ status: "Pomodoro" }));
        setCurrentTime(pomoTime);
        setProgress(longBreakTime);
        countProgress();
        dispatch(updateProgress({ progress: 0 }));
        return;
      }
    } else if (seconds === 0) {
      seconds = 59;
      minutes--;
    } else {
      seconds--;
    }
    arr[0] = minutes.toString().padStart(2, 0);
    arr[1] = seconds.toString().padStart(2, 0);
    let newTimer = arr.join(":");
    setCurrentTime(newTimer);
    countProgress();
  };
  useEffect(() => {
    let intervalId = null;

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
        <div className="timer-btn-container">
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
            {isRunning ? "PAUSE" : "START"}{" "}
          </button>
          {isRunning && (
            <button onClick={skipTimer} className="btn btn-forward">
              <FontAwesomeIcon icon="fa-solid fa-forward-step" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Timer;
