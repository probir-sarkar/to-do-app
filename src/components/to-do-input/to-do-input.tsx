import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToDo } from "../../redux/to-do/toDoSlice";
import { addToDoActions } from "../../redux/to-do/toDoActions";
import ToDoList from "../to-do-list/to-do-list";

const ToDoInput = () => {
  const [toDoItem, setToDoItem] = useState("");
  const dispatch = useDispatch();
  const todo = useSelector((state) => state.ToDoList);
  const handleAddToDo = () => {
    if (toDoItem === "") {
      return;
    }
    dispatch(addToDoActions(todo, toDoItem));
    setToDoItem("");
  };

  return (
    <>
      <div className="relative flex justify-center items-center w-full">
        <div className="w-full flex justify-between items-center bg-gray-100 rounded-full my-2 p-2">
          {/* input */}
          <input
            type="text"
            className="bg-gray-100 rounded-full px-4 py-2 w-full focus:outline-none"
            placeholder="Add a new task"
            value={toDoItem}
            onChange={(e) => setToDoItem(e.target.value)}
          />
          {/* add button with icon and hover effects and transitions*/}
          <button
            type="button"
            title="Add"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
            onClick={handleAddToDo}
          >
            <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </div>
      </div>
    </>
  );
};

export default ToDoInput;
