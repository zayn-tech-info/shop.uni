import { Lock, Mail, User } from "lucide-react";
import Textfield from "../components/Textfield.jsx";
import React from "react";

const LoginInfo = [
  {
    id: 1,
    nametype: "Full Name",
    icon: User,
    placeholder: "Enter your full name",
    type: "text",
    label: "Full Name",
  },
  {
    id: 2,
    nametype: "Email",
    icon: Mail,
    placeholder: "Enter your email",
    type: "email",
    label: "Email",
  },
  {
    id: 3,
    nametype: "Password",
    icon: Lock,
    placeholder: "Enter your password",
    type: "Password",
    label: "Password",
  },
  {
    id: 5,
    nametype: "Confirm Password",
    icon: Lock,
    placeholder: "Enter your password again",
    type: "password",
    label: "Confim password",
  },
];
const Login = () => {
  return (
    <>
      <div className="md:px-5 px-5 w-full max-w-lg mx-auto shadow-2xl">
        <p className="text-3xl font-medium">Create Account</p>
        <p className="text-base text-gray-500 py-2">
          Buy and sell with fellow students safely.
        </p>

        <div>
          <div>
            {LoginInfo.map((info) => (
              <div key={info.id} className="mb-4">
                <p className="my-2 mx-2">{info.nametype}</p>
                <Textfield
                  placeholder={info.placeholder}
                  icon={React.createElement(info.icon)}
                  type={info.type}
                  label={info.label}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
