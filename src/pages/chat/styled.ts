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
  padding: "20px 0 30px 0",
  background: "#000000",
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

export const ChatBodyContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  height: "100%",
  overflowY: "auto",
  padding: "10px 0",
  "&::-webkit-scrollbar": {
    width: "0.4em",
  },
  "&::-webkit-scrollbar-track": {
    boxShadow: "inset 0 0 6px rgba(0,0,0,0.00)",
    webkitBoxShadow: "inset 0 0 6px rgba(0,0,0,0.00)",
  },
});

export const MessageContainer = styled("div", {
  display: "flex",
  "&.received": {
    justifyContent: "flex-start",
  },
  "&.sent": {
    justifyContent: "flex-end",
  },
});

export const Message = styled("div", {
  borderRadius: "18px",
  padding: "8px 17px",
  margin: "10px 0",
  display: "flex",
  flexDirection: "column",
  width: "fit-content",
  maxWidth: "60%",
  wordBreak: "break-word",
  "&:first-child": {
    marginTop: "0",
  },
  // received message
  "&.received": {
    background: "#E4E6EB",
    color: "#000",
    justifyContent: "flex-start",
  },

  // sent message
  "&.sent": {
    background: "rgb(0, 132, 255)",
    color: "#fff",
    justifyContent: "flex-end",
  },
});
