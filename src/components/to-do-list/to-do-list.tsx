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
    <div className="h-full overflow-y-auto mb-20">
      {uncompletedListItems.length !== 0 && (
        <>
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 border-b-2 md:border-0 border-gray-900 py-2 my-4 ">
            To Do
          </h2>
          {uncompletedListItems.map((item: toDoItemInterface) => (
            <ul>
              <li key={item.id}>
                <ListItem item={item} />
              </li>
            </ul>
          ))}
        </>
      )}

      {/* Completed Task */}

      {completedListItems.length !== 0 && (
        <>
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 border-b-2 md:border-0 border-gray-900 py-2 my-8">
            Completed Task
          </h2>
          {completedListItems.map((item: toDoItemInterface) => (
            <ul>
              <li key={item.id}>
                <ListItem item={item} />
              </li>
            </ul>
          ))}
        </>
      )}
    </div>
  );
};

export default ToDoList;
