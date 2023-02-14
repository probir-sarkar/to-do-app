import React from "react";
import ListItem from "../list-items/list-items";

// for redux purposes
import { useSelector } from "react-redux";
import { selectToDoList } from "../../redux/to-do/toDoSelector";
import { useEffect } from "react";
import { RootState } from "../../redux/store";
import { toDoItemInterface } from "../../redux/to-do/toDoSlice";
import { updateFirebase } from "../../firebase/firebase";

const ToDoList = ({}) => {
  const toDoList: RootState["toDoList"] = useSelector(selectToDoList);
  const toDoListItems = toDoList.filter((el) => el.completed === false);
  const completedListItems = toDoList.filter((el) => el.completed === true);

  useEffect(() => {
    console.log("toDoList", toDoList);

    if (toDoList.length === 0) return;
    updateFirebase(toDoList);
  }, [toDoList]);

  return (
    <div className="h-full overflow-y-auto">
      {/* to do title with style */}
      <h1 className="text-xl font-bold text-gray-700 my-4">To Do</h1>
      <ul>
        {toDoListItems.length === 0 ? (
          <li>
            <p className="text-gray-700">No items to do</p>
          </li>
        ) : (
          toDoListItems.map((item: toDoItemInterface) => (
            <li key={item.id}>
              <ListItem item={item} />
            </li>
          ))
        )}
      </ul>
      {/* Completed Task */}
      <h1 className="text-xl font-bold text-gray-700 my-4">Completed Task</h1>
      <ul>
        {completedListItems.length === 0 ? (
          <li>
            <p className="text-gray-700">No items completed</p>
          </li>
        ) : (
          completedListItems.map((item: toDoItemInterface) => (
            <li key={item.id}>
              <ListItem item={item} />
            </li>
          ))
        )}
      </ul>
    </div>
  );
};
export default ToDoList;
