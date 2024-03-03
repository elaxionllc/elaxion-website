import { Container, styled } from '@mui/system';

import * as devIcon from './assets/ico-dev.svg'
import * as dataIcon from './assets/ico-data.svg'
import * as cloudIcon from './assets/icon-cloud.svg'
import * as infraIcon from './assets/ico-network.svg'
import * as consultingIcon from './assets/ico-advisory.svg'
import * as strategicIcon from './assets/ico-strategic.svg'
import { ReactNode } from 'react';
import { Link } from "react-router-dom";

const ServiceItem = (
  { title, iconPath, color, url, children }:
    { title: string, iconPath: string, color: string, url: string, children: ReactNode }) => {

  const ServiceItemContainer = styled('div')((props) => ({
    display: 'flex',
    flexDirection: 'column',
    minHeight: "66px",
    aspectRatio: "auto",
    textAlign: "center",
    objectFit: "cover",
    backgroundColor: "#fff",
    border: `1px solid ${color}`,
    borderRadius: "5px",
    padding: "10px",


    [props.theme.breakpoints.between('sm', 'md')]: {
      flex: '1 45%'
    },
    [props.theme.breakpoints.up('md')]: {
      flex: '1'
    },

  }));

  const SvcImage = styled('img')({
    alignSelf: "center",
    maxWidth: "28%",
    verticalAlign: "middle",
    display: "inline-block",
  });

  const SvcTitle = styled('h2')({
    color: `${color}`,
    fontSize: '17px',
    fontWeight: 800,
    letterSpacing: "7px",
    textTransform: "uppercase",
    lineHeight: "30px",
    fontFamily: 'line-height: 30px',
  });

  const SvcDescription = styled('p')({
    fontSize: '16px',
  });

  const SvcLearnMore = styled('div')({
    paddingTop: '10px',
    textAlign: 'left',
    display: "flex",
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: "auto",
  });

  const StyledLink = styled(Link)({
    color: "#1a1b1f",
    justifyContent: "flex-start",
    alignItems: "center",
    fontSize: "14px",
    lineHeight: "20px",
    textDecoration: "none",

  })

  return (
    <ServiceItemContainer>
      <SvcImage src={iconPath} />
      <SvcTitle>{title}</SvcTitle>
      <SvcDescription>
        {children}
      </SvcDescription>
      <SvcLearnMore>
        <StyledLink to={url}>Learn more</StyledLink>
        <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M11.13 8.5L6.87296 4.24291L5.87067 5.24379L9.129 8.5L5.87067 11.7555L6.87225 12.7571L11.13 8.5Z" fill="currentColor"></path>
        </svg>
      </SvcLearnMore>
    </ServiceItemContainer>
  )
}


const Services = ({ id }: { id: string }) => {
  // Styled components
  const ServicesContainer = styled(Container)({
    fontFamily: 'Playfair, sans-serif',
    paddingTop: '50px',
    marginBottom: '100px',
  });

  const Header = styled('h1')({
    textAlign: "center",
    letterSpacing: "5px",
    textTransform: "uppercase",
    fontSize: "30px",
    fontWeight: 300,
  });

  const ServicesList = styled('div')({
    display: 'flex',
    flexWrap: "wrap",
    gap: '15px'
  });

  return (
    <ServicesContainer maxWidth={'md'} id={id}>
      <Header>Our Solutions</Header>
      <ServicesList>
        <ServiceItem
          color="#a09dee"
          iconPath={devIcon.default}
          title="Development"
          url="../services/development">
          Our team facilitates business competitiveness by strategically building modernized applications, ensuring relevance, scalability and security tailor-made for your business
        </ServiceItem>

        <ServiceItem
          color="#9693ec"
          iconPath={dataIcon.default}
          title="Data Analytics"
          url="../services/data-analytics">
          Leverage data-driven insights for business growth. Use advanced BI dashboards, reporting tools, and data warehousing for informed decisions driving success
        </ServiceItem>

        <ServiceItem
          color="#d89364"
          iconPath={cloudIcon.default}
          title="Cloud Solutions"
          url="../services/cloud-solutions">
          Whether your team is already utilizing cloud services or contemplating migration, our expertise not only provides cost-effective solutions but also guides you through the process
        </ServiceItem>

        <ServiceItem
          color="#d89364"
          iconPath={infraIcon.default}
          title='Infrastructure Optimization'
          url="../services/infrastructure-optimization">
          Proactively manage infrastructure, safeguarding both hardware and endpoint devices for uninterrupted operations, peak performance, and seamless connectivity
        </ServiceItem>

        <ServiceItem
          color="#f0c08a"
          iconPath={consultingIcon.default}
          title="Consulting and Advisory"
          url="../services/consulting-advisory">
          With our expertise, we seamlessly align your business goals with the right technologies, offering valuable insights for optimal integration
        </ServiceItem>

        <ServiceItem
          color="#9ddeb2"
          iconPath={strategicIcon.default}
          title="Strategic Partnership"
          url="../services/strategic-partnership">
          We integrate closely with your team, operating as an extension of your organization. This strategic partnership enables us to prioritize your needs with agility and responsiveness, ensuring mutual success
        </ServiceItem>
      </ServicesList>
    </ServicesContainer>
  );
};

export default Services;
