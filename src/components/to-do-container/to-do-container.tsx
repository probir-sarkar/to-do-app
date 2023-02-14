import { useState, useEffect, useRef } from "react";
import ToDoInput from "../to-do-input/to-do-input";
import ToDoList from "../to-do-list/to-do-list";
import "./to-do-container.css";

// for redux purposes
import { useSelector } from "react-redux";

import { selectToDoList } from "../../redux/to-do/toDoSelector";
import React from "react";

const ToDoContainer = () => {
  const [height, setHeight] = useState("0px");

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
    <div className="flex flex-col w-11/12 md:w-8/12 lg:w-6/12" style={{ height: height }}>
      <h1 className="text-3xl text-center font-bold my-4 height-5">To Do List</h1>
      <div className="h-5/6 overflow-auto ">
        <ToDoList />
      </div>
      <div className="pt-5 h-1/6 flex items-center">
        <ToDoInput />
      </div>
    </div>
  );
};

export default ToDoContainer;
