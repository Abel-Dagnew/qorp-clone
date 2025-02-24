import { Box, Typography, Grid, Paper } from "@mui/material";

const features = [
  "Recurring Invoices",
  "Client Payment Reminders",
  "Custom Templates",
];

export function Features() {
  return (
    <Box sx={{ textAlign: "center", py: 8 }}>
      <Typography variant="h4" fontWeight="bold">
        Key Features
      </Typography>
      <Grid container spacing={3} justifyContent="center" sx={{ mt: 3 }}>
        {features.map((feature, index) => (
          <Grid item key={index} xs={12} sm={4}>
            <Paper
              elevation={3}
              sx={{ p: 4, textAlign: "center", bgcolor: "#f5f5f5" }}
            >
              {feature}
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
