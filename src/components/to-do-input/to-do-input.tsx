import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToDo } from "../../redux/to-do/toDoSlice";

const ToDoInput = () => {
  const [toDoItem, setToDoItem] = useState("");
  const dispatch = useDispatch();
  const handleAddToDo = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    if (toDoItem === "") {
      return;
    }
    dispatch(addToDo(toDoItem));
    setToDoItem("");
  };

  return (
    <>
      <div className=" w-11/12 md:w-8/12 lg:w-6/12 mx-auto">
        <form className="bg-gray-600 rounded-lg flex p-2 shadow-2xl " onSubmit={handleAddToDo}>
          {/* input */}
          <input
            type="text"
            className="bg-gray-600 text-white  px-4 py-1 w-full focus:outline-none"
            placeholder="Add a new task"
            value={toDoItem}
            onChange={(e) => setToDoItem(e.target.value)}
          />
          {/* add button with icon and hover effects and transitions*/}
          <button type="submit" title="Add" className=" text-white py-2 px-6">
            <FontAwesomeIcon icon={faArrowRight} size="lg" />
          </button>
        </form>
      </div>
    </>
  );
};

export default ToDoInput;
