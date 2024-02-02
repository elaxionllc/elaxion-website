import {
  Container,
  Grid,
  Typography,
  Button,
  styled,
  Box,
} from "@mui/material";
import hero_image from "./assets/electrical city.jpg";

const Hero2 = () => {
  return (
    <Container
      maxWidth={false}
      sx={{
        height: 500,
        position: "relative",
      }}
    >
      <Container
        sx={{
          backgroundImage: `url('${hero_image}')`,
          backgroundSize: "contain",
          backgroundPosition: "right",
          backgroundRepeat: "no-repeat",
          height: "100%",
          width: "100%",
          position: "relative",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: 0,
            right: 100,
            bottom: 0,
            left: 0,
            background: "linear-gradient(to left, transparent 19%, black 37%)",
          }}
        ></Box>

        {/* <StyledSectionGrid container spacing={3}>

        </StyledSectionGrid> */}
      </Container>
    </Container>
  );
};

export default Hero2;
