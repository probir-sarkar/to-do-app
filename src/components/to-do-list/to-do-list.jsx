import ListItems from "../list-items/list-items";
const ToDoList = ({ toDoList, setToDoList }) => {
  const deleteHandler = (id) => {
    setToDoList(toDoList.filter((el) => el.id !== id));
  };
  const completeHandler = (id, completed) => {
    setToDoList(
      toDoList.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            completed: !completed,
          };
        }
        return item;
      })
    );
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
              id={item.id}
              completed={item.completed}
              text={item.text}
              completeHandler={completeHandler}
              deleteHandler={deleteHandler}
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
              id={item.id}
              completed={item.completed}
              text={item.text}
              completeHandler={completeHandler}
              deleteHandler={deleteHandler}
            />
          ))
        )}
      </ul>
    </div>
  );
};
export default ToDoList;
