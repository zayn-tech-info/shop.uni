import React from "react";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import { Box } from "@mui/material";
import { useState } from "react";

const Textfield = ({ icon, placeholder, label }) => {
  const [focused, setFocused] = useState(false);
  return (
    <Box
      component="form"
      sx={{ "& > :not(style)": { m: 1, width: "100%" } }}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="outlined-basic"
        label={focused ? label : ""}
        variant="outlined"
        placeholder={placeholder}
        fullWidth
        sx={{
          borderRadius: "8px",
          backgroundColor: "#fff",
          boxShadow: "0 1px 4px rgba(0, 0, 0, 0.1)",
          "& .MuiInputBase-root": {
            py: "-1px",
          },
          "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "hsl(36, 94%, 50%)",
          },
          "& label.Mui-focused": {
            color: "hsl(36, 94%, 50%)",
          },
        }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">{icon}</InputAdornment>
          ),
        }}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
      />
    </Box>
  );
};

export default Textfield;
