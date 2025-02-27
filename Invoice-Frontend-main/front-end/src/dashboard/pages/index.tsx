import { Box, Grid } from "@mui/material";
import Sidebar from "../components/Sidebar";
import DashboardCard from "../components/DashboardCard";
import PendingInvoices from "../components/PendingInvoices";
import RecentActivity from "../components/RecentActivity";

export function Dashboard() {
  return (
    <Box sx={{ display: "flex" }}>
      <Sidebar />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
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

        <PendingInvoices />
        <RecentActivity />
      </Box>
    </Box>
  );
}
