import React from "react";
import theme from "./MuiThemeProvider";
import {
  Typography,
  Container,
  Grid,
  Box,
  Card,
  CardContent,
} from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { BookOpen, Laptop, Home, Shirt, Car, Coffee } from "lucide-react";

const Categories = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ py: 8 }}>
        <Container maxWidth="xl">
          <Box sx={{ textAlign: "center", mb: 6 }}>
            <Typography
              variant="h2"
              sx={{ fontSize: { xs: "2rem", sm: "2.5rem" }, color:"primary.main", mb: 2 }}
            >
              Popular Categories
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: "text.secondary",
                maxWidth: 600,
                mx: "auto",
                fontWeight: 400,
              }}
            >
              Find exactly what you need for campus life
            </Typography>
          </Box>

          <Grid
            container
            spacing={8}
            justifyContent="center"
            alignItems="center"
          >
            {[
              { icon: BookOpen, name: "Textbooks", count: "1,200+" },
              { icon: Laptop, name: "Electronics", count: "800+" },
              { icon: Home, name: "Furniture", count: "600+" },
              { icon: Shirt, name: "Clothing", count: "900+" },
              { icon: Car, name: "Transportation", count: "200+" },
              { icon: Coffee, name: "Lifestyle", count: "400+" },
            ].map((category, index) => {
              const IconComponent = category.icon;
              return (
                <Grid
                  item
                  xs={6}
                  md={4}
                  lg={2}
                  key={index}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <Box
                    sx={{
                      width: "100%",
                      maxWidth: 200,
                      minWidth: 200,
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <Card
                      sx={{
                        cursor: "pointer",
                        transition: "all 0.2s",
                        width: "100%",
                        minWidth: 200,
                        maxWidth: 200,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        "&:hover": {
                          boxShadow:
                            "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
                          "& .category-icon": {
                            transform: "scale(1.1)",
                          },
                        },
                      }}
                    >
                      <CardContent
                        sx={{
                          textAlign: "center",
                          py: 4,
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <IconComponent
                          size={32}
                          color={theme.palette.primary.main}
                          className="category-icon"
                          style={{
                            marginBottom: 16,
                            transition: "transform 0.2s",
                          }}
                        />
                        <Typography
                          variant="h6"
                          sx={{ fontWeight: 600, mb: 1 }}
                        >
                          {category.name}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{ color: "text.secondary" }}
                        >
                          {category.count}
                        </Typography>
                      </CardContent>
                    </Card>
                  </Box>
                </Grid>
              );
            })}
          </Grid>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default Categories;
