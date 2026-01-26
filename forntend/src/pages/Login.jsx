import React, { useContext, useState } from "react";
import logo from "../assets/short_logo.png";
import { useNavigate } from "react-router-dom";
import google from "../assets/google.png";
import { IoMdEye } from "react-icons/io";
import { IoEyeOff } from "react-icons/io5";
import { authDataContext } from "../context/AuthContext";
import axios from "axios";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../../utils/Firebase";
import { userDataContext } from "../context/UserContext";

const Login = () => {
  let navigate = useNavigate();
  const [show, setshow] = useState(false);

  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");

  let { serverUrl } = useContext(authDataContext);
  let { getCurrentUser } = useContext(userDataContext);

  const handleLogin = async (e) => {
    e.preventDefault();
    // Add login logic here, e.g., API call to authenticate user

    // console.log("serverUrl:", serverUrl);
    try {
      let result = await axios.post(
        serverUrl + "/api/auth/login",
        {
          email,
          password,
        },
        { withCredentials: true },
      );

      (console.log("Login successful:", result.data),
        getCurrentUser(),
        navigate("/"));
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  const googlelogin = async () => {
    try {
      const response = await signInWithPopup(auth, provider);
      let user = response.user;
      let name = user.displayName;
      let email = user.email;

      const result = await axios.post(
        serverUrl + "/api/auth/googleLogin",
        { name, email },
        { withCredentials: true },
      );
      (console.log("Login successful:", result.data),
        getCurrentUser(),
        navigate("/"));
    } catch (error) {
      console.error("Google Signup failed:", error);
    }
  };

  return (
    <div className="w-full h-screen bg-linear-to-l from-[#141414] to-[#0c2025] text-white flex flex-col items-center justify-start">
      <div
        className="w-full h-20 flex items-center justify-start px-5  gap-2.5  cursor-pointer"
        onClick={() => navigate("/")}
      >
        <img className="w-10 h-15" src={logo} alt="" />
        <div className="flex-col">
          <h1 className="text-[25px] font-sans">LiveStockHub</h1>
          <h3 className="font-sans">Digital Cattle Marketplace</h3>
        </div>
      </div>
      <div className="w-full h-15 flex items-center justify-center flex-col gap-2.5 ">
        <span className="text-[25px] font-semibold ">Login Page</span>
        <span className="text-[16px]">
          Welcome to LiveStockHub, place your order
        </span>
      </div>
      <div className="max-w-150 w-[90%] h-110 bg-[#00000025] border-[#9696963] backdrop:-blur-2xl rounded-lg shadow-lg flex items-center justify-center">
        <form
          onSubmit={handleLogin}
          action=""
          className="w-[90%] h-[90%] flex flex-col items-center justify-start gap-4"
        >
          <div
            className="w-[90%] h-12 bg-[#42656cae] rounded-lg flex items-center justify-center gap-2.5 py-5 cursor-pointer"
            onClick={googlelogin}
          >
            <img src={google} alt="" className="w-5 rounded-full" />
            Login with Google
          </div>

          <div className="w-full h-5 flex items-center justify-center gap-2.5 ">
            <div className="w-[40%] h-px bg-[#96969635] "></div> OR
            <div className="w-[40%] h-px bg-[#96969635] "></div>
          </div>

          <div className="w-[90%] h-100 flex flex-col items-center justify-center gap-3 relative">
            <input
              type="text"
              className="w-full h-12 border-2 border-[#96969635] backdrop:-blur-sm rounded-lg shadow-lg px-5 bg-transparent placeholder-[#ffffffc7] font-semibold"
              placeholder="Email"
              required
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <input
              type={show ? "text" : "password"}
              className="w-full h-12 border-2 border-[#96969635] backdrop:-blur-sm rounded-lg shadow-lg px-5 bg-transparent placeholder-[#ffffffc7] font-semibold"
              placeholder="Password"
              required
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
            {show && (
              <IoMdEye
                className="w-5 h-5 absolute cursor-pointer right-[5%] bottom-[57%]"
                onClick={() => setshow((prev) => !prev)}
              />
            )}
            {!show && (
              <IoEyeOff
                className="w-5 h-5 absolute cursor-pointer right-[5%] bottom-[57%]"
                onClick={() => setshow((prev) => !prev)}
              />
            )}
            <button className="w-full h-12 bg-[#6060f5] rounded-lg flex items-center justify-center mt-5 text-[17px] font-semibold">
              Login
            </button>
            <p className="flex gap-2.5 ">
              You haven't any account
              <span
                className="text-[#5555f6cf] text-17px font-semibold cursor-pointer"
                onClick={() => navigate("/signup")}
              >
                create new account
              </span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
