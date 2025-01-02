import { PaletteOptions } from "@mui/material/styles";

export const palette: PaletteOptions = {
  primary: {
    main: "#ffffff",
    dark: "black",
    light: "#005fa3",
    contrastText: "#333333",
    // light: will be calculated from palette.primary.main,
    // dark: will be calculated from palette.primary.main,
    // contrastText: will be calculated to contrast with palette.primary.main
  },
  secondary: {
    main: "#ebebeb",
    dark: "#bdbdbd",
  },
  text: {
    primary: "#005fa3",
    secondary: "#bdbdbd",
  },
};
