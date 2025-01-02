import { TypographyOptions } from "@mui/material/styles/createTypography";

export const typography: TypographyOptions = {
  fontFamily: ["Lato", "normal", "Merriweather", "normal"].join(","),
  subtitle1: {
    fontSize: 12,
  },
  body1: {
    fontWeight: 500,
  },
  body2: {
    fontStyle: "normal",
    fontWeight: 700,
    fontSize: "14px",
    lineHeight: "17px",
    letterSpacing: " 0.1em",
    textTransform: "uppercase",
  },
  h1: {
    fontFamily: "Merriweather, sans-serif",
    fontStyle: "normal",
    fontWeight: 700,
    fontSize: "48px",
    lineHeight: "66px",
    color: "#ffffff",
  },
  h2: {
    fontSamily: "Merriweather, sans-serif",
    fontStyle: "normal",
    fontWeight: 900,
    fontSize: "48px",
    lineHeight: "69px",
  },
  h3: {
    fontFamily: "Lato, sans-serif",
    fontStyle: "normal",
    fontWeight: 900,
    fontSize: "24px",
    lineHeight: "33px",
    marginBottom: "10px",
    color: "#bdbdbd",
  },
  button: {
    fontStyle: "italic",
  },
};
