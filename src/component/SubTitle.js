import { Typography } from "@mui/material";
import React from "react";

export default function SubTitle({ primaryTitle, secondaryTitle }) {
  return (
    <>
      <Typography
        sx={{
          color: "#00C1F0",

          fontWeight: "600",
          fontSize: "20px",
          lineHeight: "30px"
        }}
      >
        {primaryTitle}
      </Typography>
      <Typography
        sx={{
          color: "rgba(255, 255, 255, 0.5)",

          fontWeight: "400",
          fontSize: "16px",
          lineHeight: "24px"
        }}
      >
        {secondaryTitle}
      </Typography>
    </>
  );
}
