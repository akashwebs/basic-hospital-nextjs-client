import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Link from "next/link";
import Image from "next/image";

const pages = [
  { name: "হোম", route: "/" },
  { name: "ডাক্তারগণ", route: "/doctors", target: "_self" },
  { name: "স্বাস্থ্য বার্তা", route: "/helth-tips", target: "_self" },
  { name: "ফটো গ্যালারি", route: "/image-gallary", target: "_self" },
  {
    name: "রক্তের প্রয়োজনে",
    route: "https://bondhonroktodan.com/",
    target: "_blank",
  },
  { name: "আমাদের সম্পর্কে", route: "/about", target: "_self" },
  { name: "যোগাযোগ", route: "/contact-us", target: "_self" },
];

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static" sx={{ background: "#2596be" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} /> */}
          <Link href={"/"}>
            <Typography
              variant="h6"
              noWrap
              component="h6"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                alignItems: "center",
                fontWeight: 700,
                color: "inherit",
                textDecoration: "none",
                py: 2,
                fontSize: "1.5rem",
                cursor: "pointer",
              }}
            >
              <Image src="/logo.png" width={70} height={70} />
              {/* ----------logo------------------ */}
              বেসিক এইড এন্ড হসপিটাল
            </Typography>
          </Link>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                  <Link href={`${page.route}`} passHref key={page.name}>
                    <a target={page.target} rel="noopener noreferrer">
                      <Typography textAlign="center" sx={{ fontSize: "1rem" }}>
                        {page.name}
                      </Typography>
                    </a>
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Link href={"/"}>
            <Typography
              variant="h5"
              noWrap
              component="h5"
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                color: "inherit",
                textDecoration: "none",
                fontSize: "1.5rem",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              <Image src="/logo.png" width={35} height={35} />
              {/* ----------logo------------------ */}
              বেসিক এইড এন্ড হসপিটাল
            </Typography>
          </Link>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex", justifyContent: "end" },
            }}
          >
            {pages.map((page) => (
              <Link href={`${page.route}`} passHref key={page.name}>
                <a target={page.target} rel="noopener noreferrer">
                  <Button
                    variant="contained"
                    onClick={handleCloseNavMenu}
                    sx={{
                      my: 2,
                      color: "white",
                      display: "block",
                      // border: "1px solid #fff",
                      mr: 1,
                      fontSize: "1.2rem",
                      fontWeight: "500",
                    }}
                  >
                    {page.name}
                  </Button>
                </a>
              </Link>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
