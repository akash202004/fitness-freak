import { Stack, Typography, Box } from "@mui/material";
import Logo from "../../public/assets/images/Logo-1.png";

const Footer = () => {
  return (
    <Box mt="80px" bgcolor="#FFF3F4">
      <Stack alignItems="center" px="50px" py="30px">
        <img src={Logo} alt="Logo" height="40px" />
      </Stack>
    </Box>
  );
};

export default Footer;
