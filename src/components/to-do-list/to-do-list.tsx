import ListItems from "../list-items/list-items";

// for redux purposes
import { useSelector, useDispatch } from "react-redux";
import { removeToDo } from "../../redux/to-do/toDoSlice";

const ToDoList = ({ setToDoList }) => {
  const dispatch = useDispatch();
  const toDoList = useSelector((state) => state.toDoList);

  const deleteHandler = (id: any) => {
    dispatch(removeToDo(id));
  };

  const toDoListItems = toDoList.filter((el) => el.completed === false);
  const completedListItems = toDoList.filter((el) => el.completed === true);

  return (
    <div className="h-full overflow-y-auto">
      {/* to do title with style */}
      <h1 className="text-xl font-bold text-gray-700 my-4">To Do</h1>
      <ul>
        {toDoListItems.length === 0 ? (
          <p className="text-gray-700">No items to do</p>
        ) : (
          toDoListItems.map((item) => (
            <ListItems
              key={item.id}
              item={item}
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
          completedListItems.map((item) => (
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
