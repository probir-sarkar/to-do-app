import { useState } from "react";
import GoogleLogo from "../assets/svg/GoogleLogo";
import { Link, useNavigate } from "react-router-dom";
import { resetPassword } from "../firebase/auth";
import ForgotPasswordImg from "../assets/images/7070629_3293465.jpg";
import Alert from "./Alert";
const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState(true);

  const handleSubmit = (e: { preventDefault: () => void }) => {
    setLoading(true);
    e.preventDefault();
    if (!email) {
      setMessage("Email is required");
      setIsError(true);
      setLoading(false);
      return;
    }
    resetPassword(email)
      .then(() => {
        setMessage("Password reset link sent to your email");
        setIsError(false);
        setLoading(false);
      })
      .catch((error) => {
        setMessage(error.message);
        setIsError(true);
        setLoading(false);
      });
  };
  return (
    <>
      {/* component */}
      <div className="flex items-center justify-center h-screen">
        <div className="flex bg-white rounded-lg shadow-lg overflow-hidden mx-auto max-w-sm lg:max-w-4xl w-full">
          <div
            className="hidden lg:block lg:w-1/2 bg-cover"
            style={{
              backgroundImage:
                'url("https://images.unsplash.com/photo-1546514714-df0ccc50d7bf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80")',
            }}
          />
          <div className="w-half p-8 lg:w-1/2">
            {/* image */}
            <div className="w-3/4 mx-auto ">
              <img src={ForgotPasswordImg} alt="forgot password" />
            </div>

            <div className="mt-4">
              <h2 className="text-4xl text-center font-bold text-gray-700">Forgot Password?</h2>
              {/* p tag and information about forgot password */}
              <p className="mt-2 text-gray-600 text-center">
                Enter your email address and we will send you a link to reset your password.
              </p>
            </div>

            {/* for alert section using tailwindcss */}
            {message && <Alert error={isError} message={message} />}
            <form className="mt-4" onSubmit={handleSubmit}>
              <div className="mt-4">
                {/* <label className="block text-gray-700 text-sm font-bold mb-2">Email Address</label> */}
                <input
                  className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                  type="email"
                  placeholder="Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              {/* submit button */}
              <div className="mt-4">
                <button
                  type="submit"
                  className="bg-gray-700 text-white font-bold py-2 px-4 w-full rounded hover:bg-gray-600"
                  disabled={loading}
                >
                  RESET PASSWORD
                </button>
              </div>
            </form>

            <div className="mt-4 flex items-center justify-between">
              <span className="border-b w-1/5 md:w-1/4" />
              <Link to="/login" className="text-xs text-gray-500 uppercase">
                or Login
              </Link>

              <span className="border-b w-1/5 md:w-1/4" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;
