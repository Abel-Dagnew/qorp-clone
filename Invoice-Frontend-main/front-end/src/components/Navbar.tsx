"use client";

import { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Paper,
  MenuItem,
} from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Image from "next/image";
import LoginIcon from "@mui/icons-material/Login"; // Login icon



export function Navbar() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  return (
    <AppBar position="static" sx={{ bgcolor: "black", height: 95 }}>
      <Toolbar sx={{ justifyContent: "flex-start", height: "100%" }}>
        {/* Logo & Brand */}
        <Box display="flex" alignItems="center" sx={{ ml: 30 }}>
          <Image src="/logo.png" alt="Qorp Logo" width={50} height={50} />
          <Typography variant="h5" fontWeight="bold" sx={{ ml: 1 }}>
            qorp
          </Typography>
        </Box>

        {/* Navigation Links */}
        <Box display="flex" alignItems="center" sx={{ ml: 80 }}>
          {/* Features Dropdown */}
          <Box
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
            sx={{ position: "relative" }}
          >
            <Button
              color="inherit"
              endIcon={<ArrowDropDownIcon />}
              sx={{
                fontSize: "25px",
                textTransform: "none", // prevents all caps
                fontFamily: "'Poppins', sans-serif",
                "&:hover": { color: "green" },
                color: "rgba(255, 255, 255, 0.88)",
                
              }}
            >
              Features
            </Button>

            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <Paper
                elevation={3}
                sx={{
                  position: "absolute",
                  top: "100%",
                  left: 0,
                  zIndex: 30,
                  bgcolor: "white",
                  boxShadow: "0px 4px 6px rgba(0,0,0,0.1)",
                  width: 730,
                  padding: 1,
                  display: "grid",
                  gridTemplateColumns: "repeat(2, 1fr)",
                  gap: 0.5,
                  borderRadius: 2,
                  
                }}
              >
                {[
                  "Recurring Invoices",
                  "Gmail Integration",
                  "Dashboard",
                  "Crypto Invoices (New)",
                  "Payment Reminder",
                  "Trust Scoring (New)",
                ].map((feature, index) => (
                  <MenuItem
                    key={index}
                    sx={{
                      padding: "10px 55px",
                      textTransform: "none", // prevents all caps
                      "&:hover": { bgcolor: "rgba(58, 222, 80, 0.88)", color: "white" },
                      fontSize: "22px",
                    }}
                  >
                    {feature}
                  </MenuItem>
                ))}
              </Paper>
            )}
          </Box>

          {/* Other Links */}
          {["Templates", "Pricing","Insights", "Contacts"].map((text) => (
            <Button
              key={text}
              color="inherit"
              sx={{
                fontSize: "25px",
                textTransform: "none", // prevents all caps
                fontFamily: "'Roboto', sans-serif", // standard font
                "&:hover": { color: "green" },
                padding: "30px",
                color: "rgba(255, 255, 255, 0.88)",
              }}
            >
              {text}
            </Button>
          ))}
        </Box>

        {/* Sign In & Sign Up Buttons */}
        <Box sx={{ display: "flex", alignItems: "center", ml: 70 }}>
          <Button
            color="inherit"
            sx={{
              fontSize: "20px",
              mr: 2,
              textTransform: "none", // prevents all caps
              fontFamily: "'Roboto', sans-serif", // standard font
              "&:hover": { color: "green" },
              border: "2px solid green", // Add border here
              borderRadius: "4px", // Optional: Add rounded corners
            }}
          >
            Sign In 
            <LoginIcon sx={{ mr: 1 }} /> {/* Add the icon with some spacing */}
            
          </Button>
          <Button
            variant="contained"
            sx={{
              bgcolor: "rgba(41, 215, 70, 0.88)",
              fontSize: "23px",
              textTransform: "none", // prevents all caps
              fontFamily: "'Roboto', sans-serif", // standard font
              "&:hover": { bgcolor: "darkgreen" },
            }}
          >
            Sign Up
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
