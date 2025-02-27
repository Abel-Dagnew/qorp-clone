"use client";
import { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";

export default function ForgotPassword({ onBack }) {
  const [email, setEmail] = useState("");
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
    sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: isMobile ? "90%" : 400, // Responsive width
        
        padding: isMobile ? 2 : 4,
      }}
    >
      <Typography variant="h5" fontWeight="bold" gutterBottom>
        Forgot Password?
      </Typography>
      <Typography variant="body2" color="textSecondary" mb={2}>
        We will send a code to your email to reset your password
      </Typography>
      <TextField
        fullWidth
        size="medium"
        label="Email"
        variant="outlined"
        margin="normal"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Button
        fullWidth
        size="large"
        variant="contained"
        sx={{ mt: 2 }}
      >
        Send Email
      </Button>
      <Typography variant="body2" sx={{ mt: 2 }} onClick={onBack}>
        <span style={{ color: "blue", cursor: "pointer" }}>Back to Sign In</span>
      </Typography>
    </Box>
  );
}
