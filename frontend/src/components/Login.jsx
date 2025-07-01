import { ArrowRightIcon, Lock, Mail, User } from "lucide-react";
import Textfield from "../components/Textfield.jsx";
import React from "react";
import { Button, Checkbox, FormControlLabel, Link } from "@mui/material";

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
      <div className="md:px-5 px-5 w-full max-w-lg mx-auto py-3 shadow-2xl">
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

        <div>
          <div className="flex justify-between items-center mx-10">
            <FormControlLabel
              control={
                <Checkbox
                  defaultChecked
                  sx={{
                    color: "hsl(36, 94%, 50%)",
                    "&.Mui-checked": {
                      color: "hsl(36, 94%, 50%)",
                    },
                  }}
                />
              }
              sx={{
                color: "hsl(36, 94%, 0%)",
                "& .MuiFormControlLabel-label": {
                  // color: "hsl(36, 94%, 50%)",
                },
              }}
              label="Remember Me"
            />
            <Link
              href="#"
              underline="hover"
              sx={{
                color: "hsl(36, 94%, 50%)",
                ml: 2,
                fontWeight: 500,
              }}
            >
              {"Forgot Password?"}
            </Link>
          </div>
          <Button
            sx={{
              width: "100%",
              backgroundColor: "hsl(36 94% 50%)",
              padding: "10px",
              margin: "10px",
              textTransform: "capitalize",
              borderRadius: "5px"
            }}
            variant="contained"
          >
            Sign Up
            <ArrowRightIcon className="ml-3 w-5 h-5" />
          </Button>
        </div>
      </div>
    </>
  );
};

export default Login;
