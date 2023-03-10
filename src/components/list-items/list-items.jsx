import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faCircle } from "@fortawesome/free-regular-svg-icons";

import "animate.css";

const ListItems = ({ id, completed, text, completeHandler, deleteHandler }) => {
  const [done, setDone] = useState(completed);
  const [animate, setAnimate] = useState(false);
  const waitAndComplete = (event, id) => {
    setDone((prev) => !prev);
    setAnimate(true);
    setTimeout(() => {
      completeHandler(id, completed);
      setAnimate(false);
    }, 500);
  };
  const waitAndDelete = (e, id) => {
    e.target.classList.add("animate__animated", "animate__zoomOut");
    setTimeout(() => {
      deleteHandler(id);
    }, 500);
  };

  const icon = done ? faCheckCircle : faCircle;
  const color = done ? "text-green-500" : "text-gray-500";
  const animateClass = done
    ? "animate__animated animate__bounceIn"
    : "animate__animated animate__bounceOut";

  return (
    <li
      className={`flex justify-between items-center bg-gray-100 rounded-full my-2 p-2 mx-auto 
          ${done ? "bg-green-100" : ""}
          `}
    >
      <div className="flex items-center">
        <FontAwesomeIcon
          icon={icon}
          className={`mr-2  ${color}
          ${animate ? animateClass : ""}`}
          onClick={(e) => waitAndComplete(e, id)}
          size="2x"
        />
        <p className="text-gray-700 px-4 py-2">{text}</p>
      </div>
      <button
        className={`bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full`}
        onClick={(e) => waitAndDelete(e, id)}
      >
        Delete
      </button>
    </li>
  );
};
export default ListItems;
