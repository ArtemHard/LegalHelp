import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";

export const StyledTitle = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    display: "flex",
    justifyContent: "center",
  },
  [theme.breakpoints.up("md")]: {
    display: "block",
  },
}));
export const StyledUnderTitle = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
  [theme.breakpoints.up("md")]: {
    display: "block",
  },
}));
