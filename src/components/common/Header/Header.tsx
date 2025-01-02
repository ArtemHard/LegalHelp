import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { useTheme } from "@mui/material/styles";
import AdbIcon from "@mui/icons-material/Adb";
import { MainDrawer } from "./MainDrawer/MainDrawer";
import { Logo } from "./Logo/Logo";
import { COMPANY_NAME, pages } from "../../../constants/common";

export const Header = () => {
  const { palette } = useTheme();

  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  const [openDrawer, setOpenDrawer] = useState(false);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
    setOpenDrawer(true);
  };

  const handleCloseNavMenu = (id?: string) => {
    setAnchorElNav(null);
    setOpenDrawer(false);
    if (id) scrollToElement(id);
  };

  const handleCloseDrawer = () => {
    setOpenDrawer(false);
  };

  const scrollToElement = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <AppBar position='sticky'>
      <Container maxWidth='xl'>
        <Toolbar disableGutters>
          <AdbIcon
            sx={{
              display: { xs: "none", md: "flex" },
              mr: 1,
            }}
          />
          <Typography
            variant='h6'
            noWrap
            component='a'
            href='#app-bar-with-responsive-menu'
            color={palette.primary.light}
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontWeight: 700,
              letterSpacing: "0.3rem",
              textDecoration: "none",
            }}
          >
            {COMPANY_NAME}
          </Typography>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
            }}
          >
            <IconButton
              size='large'
              aria-label='account of current user'
              aria-controls='menu-appbar'
              aria-haspopup='true'
              onClick={handleOpenNavMenu}
              color='inherit'
            >
              <MenuIcon />
            </IconButton>
          </Box>
          <Logo text={COMPANY_NAME} />
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "center",
              gap: "10px",
            }}
          >
            {pages.map((page) => (
              <Button
                key={page.path}
                onClick={() => handleCloseNavMenu(page.name)}
                sx={{ my: 2, color: "black", display: "block" }}
              >
                <Typography variant='body2'>{page.name}</Typography>
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
      <MainDrawer
        open={openDrawer}
        handleOpenDrawer={handleCloseDrawer}
        scrollToElement={scrollToElement}
        items={pages}
      />
    </AppBar>
  );
};
export default Header;
