import { useState } from "react";
import GoogleLogo from "../../assets/svg/GoogleLogo";
import IncognitoSVG from "../../assets/svg/incognitoSVG";
import ToDoImage from "../../assets/images/to-do-image.jpg";
import { Link, useNavigate } from "react-router-dom";
import { signIn, signInWithGoogle, signInAnonymouslyUser } from "../../firebase/auth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e: { preventDefault: () => void }) => {
    setLoading(true);
    e.preventDefault();
    signIn(email, password)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  };
  const handleSignInWithGoogle = () => {
    setLoading(true);
    signInWithGoogle()
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  };

  const handleSignInAnonymously = () => {
    setLoading(true);
    signInAnonymouslyUser()
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  };

  return (
    <>
      {/* component */}
      <div className="flex items-center justify-center h-screen login-component">
        <div className="flex bg-white rounded-lg shadow-2xl  overflow-hidden mx-auto max-w-sm lg:max-w-4xl w-full">
          <div
            className="hidden lg:block lg:w-1/2 bg-cover"
            style={{
              backgroundImage: `url(${ToDoImage})`,
            }}
          />
          <div className="w-full p-8 lg:w-1/2">
            <h2 className="text-2xl font-semibold text-gray-700 text-center">Taskify</h2>
            <p className="text-xl text-gray-600 text-center">Welcome back!</p>
            <div
              className="relative mt-4 rounded-lg shadow-md  hover:bg-gray-100 cursor-pointer"
              onClick={handleSignInWithGoogle}
            >
              <div className="px-4 py-3 absolute">
                <GoogleLogo />
              </div>
              <h1 className="py-3 text-center text-gray-600 font-bold">Login with Google</h1>
            </div>
            <div
              className="relative mt-4 rounded-lg shadow-md bg-gray-900 hover:bg-gray-800 cursor-pointer"
              onClick={handleSignInAnonymously}
            >
              <div className="px-4 py-3 absolute">
                <IncognitoSVG />
              </div>
              <h1 className="py-3 text-center text-white font-bold">Login as guest</h1>
            </div>
            <div className="mt-4 flex items-center justify-between">
              <span className="border-b w-1/5 lg:w-1/4" />
              <p className="text-xs text-center text-gray-500 uppercase">or SignIn with email</p>
              <span className="border-b w-1/5 lg:w-1/4" />
            </div>
            {/* for alert section using tailwindcss */}
            {error && (
              <div
                className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mt-4"
                role="alert"
              >
                <strong className="font-bold">Error! </strong>
                <span className="block sm:inline">{error}</span>
              </div>
            )}
            <form className="mt-4" onSubmit={handleSubmit}>
              <div className="mt-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">Email Address</label>
                <input
                  className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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
                />
              </div>
              {/* forgot password */}
              <div className="mt-2 text-right">
                <Link to="/forgot-password" className="text-xs text-gray-500  hover:text-gray-700">
                  Forgot Password?
                </Link>
              </div>
              {/* submit button */}
              <div className="mt-4">
                <button
                  type="submit"
                  className="bg-gray-700 text-white font-bold py-2 px-4 w-full rounded hover:bg-gray-600"
                  disabled={loading}
                >
                  SIGN IN
                </button>
              </div>
            </form>

            <div className="mt-4 flex items-center justify-between">
              <span className="border-b w-1/5 md:w-1/4" />
              <Link to="/signup" className="text-xs text-gray-500 uppercase">
                or SignUp
              </Link>

              <span className="border-b w-1/5 md:w-1/4" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
