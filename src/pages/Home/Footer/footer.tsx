import { Container } from "@mui/material";
import StyledSectionGrid from "../StyledSectionGrid";
import StyledAltContainer from "../Hero/StyledAltContainer";

const Footer = () => {
  return (
    <StyledAltContainer maxWidth={false}>
      <Container>
        <StyledSectionGrid container spacing={3}>
          test
        </StyledSectionGrid>
      </Container>
    </StyledAltContainer>
  );
};

export default Footer;
