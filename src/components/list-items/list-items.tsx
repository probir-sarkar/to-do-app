import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-regular-svg-icons";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

import "animate.css";

// for redux purposes
import { useDispatch } from "react-redux";
import { toggleStatusToDo, removeToDo } from "../../redux/to-do/toDoSlice";
import React from "react";

interface ListItemsProps {
  item: {
    id: string;
    completed: boolean;
    text: string;
  };
}
const ListItem = ({ item }: ListItemsProps) => {
  const { id, completed, text } = item;
  const dispatch = useDispatch();
  const [done, setDone] = useState<boolean>(completed);
  const [animate, setAnimate] = useState(false);

  const waitAndComplete = () => {
    setDone((prev) => !prev);
    setAnimate(true);
    setTimeout(() => {
      dispatch(toggleStatusToDo(id));
      setAnimate(false);
    }, 500);
  };
  const waitAndDelete = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const target = e.target as HTMLElement;
    target.classList.add("animate__animated", "animate__zoomOut");
    setTimeout(() => {
      dispatch(removeToDo(id));
    }, 500);
  };

  const icon = done ? faCheckCircle : faCircle;
  const animateClass = done
    ? "animate__animated animate__bounceIn"
    : "animate__animated animate__bounceOut";

  return (
    <div
      className={`flex justify-between bg-black bg-opacity-50 rounded my-2 p-2
    ${done ? "text-gray-300" : "text-white"}
    `}
    >
      <div className="flex items-center">
        <FontAwesomeIcon
          icon={icon}
          className={`mr-2 
          ${animate ? animateClass : ""}`}
          onClick={waitAndComplete}
          size="2x"
        />
        <p className="px-4 py-2 text-xl">{done ? <del>{text}</del> : text}</p>
      </div>
      <button
        className={`bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded`}
        onClick={(e) => waitAndDelete(e)}
      >
        Delete
      </button>
    </div>
  );
};
export default ListItem;
