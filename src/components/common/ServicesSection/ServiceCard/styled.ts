import { Card, CardContent, CardMedia } from "@mui/material";
import { styled } from "@mui/material/styles";

export const StyledServicesSection = styled("section")({
  display: "flex",
  flexDirection: "column",
  background: "#ebebeb",
  padding: "3% 15%",
});

export const StyledServiceCard = styled(Card)({
  margin: "auto",
  borderRadius: 0,
  position: "relative",
  backgroundColor: "#064878",
  "&:hover > :first-child": {
    opacity: 0.75,
  },
});

export const StyledCardImage = styled(CardMedia)(({ theme }) => ({
  position: "absolute",
  width: "100%",
  height: "100%",
  top: 0,
  left: 0,
  zIndex: 0,
  backgroundColor: "rgba(0, 0, 0, 0.08)",
  backgroundPosition: "center",
  boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
  transition: "0.3s",
}));

export const StyledServiceCardContent = styled(CardContent)({
  p: 3,
  height: 300,
  display: "flex",
  flexDirection: "column",
  justifyContent: "end",
});
