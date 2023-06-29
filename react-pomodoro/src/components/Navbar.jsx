import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector } from "react-redux";

const Navbar = () => {
  const progress = useSelector((state) => state.task.progress);
  return (
    <div className="navbar">
      <div className="container">
        <FontAwesomeIcon icon="fa-solid fa-circle-check" /> Pomofocus
        <div
          className="timer-progress-bar"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
};

export default Navbar;
