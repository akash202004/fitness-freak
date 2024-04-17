import { Box, Button, Typography } from "@mui/material";

const HeroBanner = () => {
  return (
    <Box
      sx={{
        mt: { lg: "212px", xs: "70px" },
        ml: { sm: "50px" },
      }}
      position="relative"
      p="20px"
    >
      <Typography color="#FF2625" fontWeight="600" fontSize="32px">
        Fitness Freak
      </Typography>
      <Typography
        fontWeight="600"
        sx={{ fontSize: { lg: "44px", sx: "40px" } }}
        mt="30px"
      >
        Empowering your <br /> fitness journey
      </Typography>
      <Typography fontSize="22px" lineHeight="35px" mb={3}>
        Check out the most effective exercises
      </Typography>
      <Button
        sx={{ backgroundColor: "#FF2625", padding: "15px" }}
        href="#exercises"
        variant="contained"
        color="error"
      >
        Explore Exercises
      </Button>
      <Typography
        fontSize="200px"
        fontWeight="600"
        color="#FF2625"
        sx={{ opacity: 0.1, display: { lg: "block", sx: "none" } }}
      >
        Exercise
      </Typography>
      <img
        src="https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="banner"
        className="hero-banner-img"
      />
    </Box>
  );
};

export default HeroBanner;
