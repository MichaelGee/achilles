import { styled } from "@/stitches/stitches.config";

export const ChatContainer = styled("div", {
  position: "relative",
  display: "flex",
  flexDirection: "column",

  height: "100vh",
  // make width to be about 60% of the screen
  width: "60vw",
  maxWidth: "600px",
  margin: "0 auto",
  padding: "10px 0",
});

export const ChatInputSection = styled("div", {
  // put input section at the bottom
  position: "absolute",
  bottom: "0",
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "0 0 30px 0",
});

export const ChatButton = styled("button", {
  background: "none",
  border: "none",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginLeft: "10px",
});
