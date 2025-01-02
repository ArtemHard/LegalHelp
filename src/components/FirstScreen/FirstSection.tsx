import { Typography } from "@mui/material";
import {
  FirstSection,
  StyledContentBox,
  StyledFirstScreenWrapper,
} from "./styled";

export const FirstScreen = () => {
  return (
    <FirstSection>
      <StyledFirstScreenWrapper>
        <StyledContentBox>
          <Typography variant='h1'>Юридическая помощь</Typography>
          <Typography variant='h1'>в Москве и регионах</Typography>
        </StyledContentBox>
      </StyledFirstScreenWrapper>
      ;
    </FirstSection>
  );
};
