import "./App.css";
import ToDoContainer from "./components/to-do-container/to-do-container";
import "./firebase/firebase";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./components/login/login";
import { useState, useEffect } from "react";
import Signup from "./components/signup/signup";
import PrivateRoute from "./utils/private-route";

const BrowserRouter = createBrowserRouter([
  { path: "/", element: <PrivateRoute component={ToDoContainer} /> },
  { path: "/login", element: <Login /> },
  { path: "/signup", element: <Signup /> },
]);

function App() {
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
    <div className="">
      <div>
        <RouterProvider router={BrowserRouter} />
      </div>
    </div>
  );
}

export default App;
