import { styled, Container } from "@mui/material";

const StyledAltContainer = styled(Container)(({ theme }) => ({
    
  }));

StyledAltContainer.defaultProps={
  maxWidth: 'xl',
  sx:{
   maxWidth: 1
  }
}

  export default StyledAltContainer