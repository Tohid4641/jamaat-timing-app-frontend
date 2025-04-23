import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/constants";
import axios from "axios";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [newPassword, setPassword] = useState("");
  const [oldPassword, setConfirmpass] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [toastMessage, setToastMessage] = useState(""); // State for toast message
  const [toastStatus, setToastStatus] = useState(""); // State for toast message
  const [showToast, setShowToast] = useState(false); // State to control toast visibility
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.patch(
        `${BASE_URL}/api/auth/forgot-password`,
        {
          email: email,
          newPassword: newPassword,
          oldPassword: oldPassword,
        },
        { withCredentials: true }
      );
      console.log(res);

      // Show success toast
      setToastStatus("success");
      setToastMessage("Password updated successfully!");
      setShowToast(true);

      // Hide toast after 3 seconds
      setTimeout(() => {
        setShowToast(false);
        navigate("/signin");
      }, 3000);
    } catch (error) {
      // Show error toast
      setToastStatus("error");
      setToastMessage(error?.response?.data?.message || "Something went wrong!");
      setShowToast(true);

      // Hide toast after 3 seconds
      setTimeout(() => {
        setShowToast(false);
      }, 3000);
    }
  };

  return (
    <section
      id="forgotpassword"
      className="h-screen-minus-navbar bg-slate-300 flex items-center justify-center"
    >
      <form
        onSubmit={handleSubmit}
        className="px-12 py-16 sencond-bg-color rounded-md drop-shadow-lg"
      >
        <h1 className="text-white font-bold text-xl text-center">
          Forgot Password
        </h1>
        <input
          type="email"
          required
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="w-full block p-2 my-4 rounded-md drop-shadow-md focus:outline-none"
        />
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            required
            name="newPassword"
            value={newPassword}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="New Password"
            className="w-full block p-2 my-4 rounded-md drop-shadow-md focus:outline-none"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-3 text-sm text-gray-500"
          >
            {showPassword ? "Hide" : "Show"}
          </button>
        </div>
        <input
          type={showPassword ? "text" : "password"}
          required
          name="oldPassword"
          value={oldPassword}
          onChange={(e) => setConfirmpass(e.target.value)}
          placeholder="Old Password"
          className="w-full block p-2 my-4 rounded-md drop-shadow-md focus:outline-none"
        />
        <input
          type="submit"
          value="Submit"
          className="p-2 border first-bg-color hover:bg-blue-500 w-full text-white font-bold py-2 px-4 rounded focus:ring-1 drop-shadow-lg"
        />
      </form>

      {/* Toast */}
      {showToast && (
        <div className="toast toast-bottom toast-right">
          <div className={`alert alert-${toastStatus}`}>
            <span>{toastMessage}</span>
          </div>
        </div>
      )}
    </section>
  );
};

export default ForgotPassword;