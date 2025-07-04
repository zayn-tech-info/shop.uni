import React, {useState} from "react";
import { ShoppingCartIcon } from "lucide-react";
import { Link } from "react-router-dom";
import Signup from "../components/Signup";
import Login from "../components/Login";

const AuthPage = () => {
  const [showSignup, setShowSignup] = useState(true);

  return (
    <>
      <div className="flex flex-col items-center justify-center md:my-10 my-5 text-black w-full mx-auto">
        <div>
          <div className="flex flex-col md:pl-0">
            <div className="flex gap-3 justify-center">
              <ShoppingCartIcon className="bg-primary rounded-md w-8 h-8 text-white p-1" />
              <p className="md:text-2xl text-base md:font-bold font-medium text-black">
                Welcome to{" "}
                <Link to="/">
                  <span className="font-medium text-primary">Shop.uni</span>
                </Link>
              </p>
            </div>
            <div className="flex items-center justify-center gap-2 transition-transform duration-300 md:my-5 my-3 bg-secondary text-base md:text-lg max-w-xl py-2 px-5 rounded-3xl mx-auto">
              <div
                className={`flex justify-center py-1 px-5 w-44 rounded-3xl font-medium  cursor-pointer ${
                  showSignup ? "bg-background text-primary" : ""
                }`}
                onClick={() => setShowSignup(true)}
              >
                <p>Login</p>
              </div>
              <div
                className={`py-1 px-5 w-44 rounded-3xl flex justify-center font-medium cursor-pointer ${
                  showSignup ? "" : "bg-background text-primary"
                }`}
                onClick={() => setShowSignup(false)}
              >
                <p>Sign Up</p>
              </div>
            </div>
          </div>
        </div>
        <div
          className="relative w-[500px] shadow-2xl overflow-hidden flex"
          style={{ transition: "all 0.3s" }}
        >
          <div
            className="flex transition-transform duration-300 w-[900px]"
            style={{
              transform: showSignup ? "translateX(0)" : "translateX(-445px)",
            }}
          >
            <div className="w-[500px] mx-10">
              <Login />
            </div>
            <div className="w-[500px] ">
              <Signup />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AuthPage;
