import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import SideBar from "./SideBar";
import { useState } from "react";
// import useStore from "../Zustand/Zustand.js";
// import NavBarEsqueleto from "../components/Esqueletos/NavBarEsqueleto";
import "./Navbar.css";
import { IconButton, Menu, MenuItem } from "@mui/material";
import { AccountCircle } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import logoMuni from '../assets/Logo_SMT_neg_4.png'

export default function NavBar() {
  // const { getAuth, authenticated, logout, user } = useStore();
  const [anchorEl, setAnchorEl] = useState(null);
  // const [nombreUser, setNombreUser] = useState('');
  const navigate = useNavigate();

  // useEffect(() => {
  //   getAuth();
  //   let nombre = user.nombre_persona
  //   setNombreUser(nombre)
  // // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    // logout();
    navigate("/");
    setAnchorEl(null);
  };

  return (
    <>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar>
              <SideBar />
              {/* <SideBarr /> */}
              <div className="d-flex justify-content-between align-items-center w-100">
                <img src={logoMuni} className="logoMuni2" />
                  <div className="d-flex align-items-center">
                    <p className="m-0">
                      {/* {nombreUser} */}
                      usuario
                      </p>
                    <IconButton
                      size="large"
                      aria-label="account of current user"
                      aria-controls="menu-appbar"
                      aria-haspopup="true"
                      onClick={handleMenu}
                      color="inherit"
                    >
                      <AccountCircle
                      />
                    </IconButton>
                    <Menu
                      className="logOut"
                      id="menu-appbar"
                      anchorEl={anchorEl}
                      anchorOrigin={{
                        vertical: "top",
                        horizontal: "right",
                      }}
                      keepMounted
                      transformOrigin={{
                        vertical: "top",
                        horizontal: "right",
                      }}
                      open={Boolean(anchorEl)}
                      onClose={handleClose}
                    >
                      <MenuItem onClick={handleLogout}>Cerrar Sesión</MenuItem>
                    </Menu>
                  </div>
              </div>
              {/* <Search>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search…"
                  inputProps={{ "aria-label": "search" }}
                />
              </Search> */}
            </Toolbar>
          </AppBar>
        </Box>
        {/* <NavBarEsqueleto /> */}
        <></>
    </>
  );
}
