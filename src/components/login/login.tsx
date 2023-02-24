import { useState } from "react";
import GoogleLogo from "../../assets/svg/GoogleLogo";
import { auth } from "../../firebase/auth";
import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e: { preventDefault: () => void }) => {
    setLoading(true);
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        setError("");
        navigate("/");
        return;
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  };
  const handleSignInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        setError("");
        navigate("/");
        return;
      })
      .catch((error) => {
        setError(error.message);
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
                'url("https://images.unsplash.com/photo-1546514714-df0ccc50d7bf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80")',
            }}
          />
          <div className="w-full p-8 lg:w-1/2">
            <h2 className="text-2xl font-semibold text-gray-700 text-center">Brand</h2>
            <p className="text-xl text-gray-600 text-center">Welcome back!</p>
            <div className="flex items-center justify-center mt-4 text-white rounded-lg shadow-md hover:bg-gray-100">
              <div className="px-4 py-3">
                <GoogleLogo />
              </div>
              <h1 className="px-4 py-3 w-5/6 text-center text-gray-600 font-bold">
                <button onClick={handleSignInWithGoogle}>Login with Google</button>
              </h1>
            </div>
            <div className="mt-4 flex items-center justify-between">
              <span className="border-b w-1/5 lg:w-1/4" />
              <a href="#" className="text-xs text-center text-gray-500 uppercase">
                or SignIn with email
              </a>
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
              <div className="mt-8">
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
              <a href="#" className="text-xs text-gray-500 uppercase">
                or <Link to="/signup">SignUp</Link>
              </a>
              <span className="border-b w-1/5 md:w-1/4" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
