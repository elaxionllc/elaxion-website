import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import logo2 from "../../assets/logo/icon-text-sidebyside-no-shadow-logo.png";
import { Container } from '@mui/material';

export default function DenseAppBar() {
  return (
    <AppBar position="static" elevation={0} sx={{ backgroundColor: 'white' }}>
      <Container maxWidth={'lg'}>
        <Toolbar >
          <img src={logo2} width={"190px"} />
        </Toolbar>
      </Container>

    </AppBar>
  );
}