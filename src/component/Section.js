import { Box, Container, Typography } from "@mui/material";
import React from "react";

export default function Section() {
  return (
    <Box
      sx={{
        width: "100%",
        height: "500px",
        padding: { lg: "120px 300px 0px", sm: "120px 20px" },
        background: "url(./section_background.png)",
        backgroundSize: "cover",
        backgroundPosition: "center top",
        backgroundRepeat: "no-repeat",
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      }}
    >
      <Container
        sx={{
          width: "100%",
          height: "333px",
          padding: "70px 110px",
          color: "white",
          display: "flex",
          flexDirection: "column",
          justifyItems: "center",
          alignItems: "center",
          alignSelf: "center"
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap"
          }}
        >
          <Typography
            gutterBottom
            variant="h2"
            sx={{
              marginRight: "16px",
              fontSize: { sm: "50px" }
            }}
          >
            Create Your
          </Typography>
          <Typography
            gutterBottom
            variant="h2"
            sx={{
              fontWeight: "bold",
              marginRight: "16px",
              color: "#00C1F0 !important",
              fontSize: { sm: "50px" }
            }}
          >
            ERC20
          </Typography>
          <Typography
            gutterBottom
            variant="h2"
            sx={{ fontWeight: "bold", fontSize: { sm: "50px" } }}
          >
            Token
          </Typography>
        </Box>
        <Typography
          sx={{
            textTransform: "capitalize",
            fontWeight: "400",
            textAlign: "center",
            fontSize: "18px",
            lineHeight: "30px",
            maxWidth: "760px"
          }}
        >
          Easily deploy Smart Contract for an ERC20 Token on Ethereum. between
          several features like Mintable, , Deflationary, Taxable, and others,
          giving your token its unique identity. login. No setup. No coding
          required.
        </Typography>
      </Container>
    </Box>
  );
}
