"use client";
import { Box, Paper, Typography, IconButton, useMediaQuery } from "@mui/material";
import { useState, useEffect } from "react";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import { useTheme } from "@mui/material/styles";
import Login from "@/components/LoginUI";
import ForgotPassword from "@/components/ForgotPasswordUI"; // Import Forgot Password component

const features = [
  {
    title: "Automated Invoice Reminders",
    description: "Never miss a payment deadline with automated invoice follow-ups.",
    image: "/f-icon1.png",
  },
  {
    title: "Secure Payment Integration",
    description: "Accept payments via Stripe, PayPal, and bank transfers securely.",
    image: "/f-icon2.png",
  },
  {
    title: "Custom Branding & Templates",
    description: "Personalize invoices with your logo, colors, and professional templates.",
    image: "/f-icon1.png",
  },
  {
    title: "Recurring Invoices",
    description: "Set up recurring billing for subscriptions and long-term clients.",
    image: "/f-icon2.png",
  },
  {
    title: "Advanced Analytics",
    description: "Track payments, outstanding balances, and generate financial reports.",
    image: "/f-icon1.png",
  },
];

export default function Home() {
  const [currentFeature, setCurrentFeature] = useState(0);
  const [showForgotPassword, setShowForgotPassword] = useState(false); // State to toggle views
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % features.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        backgroundImage: "url('/bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        justifyContent: "center",
        alignItems: "center",
        p: 2,
      }}
    >
      <Paper
          elevation={6}
          sx={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            maxWidth: "90%",
            width: isMobile ? "100%" : isTablet ? "85%" : "65%",
            minHeight: "90vh",
            height: "auto",
            borderRadius: 4,
            overflow: "hidden",
            bgcolor: "rgba(255, 255, 255, 0.95)",
            alignItems: "center",
            position: "relative", // Allows absolute positioning inside
          }}
        >
          {/* Logo Section (Pinned to the Top) */}
          <Box
            sx={{
              position: "absolute",
              top: 50,
              left: isMobile ? "50%" : isTablet ? "50%" : "30%",
              transform: "translateX(-50%)",
              zIndex: 2,
              bgcolor: "rgba(255, 255, 255, 0.95)", // Ensure background consistency
              p: 1,
              borderRadius: 2,
              
            }}
          >
            <img
              src="/logo.png"
              alt="Company Logo"
              style={{
                width: isMobile ? "160px" : "220px",
                height: "auto",
              }}
            />
          </Box>

          {/* Left Section (Login or Forgot Password) */}
          <Box sx={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", p: isMobile ? 2 : 4, mt: isMobile ? 8 : 10 , left:"50%"}}>
            {/* Login or Forgot Password Section */}
            <Box sx={{ width: isMobile ? "100%": "100%", display: "flex", justifyContent: "center" }}>
              {showForgotPassword ? (
                <ForgotPassword onBack={() => setShowForgotPassword(false)} />
              ) : (
                <Login onForgotPassword={() => setShowForgotPassword(true)} />
              )}
            </Box>
          </Box>


        {/* Right Section (Feature Highlights) */}
        <Box
          sx={{
            flex: 0.1,
            bgcolor: "rgb(6, 77, 184)",
            p: isMobile ? 4 : 25,
            color: "white",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            height: "100%",
            minHeight: "55vh",
            position: "relative",
            borderRadius: 2,
          }}
        >
          <img
            src={features[currentFeature].image}
            alt={features[currentFeature].title}
            style={{
              width: isMobile ? "100px" : "200px",
              height: "auto",
              marginBottom: "10px",
            }}
          />
          <Typography variant={isMobile ? "h6" : "h5"} fontWeight="bold">
            {features[currentFeature].title}
          </Typography>
          <Typography variant="body2" sx={{ px: isMobile ? 2 : 0, fontSize: "1.3rem"}}>
            {features[currentFeature].description}
          </Typography>

          <Box sx={{ display: "flex", gap: 1, position: "absolute", bottom: 10 }}>
            {features.map((_, index) => (
              <IconButton key={index} onClick={() => setCurrentFeature(index)}>
                <FiberManualRecordIcon sx={{ fontSize: 18, color: currentFeature === index ? "white" : "gray" }} />
              </IconButton>
            ))}
          </Box>
        </Box>
      </Paper>
    </Box>
  );
}
