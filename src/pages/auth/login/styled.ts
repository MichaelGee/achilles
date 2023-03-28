import { styled } from "@/stitches/stitches.config";

export const LoginContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: "100vh",
  width: "100vw",
});

export const LoginCard = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: "400px",
  width: "400px",
  "& form": {
    width: "100%",
  },
});
