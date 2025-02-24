import { Box, Typography, Grid, Paper } from "@mui/material";

const testimonials = [
  { text: "Great tool for invoicing!", author: "John Doe" },
  { text: "Made my billing process super easy!", author: "Jane Smith" },
];

export function Testimonials() {
  return (
    <Box sx={{ textAlign: "center", py: 8, bgcolor: "#fafafa" }}>
      <Typography variant="h4" fontWeight="bold">
        What Our Clients Say
      </Typography>
      <Grid container spacing={3} justifyContent="center" sx={{ mt: 3 }}>
        {testimonials.map((testimonial, index) => (
          <Grid item key={index} xs={12} sm={4}>
            <Paper
              elevation={3}
              sx={{ p: 4, textAlign: "center", bgcolor: "white" }}
            >
              <Typography variant="body1">"{testimonial.text}"</Typography>
              <Typography variant="subtitle2" sx={{ mt: 1, fontWeight: "bold" }}>
                - {testimonial.author}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
