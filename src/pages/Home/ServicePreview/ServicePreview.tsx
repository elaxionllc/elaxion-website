import {
  Container,
  Grid,
  Typography,
  Button,
  Paper,
  Stack,
  styled,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import AdjustIcon from "@mui/icons-material/Adjust";

import svc1 from "./assets/svc1.webp";
import svc2 from "./assets/svc2.webp";
import svc3 from "./assets/svc3.webp";
import featureBenefit from "../Hero/assets/electrical city 2.jpg";
import "./service-preview.css";
import StyledSectionGrid from "../StyledSectionGrid";
import { useNavigate } from "react-router-dom";
import CustomScrollFade from "../../../components/CustomScrollFade/CustomScrollFade";
import CustomScrollSlide from "../../../components/CustomScrollSlide/CustomScrollSlide";

const ReadMoreButton = styled(Button)(({ theme }) => ({
  [theme.breakpoints.up("md")]: {
    position: "absolute",
    bottom: 0,
  },
  paddingLeft: 0,
  paddingTop: 40,
}));

const ServiceItemGrid = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.up("md")]: {
    height: 700,
  },
}));

const StyledAdjustIcon = styled(AdjustIcon)(({ theme }) => ({
  color: theme.palette.success.main,
}));

const StyledList = styled(List)(() => ({
  marginLeft: -20,
}));

const StyledImage = styled("img")(() => ({
  width: "100%",
  borderRadius: 16,
}));

const ServicePreview = () => {
  const navigate = useNavigate();

  const features = [
    "Modernizing Solutions",
    "Infrastructure and Cloud Services",
    "Expert Consulting and Advising",
    "Tailored Software Development",
    "Ongoing Support",
  ];

  const benefits = [
    "Modernizing Solutions",
    "Infrastructure and Cloud Services",
    "Expert Consulting and Advising",
    "Tailored Software Development",
    "Ongoing Support",
  ];

  return (
    <Container
      sx={{
        backgroundColor: "white",
        paddingTop: '5rem',
      }}
    >
      <CustomScrollSlide
        direction="right"
        in={true}
        timeout={500}
        mountOnEnter
        unmountOnExit
      >
        <Typography variant="h2">Empowering Your Business</Typography>
      </CustomScrollSlide>

      <StyledSectionGrid>
        <Grid container spacing={3} style={{ position: "relative" }}>
          <ServiceItemGrid item md={4} xs={12}>
            <CustomScrollFade delay={500}>
              <Paper elevation={0} style={{ padding: "16px" }}>
                <StyledImage src={svc1} />
                <Typography variant="h6">
                  Cultivating Your Digital Transformation
                </Typography>
                <Typography component="p">
                  Our software development offerings are finely tuned to align
                  with your business objectives and priorities, assuring the
                  delivery of innovative, high-quality software solutions that
                  empower your digital transformation endeavors.
                </Typography>

                <ReadMoreButton onClick={() => navigate("services")}>
                  Read more
                </ReadMoreButton>
              </Paper>{" "}
            </CustomScrollFade>
          </ServiceItemGrid>

          <ServiceItemGrid item md={4} xs={12}>
            <CustomScrollFade>
              <Paper elevation={0} style={{ padding: "16px" }}>
                <StyledImage src={svc2} />
                <Typography variant="h6">
                  Empowerment through Modernization
                </Typography>
                <Typography component="p">
                  In a rapidly evolving digital landscape, we specialize in
                  revitalizing your existing solutions by integrating the latest
                  technological advancements. Our expertise ensures that your
                  business stays ahead of the curve, harnessing innovation to
                  drive efficiency, scalability, and competitiveness.
                </Typography>

                <ReadMoreButton>Read more</ReadMoreButton>
              </Paper>
            </CustomScrollFade>
          </ServiceItemGrid>

          <ServiceItemGrid item md={4} xs={12}>
            <CustomScrollFade>
              <Paper elevation={0} style={{ padding: "16px" }}>
                <StyledImage src={svc3} />
                <Typography variant="h6">Strategic Partnership</Typography>
                <Typography component="p">
                  Our distinctive service offering is designed to seamlessly
                  integrate with your team, functioning as a trusted extension
                  of your workforce. We prioritize agility, adapting to your
                  ever-changing needs, and delivering dedicated and skilled
                  professionals to bolster your operations. With tailored
                  collaboration, we enable nimble success through shared
                  expertise, resources, and a unified vision for growth and
                  achievement.
                </Typography>

                <ReadMoreButton>Read more</ReadMoreButton>
              </Paper>
            </CustomScrollFade>
          </ServiceItemGrid>
        </Grid>

        <StyledSectionGrid>
          <div className="feature">
            <div className="feature-text">Features &amp; Benefits</div>
          </div>
        </StyledSectionGrid>

        <Grid container spacing={3}>
          <Grid item md={4} xs={12}>
            <Paper elevation={0} style={{ padding: "16px" }}>
              <Typography variant="h5">Features</Typography>

              <StyledList>
                {features.map((item) => (
                  <ListItem key={item}>
                    <ListItemIcon>
                      <StyledAdjustIcon />
                    </ListItemIcon>
                    <ListItemText>{item}</ListItemText>
                  </ListItem>
                ))}
              </StyledList>
            </Paper>
          </Grid>

          <Grid item md={4} xs={12}>
            <Paper elevation={0} style={{ padding: "16px" }}>
              <Typography variant="h5">Benefits</Typography>
              <StyledList>
                {benefits.map((item) => (
                  <ListItem key={item}>
                    <ListItemIcon>
                      <StyledAdjustIcon />
                    </ListItemIcon>
                    <ListItemText>{item}</ListItemText>
                  </ListItem>
                ))}
              </StyledList>
            </Paper>
          </Grid>

          <Grid item md={4} xs={12}>
            <Paper elevation={0} style={{ padding: "16px" }}>
              <StyledImage src={featureBenefit} />
            </Paper>
          </Grid>
        </Grid>
      </StyledSectionGrid>
    </Container>
  );
};

export default ServicePreview;
