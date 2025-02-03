import React from "react";

import {
  Card,
  CardContent,
  Button,
  Typography,
  Link,
  InputLabel,
  Input,
  Box,
} from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";

const LoginCard = () => {
  return (
    <Card
      sx={{
        maxWidth: "430px",
        borderRadius: "20px",
        fontFamily: "Poppins, sans-serif",
        fontStyle: "normal",
        background: "#ffffff",
        color: "#210366 ",
        fontSize: "1rem",
        padding: "1rem",
      }}
    >
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
          gap: "1.5rem",
          padding: "0px",
        }}
      >
        <Box
          sx={{
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography variant="h5" component="h2">
            Welcome back
          </Typography>
          <Typography variant="p" component="p">
            Continue with Google or enter your details.
          </Typography>
        </Box>

        <Button
          href="#"
          underline="none"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#210366 ",
            fontWeight: "bold",
            width: "100%",
            padding: "7px 0",
            background: "rgba(254, 254, 254, 0.2)",
            boxShadow: "0px 0px 40px rgba(123, 144, 255, 0.2)",
            borderRadius: "12px",
          }}
        >
          <GoogleIcon
            sx={{ width: "24px", height: "24px", marginRight: "8px" }}
          />
          Login with Google
        </Button>

        <Typography variant="p" component="p" sx={{ alignSelf: "center" }}>
          Or
        </Typography>

        <form
          style={{
            width: "90%",
            color: "#210366",
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            <InputLabel
              htmlFor="email"
              sx={{
                color: "#210366 ",
                gap: "1rem",
              }}
            >
              Email
            </InputLabel>
            <Input
              id="email"
              name="email"
              type="email"
              required
              sx={{
                border: "1px solid gray",
                width: "100%",
                borderRadius: "12px",
                padding: "5px 19px",
              }}
            />
          </Box>

          <Box sx={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            <InputLabel
              htmlFor="password"
              sx={{
                color: "#210366 ",
                gap: "1rem",
              }}
            >
              Password
            </InputLabel>
            <Input
              id="password"
              name="password"
              type="password"
              required
              disableUnderline
              sx={{
                border: "1px solid gray",
                width: "100%",
                borderRadius: "12px",
                padding: "5px 19px",
                background: "#fff",
                "&:focus": {
                  borderColor: "blue",
                  background: "gray",
                },
              }}
            />
          </Box>

          <Link
            sx={{
              alignSelf: "flex-end",
              textDecoration: "none",
              fontWeight: "400",
              fontSize: "12px !important",
              color: "#210366",
              cursor: "pointer",
            }}
          >
            forgot password
          </Link>

          <Button
            type="submit"
            variant="contained"
            color="primary"
            sx={{
              width: "100%",
              background: "#7B90FF",
              borderRadius: "12px",
              color: "#fff",
              padding: "10px 19px",
              fontWeight: "600",
              "&:hover": {
                textDecorationColor: "#2f1370",
              },
            }}
          >
            Log in
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default LoginCard;
