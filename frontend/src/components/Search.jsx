import React from "react";
import { Button, Container, Box, TextField } from "@mui/material";
import { Search } from "lucide-react";

const SearchComponent = () => {
  return (
    <>
      <Box
        sx={{
          py: 6,
          backgroundColor: "white",
          borderTop: 1,
          borderBottom: 1,
          borderColor: "divider",
        }}
      >
        <Container maxWidth="md">
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              gap: 1,
            }}
          >
            <TextField
              fullWidth
              placeholder="Search for textbooks, electronics, furniture..."
              InputProps={{
                startAdornment: (
                  <Search
                    size={20}
                    style={{ marginRight: 8, color: "#f5940b" }}
                  />
                ),
                sx: { height: 48 },
              }}
              sx={{
                flexGrow: 1,
                "& .MuiOutlinedInput-root": {
                  "&:hover fieldset": {
                    borderColor: "#f5940b",
                  },
                },
              }}
            />
            <Button
              variant="contained"
              size="large"
              sx={{
                height: 48,
                px: 4,
                minWidth: { xs: "auto", sm: 120 },
                fontWeight: "600",
                backgroundColor: "#f5940b",
              }}
            >
              Search
            </Button>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default SearchComponent;
