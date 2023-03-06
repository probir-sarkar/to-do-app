import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToDo } from "../../redux/to-do/toDoSlice";

const ToDoInput = () => {
  const [toDoItem, setToDoItem] = useState("");
  const dispatch = useDispatch();
  const handleAddToDo = () => {
    if (toDoItem === "") {
      return;
    }
    dispatch(addToDo(toDoItem));
    setToDoItem("");
  };

  return (
    <>
      <div className=" w-11/12 md:w-8/12 lg:w-6/12 mx-auto">
        <div className="bg-white rounded flex p-2 shadow-2xl border-2 border-gray-700 ">
          {/* input */}
          <input
            type="text"
            className=" px-4 py-2 w-full focus:outline-none"
            placeholder="Add a new task"
            value={toDoItem}
            onChange={(e) => setToDoItem(e.target.value)}
          />
          {/* add button with icon and hover effects and transitions*/}
          <button
            type="button"
            title="Add"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
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
