import { styled, Button } from "@mui/material";

const StyledHomeButton = styled(Button)(({ theme }) => ({
  minWidth: 200,
  minHeight: 50,
  marginTop: '5rem',
  [theme.breakpoints.up("md")]: {
  
  },
}));

export default StyledHomeButton;
