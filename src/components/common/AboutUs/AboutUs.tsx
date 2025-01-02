import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid2";
import { StyledAboutUsSection, StyledCard, StyledInnerCard } from "./styled";
import { useTheme } from "@mui/material/styles";
import { EMainSections } from "../../../constants/localizations";

export const AboutUs = () => {
  const { palette } = useTheme();

  return (
    <Box component={StyledAboutUsSection} id={EMainSections.AboutCompany}>
      <Grid container spacing={2} columns={{ xs: 1, sm: 1, md: 12 }}>
        <Grid size={{ xs: 1, sm: 1, md: 5 }}>
          <Box>
            <Typography color={palette.secondary.dark} variant='h3'>
              О нас
            </Typography>
            <Typography color={palette.primary.dark} variant='h2'>
              Компания
            </Typography>
            <Typography color={palette.primary.light} variant='h2'>
              Баха
            </Typography>
            <Typography>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
              odio quidem aliquam placeat commodi! Deserunt tempore unde
              voluptatum? Laborum blanditiis nisi quam molestias accusantium
              illo at modi harum cum rem? Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Dolor impedit aut saepe blanditiis cupiditate
              quam voluptate eaque totam nam. Inventore blanditiis ad non eaque
              optio cumque fuga dolores quibusdam sapiente?
            </Typography>
          </Box>
        </Grid>
        <Grid
          container
          size={"grow"}
          justifyContent={{ xs: "center", sm: "center", md: "start" }}
        >
          {Array.from({ length: 6 }).map((_, index) => (
            <StyledCard>
              <StyledInnerCard>
                <Typography variant='h2'>{90 + index}</Typography>
                <Typography variant='caption'>
                  Завершенно арбитражных дел
                </Typography>
                <Typography
                  component='a'
                  variant='caption'
                  sx={{
                    textDecoration: "underline",
                    color: palette.primary.light,
                  }}
                >
                  Узнать больше
                </Typography>
              </StyledInnerCard>
            </StyledCard>
          ))}
        </Grid>
      </Grid>
    </Box>
  );
};
