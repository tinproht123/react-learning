/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TaskItem = (props) => {
  const { id, name, finished, totalPomos, finishedPomos } = props;
  return (
    <div className="task-item">
      <FontAwesomeIcon icon="fa-solid fa-circle-check" /> {name} {finishedPomos}
      {"/"}
      {totalPomos}
    </div>
  );
};

export default TaskItem;
