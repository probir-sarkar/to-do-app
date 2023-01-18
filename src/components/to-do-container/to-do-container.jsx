import { useState, useEffect, useRef } from "react";
import ToDoInput from "../to-do-input/to-do-input";
import ToDoList from "../to-do-list/to-do-list";
import "./to-do-container.css";

const ToDoContainer = () => {
  const [toDoList, setToDoList] = useState([]);
  const [toDoItem, setToDoItem] = useState("");
  const initialRender = useRef(true);
  const [height, setHeight] = useState("0px");
  // retrieve the list of to do items from local storage
  useEffect(() => {
    const localToDoList = JSON.parse(localStorage.getItem("toDoList"));
    if (localToDoList) setToDoList(localToDoList);
    else {
      setToDoList([
        {
          id: 1,
          text: "Learn React",
          completed: false,
        },
        {
          id: 2,
          text: "Learn JavaScript",
          completed: false,
        },
        {
          id: 3,
          text: "Learn CSS",
          completed: true,
        },
        {
          id: 4,
          text: "Learn HTML",
          completed: true,
        },
        {
          id: 5,
          text: "Learn Node",
          completed: false,
        },
      ]);
    }
  }, []);

  // store the list of to do items in local storage
  useEffect(() => {
    if (initialRender.current) {
      initialRender.current = false;
      return;
    }
    localStorage.setItem("toDoList", JSON.stringify(toDoList));
  }, [toDoList]);

  // Change the height of the container when resizing the window
  useEffect(() => {
    const handleResize = () => {
      setHeight(`${window.innerHeight}px`);
      return;
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div
      className="flex flex-col w-11/12 md:w-8/12 lg:w-6/12"
      style={{ height: height }}
    >
      <h1 className="text-3xl text-center font-bold my-4 height-5">
        To Do List
      </h1>
      <div className="h-5/6 overflow-auto ">
        <ToDoList toDoList={toDoList} setToDoList={setToDoList} />
      </div>
      <div className="pt-5 h-1/6 flex items-center">
        <ToDoInput
          toDoItem={toDoItem}
          setToDoItem={setToDoItem}
          toDoList={toDoList}
          setToDoList={setToDoList}
          className="w-full"
        />
      </div>
    </div>
  );
};

export default ToDoContainer;
