import { Box, Container, Button } from "@mui/material";
import React from "react";
import { AuthContext, useAuthContext } from "../providers/AuthProvider";
import { useContext } from "react";

export function shorten(str) {
  if (str.length < 10) return str;
  return `${str.slice(0, 6)}...${str.slice(str.length - 4)}`;
}

export default function Navbar() {
  const { address, loading, disconnect, connect } = useAuthContext();

  const handleWalletConnect = () => {
    address ? disconnect() : connect();
  };

  return (
    <Box
      sx={{
        width: "100vw",
        height: "8.9rem",
        borderBottom: "1px solid rgba(255, 255, 255, 0.1)",

        padding: { mobile: "2px", laptop: "0px 160px 1px" }
      }}
    >
      <Container
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          img: {
            width: "220.55px",
            height: "72px"
          }
        }}
      >
        <img alt="" src="./logo1.png" />
        <Box
          sx={{
            height: 58,
            display: "flex",
            alignItems: "center",
            gap: "3rem"
          }}
        >
          <Box
            sx={{
              width: 2,
              height: 28,
              background: "white",
              opacity: "0.2"
            }}
          />
          <Box
            sx={{
              width: "225.31px",
              height: "55px",
              padding: "2px",
              borderRadius: "4rem",
              background:
                "linear-gradient(90deg, #6100F4 0%, #040C15 49%, #00C4F4 100%)"
            }}
          >
            <Button
              onClick={() => handleWalletConnect()}
              sx={{
                width: "100%",
                height: "100%",
                color: "white",
                textTransform: "uppercase",
                fontSize: "1rem",
                borderRadius: "4rem",
                background: "#030C16",

                "&:hover": {
                  background: "#130C16"
                }
              }}
            >
              {address ? shorten(address) : "Connect Wallet"}
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
