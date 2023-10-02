import React from "react";
import { AppBar, Toolbar, styled } from "@mui/material";
import { Menu } from "@mui/icons-material";

const StyleHeader = styled(AppBar)`
width: 100%;
  background: white;
  height: 70px;
`;
const MenuIcon = styled(Menu)`
  color: #080808;
`;
const Image = styled("img")`
  height: 55px;
  margin: auto;
  padding-right: 70;
`;

const Header = () => {
  const url =
    "https://assets.inshorts.com/website_assets/images/logo_inshorts.png";
  return (
    <StyleHeader position="static">
      <Toolbar>
        <MenuIcon></MenuIcon>
        <Image src={url} alt="logo" />
      </Toolbar>
    </StyleHeader>
  );
};

export default Header;
