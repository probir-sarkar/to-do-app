import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToDo } from "../../redux/to-do/toDoSlice";

const ToDoInput = ({ className, setToDoList }) => {
  const [toDoItem, setToDoItem] = useState("");
  const dispatch = useDispatch();
  // This function is called when the user clicks the "Add" button

  const handleAddToDo = () => {
    // If the user has not entered anything, do nothing
    if (toDoItem === "") {
      return;
    }

    dispatch(addToDo(toDoItem));
    setToDoItem("");
  };
  return (
    <div className={`relative flex justify-center items-center ${className}`}>
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
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
          onClick={handleAddToDo}
        >
          <FontAwesomeIcon icon={faArrowRight} />
        </button>
      </div>
    </div>
  );
};

export default ToDoInput;
