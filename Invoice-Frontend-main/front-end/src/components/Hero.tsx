import { Box, Typography, Button, Grid } from "@mui/material";

export function Hero() {
  return (
    <Box
      sx={{
        height: "100vh", // Full screen height
        display: "flex",
        alignItems: "center", // Vertically center content
        justifyContent: "center", // Horizontally center content
        bgcolor: "rgb(11, 1, 14)", // Darker background color
        color: "rgba(255, 255, 255, 0.88)", // Text color
        px: 3, // Adding padding to avoid text being too close to the edges
      }}
    >
      <Grid container alignItems="center" justifyContent="space-between">
        {/* Left Side Content */}
        <Grid item xs={12} md={6} sx={{ textAlign: "center", px: 3 }}>
          <Typography variant="h3" fontWeight="bold">
            Effortlessly Streamline Your Billing with Our Premier Invoice Generator
          </Typography>
          <Typography variant="h6" sx={{ mt: 2 }}>
            An extremely fast, powerful, and easy-to-use invoice generator streamlines the invoicing process by allowing users to create professional invoices in a matter of minutes with intuitive interface and advanced features.
          </Typography>
          <Button
            variant="contained"
            sx={{
              bgcolor: "rgba(58, 222, 80, 0.88)",
              mt: 3,
              px: 4,
              py: 1.5,
              fontSize: "1.2rem",
            }}
          >
            Generate Invoice Now
          </Button>
        </Grid>

        {/* Right Side Image Box */}
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              height: "100%", // Full height for the container
              width: "100%", // Ensure the image takes full width
            }}
          >
            {/* Use <img> tag to display the image directly */}
            <img
              src="/invoice-gen.png" // Image path from the public folder
              alt="Invoice Generator"
              style={{
                width: "90%", // Full width
                height: "900%", // Full height
                objectFit: "cover", // Ensure the image covers the container
                borderTopLeftRadius: "10px", // Optional: rounded corners
              }}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
