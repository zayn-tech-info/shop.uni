import React from "react";
import theme from "./MuiThemeProvider";
import {
  Typography,
  Container,
  Grid,
  Box,
  Card,
  CardContent,
  CssBaseline,
} from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import {
  Shield,
  Clock,
  Users,
  MapPin,
  MessageCircle,
  CreditCard,
} from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Student Verified",
    description:
      "Only verified students from your campus can join, ensuring a safe and trusted community.",
  },
  {
    icon: MapPin,
    title: "Campus Pickup",
    description:
      "Meet on campus for convenient and safe exchanges. No shipping hassles or fees.",
  },
  {
    icon: MessageCircle,
    title: "Direct Chat",
    description:
      "Message sellers directly through our secure chat system to ask questions and negotiate.",
  },
  {
    icon: CreditCard,
    title: "Student Prices",
    description:
      "Get better deals from fellow students who understand the budget constraints.",
  },
  {
    icon: Clock,
    title: "Quick Listings",
    description:
      "List items in under 2 minutes with our streamlined posting process.",
  },
  {
    icon: Users,
    title: "Community Driven",
    description:
      "Built by students, for students. Rate and review to build trust in the community.",
  },
];

const Features = () => {
  return (
        <ThemeProvider theme={theme}> 
          <CssBaseline />
          <Box sx={{ py: 8, backgroundColor: "#f8fafc" }}>
            <Container maxWidth="lg">
              <Box sx={{ textAlign: "center", mb: 6 }}>
                <Typography
                  variant="h2"
                  sx={{ fontSize: { xs: "2rem", sm: "2.5rem" }, color:"primary.main", mb: 2 }}
                >
                  Why Shop.uni?
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
                  Built specifically for the campus community with features that
                  matter to students
                </Typography>
              </Box>

    <div className="container md:grid grid-cols-3 gap-10">
      {features.map((feature, index) => {
        const IconComponent = feature.icon;

        return (
          <div className="my-5" key={index}>
            <div className="flex h-60 w-full items-center flex-col justify-between rounded-xl shadow bg-white transition duration-300 hover:shadow-lg hover:-translate-y-1">
              <div className="p-6">
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                  <IconComponent size={24} color="#f5940b" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-500 leading-relaxed text-sm">
                  {feature.description}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
            </Container>
          </Box>
        </ThemeProvider>


  );
};

export default Features;
