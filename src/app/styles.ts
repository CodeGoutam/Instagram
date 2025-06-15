import { SxProps, Theme } from "@mui/material";

// Main full-screen wrapper
export const wrapper: SxProps<Theme> = {
  width: "100vw",
  height: "100dvh", // use dvh to fix mobile chrome issues
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#fafafa",
  overflow: "hidden", // prevent unwanted scroll
};

// Card container
export const card: SxProps<Theme> = {
  width: "100%",
  maxWidth: { sm: "100%", md: "350px" },
  display: "flex",
  flexDirection: "column",
  height: "100%",
  padding: "20px",
  backgroundColor: "#ffffff",
};

// Top language section
export const language: SxProps<Theme> = {
  fontSize: "14px",
  color: "#8e8e8e",
  fontWeight: 600,
  display: "flex",
  justifyContent: "flex-start",
  width: "100%",
  paddingBottom: "10px",
};

// Flexible content area (logo + form)
export const content: SxProps<Theme> = {
  flexGrow: 1,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center", // centers logo + form together
  alignItems: "center",
  gap: "24px",
  width: "100%",
  overflowY: "auto", // scroll only when absolutely necessary
};

// Logo box
export const logoBox: SxProps<Theme> = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

// Form Section
export const formSection: SxProps<Theme> = {
  width: "100%",
  display: "flex",
  flexDirection: "column",
  gap: "14px",
};

export const form = {
  display: "flex",
  flexDirection: "column",
  gap: "8px",
} as const;

export const inputWrapper = {
  display: "flex",
  flexDirection: "column",
  gap: "8px",
  width: "100%",
} as const;

export const input: SxProps<Theme> = {
  border: "1px solid gray",
  padding: "10px",
  borderRadius: "12px",
  height: "48px",
  fontSize: "14px",
  width: "100%",
  fontWeight: 500,
};

export const loginButton = {
  backgroundColor: "#4a5df9",
  color: "white",
  borderRadius: "16px",
  border: "none",
  cursor: "pointer",
  height: "40px",
  width: "100%",
} as const;

export const forgotText: SxProps<Theme> = {
  fontSize: "12px",
  color: "#8e8e8e",
  fontWeight: 600,
  textAlign: "center",
};

export const footer: SxProps<Theme> = {
  width: "100%",
  display: "flex",
  flexDirection: "column",
  gap: "8px",
  justifyContent: "flex-end",
  alignItems: "center",
  paddingTop: "10px",
};

export const createBtn = {
  borderRadius: "16px",
  border: "2px solid #4a5df9",
  cursor: "pointer",
  height: "40px",
  width: "100%",
  textTransform: "none",
  color: "#4a5df9",
  fontSize: "16px",
} as const;

export const metaBox: SxProps<Theme> = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "8px",
};

export const metaText: SxProps<Theme> = {
  fontSize: "14px",
  color: "#8e8e8e",
  fontWeight: 500,
  textAlign: "center",
};
