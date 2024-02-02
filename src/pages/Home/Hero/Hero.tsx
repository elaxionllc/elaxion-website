import { Container, Grid, Typography, styled, Box } from "@mui/material";
import StyledHomeButton from "../StyledHomeButton/StyledHomeButton";
import StyledSectionGrid from "../StyledSectionGrid";
import StyledAltContainer from "./StyledAltContainer";
import { useNavigate } from "react-router-dom";
import otherHeroImage from "../../../assets/TechTouch.jpg";
import CustomSlide from "../../../components/CustomSlide/CustomSlide";

const HighlightedText = styled(Typography)(({ theme }) => ({
  color: "#F299D9",
  textShadow: "3px 3px 7px #0000002e",
}));

const HighlightedTextComponent = ({ ...props }) => {
  return (
    <HighlightedText
      display={"inline"}
      variant="inherit"
      {...props}
    ></HighlightedText>
  );
};

const Hero = () => {
  const navigate = useNavigate();

  return (
    <Container
      maxWidth={false}
      sx={{
        background: `url(${otherHeroImage}) center/cover no-repeat black`,
        position: "relative",
        height: "100vh",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.6)",
        },
      }}
    >
      <Container maxWidth='xl'>
        <Grid container>
          <Grid item id="123" >
            <Grid
              container
              spacing={3}
              height={"100%"}
              style={{ marginBottom: 15, marginTop: 15 }}
            >
              <Grid item xs={12} md={6} position="relative">
                <Typography
                  variant="h1"
                  sx={{
                    mb: 5,
                    lineHeight: 0.9,
                    color: "white",
                  }}
                >
                  <CustomSlide
                    direction="right"
                    in={true}
                    mountOnEnter
                    unmountOnExit
                  >
                    <Box>Elevate your </Box>
                  </CustomSlide>
                  <CustomSlide
                    direction="right"
                    in={true}
                    mountOnEnter
                    unmountOnExit
                    delay={300}
                  >
                    <Box>
                      <HighlightedTextComponent
                        sx={{
                          letterSpacing: "1rem",
                        }}
                      >
                        Digital{" "}
                      </HighlightedTextComponent>
                    </Box>
                  </CustomSlide>

                  <CustomSlide
                    direction="right"
                    in={true}
                    mountOnEnter
                    unmountOnExit
                    delay={600}
                  >
                    <Box>Transformation</Box>
                  </CustomSlide>
                </Typography>

                <CustomSlide
                  direction="right"
                  in={true}
                  mountOnEnter
                  unmountOnExit
                  delay={1300}
                >
                  <Box>
                    <Typography
                      variant="h3"
                      sx={{
                        lineHeight: 1.2,
                        color: "white",
                      }}
                    >
                      Our seasoned team specializes in tailored{" "}
                      <HighlightedTextComponent>
                        solutions
                      </HighlightedTextComponent>
                      , catering to businesses of every scale, and offers
                      invaluable{" "}
                      <HighlightedTextComponent>
                        consulting
                      </HighlightedTextComponent>
                      ,{" "}
                      <HighlightedTextComponent>
                        strategic guidance
                      </HighlightedTextComponent>
                      , and top-tier software{" "}
                      <HighlightedTextComponent>
                        development
                      </HighlightedTextComponent>{" "}
                      services.
                    </Typography>
                    <StyledHomeButton
                      variant="contained"
                      onClick={() => navigate("about/consulting")}
                    >
                      Get started
                    </StyledHomeButton>
                  </Box>
                </CustomSlide>
              </Grid>
              {/* <Grid item xs={12} md={6}>
                <img
                  src={hero_image}
                  style={{
                    borderRadius: 8,
                    width: "100%", // Set width to 100% on mobile
                    maxWidth: "540px", // Set a maximum width to maintain image quality
                    height: "auto", // Maintain the aspect ratio
                  }}
                />
              </Grid> */}
            </Grid>
          </Grid>
        </Grid>
      </Container>

    </Container>
  );
};

export default Hero;
