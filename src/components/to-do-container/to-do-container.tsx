import ToDoInput from "../to-do-input/to-do-input";
import ToDoList from "../to-do-list/to-do-list";
import "./to-do-container.css";
import { auth } from "../../firebase/auth";
import { signOut } from "firebase/auth";
import { useDispatch } from "react-redux";
import { setUser } from "../../redux/user/userSlice";

const ToDoContainer = () => {
  const dispatch = useDispatch();
  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        dispatch(setUser({ email: "", uid: "" }));
        console.log("User signed out");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      <div className="flex flex-col w-11/12 md:w-8/12 lg:w-6/12 mx-auto">
        <h1 className="text-3xl text-center font-bold my-4 height-5">To Do List</h1>
        {/* logout button */}
        <button className="bg-red-500 text-white px-4 py-2 rounded-md" onClick={handleLogout}>
          Logout
        </button>
        <div className="h-5/6 overflow-auto ">
          <ToDoList />
        </div>
      </div>
      <div className="mx-auto fixed bottom-0 py-5 bg-inherit w-full">
        <ToDoInput />
      </div>
    </>
  );
};

export default ToDoContainer;
