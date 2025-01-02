import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import backgroundImage from "../../assets/back-ground-spb.jpg";

export const StyledFirstScreenWrapper = styled(Box)({
  padding: "8% 15%",
  display: "flex",
  height: "-webkit-fill-available",
  flexDirection: "column",
});
export const FirstSection = styled("section")({
  width: "100%",
  height: "670px",
  left: "0px",
  background: `linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(${backgroundImage})`,
  backgroundSize: "cover",
});

export const StyledContentBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
});
