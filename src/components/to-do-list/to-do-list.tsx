import React from "react";
import ListItems from "../list-items/list-items";

// for redux purposes
import { useSelector, useDispatch } from "react-redux";
import { selectToDoList } from "../../redux/to-do/toDoSelector";

import { RootState,toDoItem } from "../../redux/store";

const ToDoList = ({ }) => {
const toDoList: RootState["toDoList"]  = useSelector(selectToDoList);

 const toDoListItems  = toDoList.filter((el) => el.completed === false);
 const completedListItems = toDoList.filter((el) => el.completed === true);

  return (
    <div className="h-full overflow-y-auto">
      {/* to do title with style */}
      <h1 className="text-xl font-bold text-gray-700 my-4">To Do</h1>
      <ul>
        {toDoListItems.length === 0 ? (
          <p className="text-gray-700">No items to do</p>
        ) : (
          toDoListItems.map((item:toDoItem) => (
            <ListItems
              key={item.id}
              item ={item}
            />
          ))
        )}
      </ul>
      {/* Completed Task */}
      <h1 className="text-xl font-bold text-gray-700 my-4">Completed Task</h1>
      <ul>
        {completedListItems.length === 0 ? (
          <p className="text-gray-700">No items completed</p>
        ) : (
          completedListItems.map((item: { id: any; completed?: boolean; text?: string; }) => (
            <ListItems
              key={item.id}
             item={item}
            />
          ))
        )}
      </ul>
    </div>
  );
};
export default ToDoList;
