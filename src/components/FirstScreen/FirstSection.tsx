import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import {
  FirstSection,
  StyledContentBox,
  StyledFirstScreenWrapper,
} from "./styled";
import { EMainSections } from "../../constants/localizations";

export const FirstScreen = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const variant = isSmallScreen ? "h4" : "h1";

  return (
    <FirstSection id={EMainSections.Main}>
      <StyledFirstScreenWrapper>
        <StyledContentBox>
          <Typography variant={variant} color={theme.palette.primary.main}>
            Юридическая помощь
          </Typography>
          <Typography variant={variant} color={theme.palette.primary.main}>
            в Москве и регионах
          </Typography>
        </StyledContentBox>
      </StyledFirstScreenWrapper>
      ;
    </FirstSection>
  );
};
