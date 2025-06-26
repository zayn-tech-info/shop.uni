import { Box, Button, Grid, Paper, Typography } from "@mui/material";
import { ArrowRight, Book, MapPin, Star, Verified } from "lucide-react";
import React from "react";

const Herosection = () => {
  return (
    <div className="container mt-10">
      <div className="lg:grid grid-cols-2 space-y-10">
        <div className="space-y-5">
          <div className="flex items-center gap-2 font-medium">
            <Book className="text-[#f5940b]" />
            <p>Built for student</p>
          </div>
          <div className="space-y-3">
            <p className="md:text-5xl text-3xl font-extrabold text-[#f5940b] ">
              Your Campus Market Place
            </p>
            <p className="text-gray-500 md:text-lg text-base">
              Buy and sell with fellow students safely. From textbooks to
              furniture, find everything you need for campus life at
              student-friendly prices.
            </p>
          </div>
          <div className="flex gap-5 md:text-xl">
            <Button
              variant="contained"
              size="small"
              sx={{
                backgroundColor: "#f5940b",
                color: "#ffff",
                //padding: "10px 15px",
                borderRadius: "10px",
                textTransform: "capitalize",
                //fontSize: "1rem",
                fontWeight: "600",
              }}
            >
              Start Shopping
              <ArrowRight />
            </Button>
            <Button
              variant="contained"
              size="small"
              sx={{
                backgroundColor: "#fff",
                color: "#f5940b",
            //     padding: "10px 15px",
                borderRadius: "10px",
                textTransform: "capitalize",
            //     fontSize: "1rem",
                fontWeight: "600",
                border: "1px solid #f5940b",
              }}
            >
              Become a Vendor
              <ArrowRight />
            </Button>
          </div>
          <div className="flex gap-5 items-center">
            <div className="flex items-center gap-2 text-gray-600">
              <Verified />
              <p>Verified Vendors</p>
            </div>
            <div className="flex item-center gap-2 text-gray-600">
              <MapPin />
              <p>Campus Pickup</p>
            </div>
          </div>
        </div>

        <Grid
          item
          xs={12}
          lg={5}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <Box sx={{ position: "relative" }}>
            <Box
              component="img"
              src="https://kzmojv0sg43ino5czr6t.lite.vusercontent.net/placeholder.svg?height=400&width=400"
              alt="Students using campus marketplace"
              sx={{
                width: 400,
                height: 400,
                borderRadius: 3,
                boxShadow: "0 25px 50px -12px rgb(0 0 0 / 0.25)",
              }}
            />
            <Paper
              sx={{
                position: "absolute",
                bottom: -16,
                left: -16,
                p: 2,
                borderRadius: 2,
                boxShadow: "0 10px 15px -3px rgb(0 0 0 / 0.1)",
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <Box
                  sx={{
                    width: 32,
                    height: 32,
                    backgroundColor: "#dcfce7",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Star size={16} color="#f5940b" />
                </Box>
                <Box>
                  <Typography variant="body2" sx={{ fontWeight: 500 }}>
                    4.9/5 Rating
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{ color: "text.secondary" }}
                  >
                    From 2,000+ students
                  </Typography>
                </Box>
              </Box>
            </Paper>
          </Box>
        </Grid>
      </div>
    </div>
  );
};

export default Herosection;
