import { ArrowRightIcon, Lock, Mail, User } from "lucide-react";
import Textfield from "./Textfield.jsx";
import React from "react";
import {
  Button,
  Checkbox,
  FormControlLabel,
  Link,
  Box,
  Typography,
} from "@mui/material";

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
    type: "password",
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
const Signup = () => {
  return (
    <>
      <div className="md:px-5 px-5 pl-10 w-full max-w-lg mx-auto py-3">
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
        <Box display="flex" alignItems="center">
          <Checkbox />
          <Typography variant="body2">
            I agree to the{" "}
            <Link href="#" underline="hover" color="warning.main">
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link href="#" underline="hover" color="warning.main">
              Privacy Policy
            </Link>
          </Typography>
        </Box>
        <Button
          sx={{
            width: "100%",
            backgroundColor: "hsl(36 94% 50%)",
            padding: "10px",
            margin: "10px",
            fontWeight: "600",
            fontSize: "1rem",
            textTransform: "capitalize",
            borderRadius: "5px",
          }}
          variant="contained"
        >
          Sign Up
          <ArrowRightIcon className="ml-3 w-5 h-5" />
        </Button>
        <div className="flex justify-center py-3">
          <p className="flex gap-2">
            Already have and accout?{" "}
            <Link href="#" underline="hover" color="warning.main">
              Sign in here
            </Link>{" "}
          </p>
        </div>
      </div>
    </>
  );
};

export default Signup;
