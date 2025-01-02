import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import { styled } from "@mui/material/styles";

export const StyledFooterIcons = styled(Box)({
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
});

export const StyledFooterWrapper = styled(Box)(({ theme }) => ({
  height: "auto",
  backgroundColor: theme.palette.secondary.main,
  padding: "3% 15%",
  justifyContent: "center",
}));

export const StyledIconsContainer = styled(Grid)({
  size: { xs: 12, sm: 1, md: 1 },
  display: "flex",
  justifyContent: "center",
  gap: "5px",
  alignItems: "center",
});
