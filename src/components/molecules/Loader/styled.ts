import { styled } from "@/stitches/stitches.config";

export const LoaderContainer = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  position: "fixed",
  top: "0",
  left: "0",
  width: "100%",
  height: "100%",
  zIndex: "999",
});
