import { Box, Typography, Input } from "@mui/material";
import React from "react";

export default function EditBox({
  title,
  type,
  placeholder,
  value,
  handleChange = null,
  inputProps,
  isRequired,
  isDisabled
}) {
  return (
    <Box
      sx={{
        marginTop: "20px"
      }}
    >
      <Box
        sx={{
          width: "100%",

          display: "flex",
          alignItems: "center",
          ".MuiTypography-root": {
            textWrap: "nowrap",
            fontWeight: "400",
            color: "white",
            fontSize: "16px"
          }
        }}
      >
        <Typography>{title}</Typography>
        <Typography
          sx={{
            color: "#FF5924 !important",
            display: !isRequired ? "none" : "flex"
          }}
        >
          *
        </Typography>
      </Box>
      <Input
        type={type}
        value={value}
        isDisabled={isDisabled}
        onChange={(e) => handleChange(e.target.value)}
        placeholder={placeholder}
        inputProps={inputProps}
        sx={{
          width: "100%",
          height: "68px",

          background: "#0B1D33",

          border: "1px solid rgba(255,255,255,0.7)",
          borderRadius: "5px",
          color: "white",

          fontSize: "16px",
          paddingLeft: "21px",
          "::placeholder": {
            color: "#6587B0"
          }
        }}
      />
    </Box>
  );
}
