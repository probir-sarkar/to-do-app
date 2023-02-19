import ListItem from "../list-items/list-items";
import { useState } from "react";
import { useSelector } from "react-redux";
import {
  selectToDoList,
  selectToDoListCompleted,
  selectToDoListUncompleted,
} from "../../redux/to-do/toDoSelector";
import { selectUserId } from "../../redux/user/userSelector";
import { useEffect } from "react";
import { toDoItemInterface, updateToDo } from "../../redux/to-do/toDoSlice";
import { getDatabase, ref, onValue } from "firebase/database";
import { updateFirebase } from "../../firebase/firebase";
import { useDispatch } from "react-redux";
const ToDoList = ({}) => {
  const toDoList = useSelector(selectToDoList);
  const uncompletedListItems = useSelector(selectToDoListUncompleted);
  const completedListItems = useSelector(selectToDoListCompleted);
  const userId = useSelector(selectUserId);
  const [dataUpdated, setDataUpdated] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const database = getDatabase();
    const toDoListRef = ref(database, `users/${userId}/ToDoList`);
    onValue(toDoListRef, (snapshot) => {
      const data = snapshot.val() || [];
      dispatch(updateToDo(data));
    });
    setDataUpdated(true);
  }, []);

  useEffect(() => {
    if (!dataUpdated) return;
    updateFirebase(toDoList, userId);
  }, [toDoList]);

  return (
    <div className="h-full overflow-y-auto">
      {/* to do title with style */}
      <h1 className="text-xl font-bold text-gray-700 my-4">To Do</h1>

      <ul>
        {uncompletedListItems.length === 0 ? (
          <li>
            <p className="text-gray-700">No items to do</p>
          </li>
        ) : (
          uncompletedListItems.map((item: toDoItemInterface) => (
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
