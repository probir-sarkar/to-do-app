import React, { useState } from "react";
import GoogleLogo from "../../assets/svg/GoogleLogo";
import { Link, useNavigate } from "react-router-dom";
import { createUser, signInWithGoogle } from "../../firebase/auth";
import Alert from "../Alert";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false); // [false, (value: boolean) => void
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e: { preventDefault: () => void }) => {
    setLoading(true);
    e.preventDefault();
    switch (true) {
      case !email:
        setMessage("Email is required");
        setIsError(true);
        setLoading(false);
        return;
      case !password:
        setMessage("Password is required");
        setIsError(true);
        setLoading(false);
        return;
      case password !== passwordConfirm:
        setMessage("Password does not match");
        setIsError(true);
        setLoading(false);
        return;
      default:
        break;
    }
    createUser(email, password)
      .then(() => {
        setIsError(false);
        setMessage("Account created. Please confirm your email and login");
      })
      .catch((error) => {
        setMessage(error.message);
        setIsError(true);
        setLoading(false);
      });
  };
  const handleSignUpWithGoogle = () => {
    signInWithGoogle()
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        setMessage(error.message);
        setLoading(false);
      });
  };

  return (
    <>
      {/* component */}
      <div className="py-6">
        <div className="flex bg-white rounded-lg shadow-lg overflow-hidden mx-auto max-w-sm lg:max-w-4xl">
          <div
            className="hidden lg:block lg:w-1/2 bg-cover"
            style={{
              backgroundImage:
                'url("https://images.unsplash.com/photo-1593238350103-81a14cce9c54?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=60")',
            }}
          />
          <div className="w-full p-8 lg:w-1/2">
            <h2 className="text-2xl font-semibold text-gray-700 text-center">Taskify</h2>
            <p className="text-xl text-gray-600 text-center">Welcome back!</p>
            <div
              className="relative mt-4 rounded-lg shadow-md hover:bg-gray-100 cursor-pointer"
              onClick={handleSignUpWithGoogle}
            >
              <div className="px-4 py-3 absolute">
                <GoogleLogo />
              </div>
              <h1 className="py-3 text-center text-gray-600 font-bold">Sign Up with Google</h1>
            </div>
            <div className="mt-4 flex items-center justify-between">
              <span className="border-b w-1/5 lg:w-1/4" />
              <p className="text-xs text-center text-gray-500 uppercase">or signup with email</p>
              <span className="border-b w-1/5 lg:w-1/4" />
            </div>
            {/* for alert section using tailwindcss */}
            {message && <Alert error={isError} message={message} />}
            <form className="mt-4" onSubmit={handleSubmit}>
              <div className="mt-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">Email Address</label>
                <input
                  className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="mt-4">
                <div className="flex justify-between">
                  <label className="block text-gray-700 text-sm font-bold mb-2">Password</label>
                </div>
                <input
                  className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <div className="mt-4">
                <div className="flex justify-between">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Confirm Password
                  </label>
                </div>
                <input
                  className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                  type="password"
                  value={passwordConfirm}
                  onChange={(e) => setPasswordConfirm(e.target.value)}
                  required
                />
              </div>
              <div className="mt-8">
                <button
                  type="submit"
                  className="bg-gray-700 text-white font-bold py-2 px-4 w-full rounded hover:bg-gray-600"
                  disabled={loading}
                >
                  SIGNUP
                </button>
              </div>
            </form>

            <div className="mt-4 flex items-center justify-between">
              <span className="border-b w-1/5 md:w-1/4" />
              <a href="#" className="text-xs text-gray-500 uppercase">
                or <Link to="/login">LogIn</Link>
              </a>
              <span className="border-b w-1/5 md:w-1/4" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
