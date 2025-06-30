import React from "react";
import { ShoppingCartIcon } from "lucide-react";
import { Link } from "react-router-dom";
import Login from "../components/Login";

const AuthPage = () => {
  return (
    <>
      <div className="flex items-center justify-center md:my-10 my-5 text-black">
        <div className="w-full max-w-2xl mx-auto">
          <div>
            <div className="flex flex-col">
              <div className="flex gap-3 justify-center">
                <ShoppingCartIcon className="bg-primary rounded-md w-8 h-8 text-white p-1" />
                <p className="md:text-2xl text-base md:font-bold font-medium text-black">
                  Welcome to{" "}
                  <Link to="/">
                    <span className="font-medium text-primary">Shop.uni</span>
                  </Link>
                </p>
              </div>
              <div className="flex items-center justify-center gap-2 md:my-5 my-3 bg-secondary text-base md:text-lg max-w-xl py-2 px-5 rounded-3xl mx-auto">
                <div className="bg-background flex justify-center py-1 px-5 w-44 rounded-2xl font-medium text-primary cursor-pointer shadow-xl">
                  <p>Login</p>
                </div>
                <div className="py-1 px-5 w-44 rounded-xl flex justify-center font-medium cursor-pointer">
                  <p>Sign Up</p>
                </div>
              </div>
            </div>
            <Login />
          </div>
        </div>
      </div>
    </>
  );
};

export default AuthPage;
