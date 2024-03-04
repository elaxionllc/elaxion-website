import { Typography } from "@mui/material"
import { styled } from "@mui/system"


const FooterContainer = styled('div')({
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    color: 'white',
    height: '60px',
    fontFamily: 'Montserrat, sans-serif',
})

const AllRightsText = styled(Typography)({
    color:'#a3a3a3',
    paddingRight: '7px',
})
const CompanyText = styled(Typography)({

})


const Footer = () => {
    return (
        <FooterContainer>
            <AllRightsText>© All rights reserved by</AllRightsText>
            <CompanyText>Elaxion LLC</CompanyText>
        </FooterContainer>)
}

export default Footer