"use client";
import { useState } from "react";
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { FcGoogle } from "react-icons/fc";
import { useTheme } from "@mui/material/styles";

export default function Login({onForgotPassword}) {
  const [showPassword, setShowPassword] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: isMobile ? "90%" : 500, // Responsive width
        
        padding: isMobile ? 2 : 4,
      }}
    >
      <Typography variant="h4" fontWeight="bold" sx={{ fontSize: "3.1rem" }}> 
        Log In
      </Typography>
      <Typography variant="body1" color="textSecondary" mb={2} sx={{ fontSize: "1.3rem" }}>
        Use your email or sign in with Google to continue
      </Typography>

      <TextField fullWidth size="medium" label="Email" variant="outlined" margin="normal" />
      
      {/* Password Field with Show/Hide */}
      <TextField
        fullWidth
        size="medium"
        label="Password"
        type={showPassword ? "password" : "text"} // Fixed: Corrected toggle logic
        variant="outlined"
        margin="normal"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={() => setShowPassword((prev) => !prev)} edge="end">
                {showPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />

      {/* Remember Me & Forgot Password */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
          alignItems: "center",
          mt: 1,
          
        }}
      >
        <FormControlLabel control={<Checkbox />} label="Remember me"  />
        <Typography variant="body1" sx={{ cursor: "pointer", color: "rgb(6, 77, 184)",fontSize: "1.1rem" }}onClick={onForgotPassword}>
          Forgot password?
        </Typography>
      </Box>

      {/* Log In Button */}
      <Button fullWidth size="large" variant="contained" sx={{ mt: 2, fontSize: "1.3rem",borderRadius: 8, }}>
        Log In
      </Button>

      {/* Google Sign-In Button */}
      <Button
        fullWidth
        size="large"
        variant="outlined"
        sx={{
          mt: 2,
          display: "flex",
          alignItems: "center",
          gap: 1,
          fontWeight: "bold",
          fontSize: "1.3rem",
          borderRadius: 8,
        }}
        startIcon={<FcGoogle size={28} />}
      >
        Sign in with Google
      </Button>

      {/* Sign Up Option */}
      <Typography variant="body1" sx={{ mt: 15, fontSize: "1.3rem" }}>
        Don’t have an account?{" "}
        <span style={{ color: "rgb(6, 77, 184)", cursor: "pointer", fontSize: "1.3rem" }}>Sign Up</span>
      </Typography>
    </Box>
  );
}
