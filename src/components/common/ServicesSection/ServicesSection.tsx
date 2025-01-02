import Grid from "@mui/material/Grid2";
import { ServiceCard } from "./ServiceCard/ServiceCard";
import { commonService } from "../../../constants/common";
import Typography from "@mui/material/Typography";
import { StyledServicesSection } from "./ServiceCard/styled";
import { StyledTitle, StyledUnderTitle } from "./styled";
import { EMainSections } from "../../../constants/localizations";

export const ServicesSection = () => {
  return (
    <StyledServicesSection id={EMainSections.Services}>
      <StyledTitle>
        <Typography variant='h3'>{"Наши услуги"}</Typography>
      </StyledTitle>
      <StyledUnderTitle>
        <Typography variant='h2'>{"Мы специализируемся"}</Typography>
      </StyledUnderTitle>
      <Grid
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        columns={{ xs: 1, sm: 12, md: 18 }}
      >
        {Object.values(commonService).map((serviceData) => (
          <Grid size={6}>
            <ServiceCard text={serviceData.text} img={serviceData.img} />
          </Grid>
        ))}
      </Grid>
    </StyledServicesSection>
  );
};
