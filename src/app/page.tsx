"use client";
import { Box, Button, Input, Typography } from "@mui/material";
import React from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Image from "next/image";

const LoginPage = () => {
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
            height={48}
            width={48}
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
              />
            </div>
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
            >
              Log In
            </Button>
          </form>
          <Typography
            sx={{
              fontSize: "12px",
              color: "#8e8e8e",
              fontWeight: 600,
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
