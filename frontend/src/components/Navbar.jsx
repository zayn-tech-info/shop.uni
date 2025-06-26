import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Box,
  Link,
} from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { ShoppingCart } from "lucide-react";

const theme = createTheme({
  palette: {
    primary: { main: "#f5940b" },
    secondary: { main: "#64748b" },
    background: { default: "#ffffff" },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: { fontWeight: 700 },
    h2: { fontWeight: 700 },
    h3: { fontWeight: 600 },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          borderRadius: 8,
          fontWeight: 500,
        },
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          position="sticky"
          sx={{
            backgroundColor: "rgba(255, 255, 255, 0.95)",
            backdropFilter: "blur(10px)",
            boxShadow: "0 1px 3px 0 rgb(0 0 0 / 0.1)",
          }}
        >
          <Container maxWidth="xl">
            <Toolbar sx={{ justifyContent: "space-between", py: 1 }}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <Box
                  sx={{
                    width: 32,
                    height: 32,
                    backgroundColor: "#f5940b",
                    borderRadius: 1,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <ShoppingCart size={20} color="white" />
                </Box>
                <Typography
                  variant="h6"
                  component="div"
                  sx={{ fontWeight: 700, color: "text.primary" }}
                >
                  Shop.uni
                </Typography>
              </Box>

              <Box sx={{ display: { xs: "none", md: "flex" }, gap: 3 }}>
                <Link
                  href="#"
                  sx={{
                    color: "text.primary",
                    textDecoration: "none",
                    fontSize: "0.875rem",
                    fontWeight: 500,
                    "&:hover": { color: "primary.main" },
                  }}
                >
                  Browse
                </Link>
                <Link
                  href="#"
                  sx={{
                    color: "text.primary",
                    textDecoration: "none",
                    fontSize: "0.875rem",
                    fontWeight: 500,
                    "&:hover": { color: "primary.main" },
                  }}
                >
                  Sell
                </Link>
                <Link
                  href="#"
                  sx={{
                    color: "text.primary",
                    textDecoration: "none",
                    fontSize: "0.875rem",
                    fontWeight: 500,
                    "&:hover": { color: "primary.main" },
                  }}
                >
                  How it Works
                </Link>
                <Link
                  href="#"
                  sx={{
                    color: "text.primary",
                    textDecoration: "none",
                    fontSize: "0.875rem",
                    fontWeight: 500,
                    "&:hover": { color: "primary.main" },
                  }}
                >
                  Safety
                </Link>
              </Box>

              <Box sx={{ display: "flex", gap: 1 }}>
                <Button
                  variant="text"
                  size="small"
                  sx={{ color: "text.primary" }}
                >
                  Sign In
                </Button>
                <Button
                  variant="contained"
                  size="small"
                  sx={{
                    backgroundColor: "#f5940b",
                    color: "#ffff",
                    "&:hover": { backgroundColor: "#c2820c9" },
                  }}
                >
                  Get Started
                </Button>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </Box>
    </ThemeProvider>
  );
}

export default App;
