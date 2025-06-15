"use client";
import { Box, Button, Input, Typography } from "@mui/material";
import React from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Image from "next/image";
import * as styles from "./styles";

const LoginPage = () => {
  return (
    <Box sx={styles.wrapper}>
      <Box sx={styles.card}>
        <Box
          sx={{
            height: "50%",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          <Typography sx={styles.language}>
            English (UK)
            <KeyboardArrowDownIcon />
          </Typography>

          {/* logo image */}
          <Box sx={styles.logoBox}>
            <Image
              src={"/assets/instagram.png"}
              height={48}
              width={48}
              alt="Instagram Logo"
            />
          </Box>
        </Box>

        <div style={styles.content}>
          {/* form section */}
          <Box sx={styles.formSection}>
            <form style={styles.form}>
              <div style={styles.inputWrapper}>
                <Input
                  type="text"
                  disableUnderline
                  placeholder="Username,email address or mobile number"
                  sx={styles.input}
                />
                <Input
                  type="password"
                  disableUnderline
                  placeholder="Password"
                  sx={styles.input}
                />
              </div>
              <Button type="submit" style={styles.loginButton}>
                Log In
              </Button>
            </form>
            <Typography sx={styles.forgotText}>Forgotten password?</Typography>
          </Box>

          <Box sx={styles.footer}>
            <Button variant="outlined" type="submit" style={styles.createBtn}>
              Create new account
            </Button>
            <Box sx={styles.metaBox}>
              <Image
                src={"/assets/meta.png"}
                height={16}
                width={16}
                alt="meta Logo"
              />
              <Typography sx={styles.metaText}>Meta</Typography>
            </Box>
          </Box>
        </div>
      </Box>
    </Box>
  );
};

export default LoginPage;
