"use client";  // ✅ This forces the component to run on the client

import { useState } from "react";
import { Box, Grid, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Sidebar from "../../components/Sidebar";
import DashboardCard from "../../components/DashboardCard";
import PendingInvoices from "../../components/PendingInvoices";
import RecentActivity from "../../components/RecentActivity";

const Dashboard = () => {
  // Start with the sidebar hidden
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Toggle sidebar visibility
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      {/* Sidebar (Initially hidden) */}
      {isSidebarOpen && <Sidebar sx={{ width: 300 }} />} {/* Increased width of sidebar */}

      {/* Main content, adjust width based on sidebar state */}
      <Box 
        component="main" 
        sx={{
          flexGrow: 1, 
          p: 3,
          marginLeft: isSidebarOpen ? "300px" : "0", // Adjust margin for the new sidebar width
          transition: "margin-left 0.3s", // Smooth transition
        }}
      >
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={3}>
            <DashboardCard title="Issued" value="10" color="#2196F3" />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <DashboardCard title="Paid" value="7" color="#4CAF50" />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <DashboardCard title="Overdue" value="2" color="#F44336" />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <DashboardCard title="Open" value="5" color="#607D8B" />
          </Grid>
        </Grid>

        {/* Side by side layout for PendingInvoices and RecentActivity */}
        <Grid container spacing={3} sx={{ mt: 3 }}>
          <Grid item xs={12} sm={6}>
            <Box sx={{ height: "100%", width: "100%" }}>
              <PendingInvoices />
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box sx={{ height: "100%", width: "100%" }}>
              <RecentActivity />
            </Box>
          </Grid>
        </Grid>
      </Box>

      {/* Toggle Sidebar Button at the Bottom */}
      <Box sx={{
        position: "absolute",
        bottom: 16,
        left: "50%",
        transform: "translateX(-50%)",
        zIndex: 1301, // Ensure the button is above other elements like sidebar
      }}>
        <IconButton
          color="primary"
          aria-label="menu"
          onClick={toggleSidebar}
          
        >
          <MenuIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Dashboard;
