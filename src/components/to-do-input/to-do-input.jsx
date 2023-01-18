import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faArrowRight } from "@fortawesome/free-solid-svg-icons";
const ToDoInput = ({
  className,
  toDoItem,
  setToDoItem,
  toDoList,
  setToDoList,
}) => {
  // This function is called when the user clicks the "Add" button
  const handleAddToDo = () => {
    // If the user has not entered anything, do nothing
    if (toDoItem === "") {
      return;
    }
    // Add the new item to the list
    setToDoList([
      ...toDoList,
      {
        id: toDoList.length,
        text: toDoItem,
        completed: false,
      },
    ]);
    // Clear the input field
    setToDoItem("");
    console.log(toDoList);
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
