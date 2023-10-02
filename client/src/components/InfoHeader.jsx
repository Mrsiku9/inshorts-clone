import React from "react";
import { Box, Typography ,styled} from "@mui/material";

const Container = styled(Box)(({theme}) => ({
    backgroundColor:" #fa0a16",
    color:" #fcf9f6",
    display:" flex",
    alignItems: "center",
    height: '50',
    [theme.breakpoints.down("md")]: {
      display:"none"
    }
  }))
const Image = styled("img")({
    height: 34,
    '&:last-child':{
        margin:' 0 20px 0 10px'
    }
})
const Text = styled(Typography)`
    font-size: 15px;
    font-weight: 300;
    margin-left: 50px;

`

const InfoHeader = () => {
  const appleStore =
    "https://assets.inshorts.com/website_assets/images/appstore.png";
  const googleStore =
    "https://assets.inshorts.com/website_assets/images/playstore.png";
  return (
    <Container>
      <Text>
        For the best experience use inshorts app on your smartphone
      </Text>
      <Box style={{display:"flex" , marginLeft:"auto"}}>
        <Image src={appleStore} alt="applestore" />
        <Image src={googleStore} alt="googlestore" />
      </Box>
    </Container>
  );
};

export default InfoHeader;
