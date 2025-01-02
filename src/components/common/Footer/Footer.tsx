import { FC, ReactElement } from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid2";
import { ReactComponent as VkIcon } from "../../../assets/icons/vk.svg";
import { ReactComponent as TelegrammIcon } from "../../../assets/icons/telegram-svgrepo-com.svg";
import { ReactComponent as WhatsAppIcon } from "../../../assets/icons/whatsapp-svgrepo-com.svg";
import Button from "@mui/material/Button";
import {
  StyledFooterIcons,
  StyledFooterWrapper,
  StyledIconsContainer,
} from "./styled";
import { COMPANY_NAME } from "../../../constants/common";
import { useTheme } from "@mui/material/styles";

export const Footer: FC = (): ReactElement => {
  const { palette } = useTheme();

  return (
    <StyledFooterWrapper>
      <Grid container columns={{ xs: 1, sm: 1, md: 3 }}>
        <Grid
          size={{ xs: 12, sm: 1, md: 1 }}
          display='flex'
          justifyContent='center'
          alignItems='center'
          flexDirection={"column"}
        >
          <Typography variant='h5'>+7-123-456-15-26</Typography>
        </Grid>
        <Grid size={{ xs: 12, sm: 1, md: 1 }}>
          <StyledFooterIcons>
            <Button key={"telegram"} startIcon={<TelegrammIcon />}></Button>
            <Button key={"vk"} startIcon={<VkIcon />}></Button>
            <Button key={"whatsapp"} startIcon={<WhatsAppIcon />}></Button>
          </StyledFooterIcons>
        </Grid>
        <StyledIconsContainer
          size={{ xs: 12, sm: 1, md: 1 }}
          display='flex'
          justifyContent='center'
          gap={"5px"}
          alignItems='center'
        >
          <Typography variant='body1' color={palette.primary.light}>
            {COMPANY_NAME}
          </Typography>
          <Typography variant='body1'>
            {` © ${new Date().getFullYear()}`}
          </Typography>
        </StyledIconsContainer>
      </Grid>
    </StyledFooterWrapper>
  );
};

export default Footer;
