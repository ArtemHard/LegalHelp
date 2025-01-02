import Typography from "@mui/material/Typography";
import AdbIcon from "@mui/icons-material/Adb";
import { FC } from "react";

export const Logo: FC<{ text?: string }> = ({ text }) => {
  return (
    <>
      <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
      {!!text && (
        <Typography
          variant='h5'
          noWrap
          component='a'
          href='#app-bar-with-responsive-menu'
          sx={{
            mr: 2,
            display: { xs: "flex", md: "none" },
            flexGrow: 1,
            fontFamily: "monospace",
            fontWeight: 700,
            letterSpacing: ".3rem",
            color: "inherit",
            textDecoration: "none",
          }}
        >
          {text}
        </Typography>
      )}
    </>
  );
};
