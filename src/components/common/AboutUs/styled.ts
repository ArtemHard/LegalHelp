import Box from "@mui/material/Box";
import ButtonBase from "@mui/material/ButtonBase";
import { styled } from "@mui/material/styles";

export const StyledAboutUsSection = styled(Box)({
  padding: "3% 15%",
  flexGrow: 1,
  justifyContent: "space-between",
});

export const StyledCard = styled(ButtonBase)(({ theme }) => ({
  width: "200px",
  height: "200px",
  backgroundColor: theme.palette.secondary.main,
  borderRadius: 4,
  ":hover": {
    backgroundColor: theme.palette.primary.light,
    "> div, > div > a": {
      color: theme.palette.secondary.main,
    },
  },
  transition: "all 0.5s",
}));

export const StyledInnerCard = styled(Box)(({ theme }) => ({
  padding: "5% 10%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  height: "-webkit-fill-available",
}));
