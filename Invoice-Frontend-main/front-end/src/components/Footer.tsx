import { Box, Typography } from "@mui/material";

export function Footer() {
  return (
    <Box sx={{ bgcolor: "black", color: "white", textAlign: "center", py: 3 }}>
      <Typography variant="body2">&copy; 2025 Qorp. All rights reserved.</Typography>
    </Box>
  );
}
