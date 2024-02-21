import { styled } from '@mui/system';
import ServiceItem, { ServiceItemProp } from './ServiceItem';

export type ServiceScrollerProp = {
    services: Array<ServiceItemProp>
}

const Section = styled('section')({
    // Your section styles here
    paddingTop: "0px",
    marginTop: "0px"
});

const ListContainer = styled('div')({
    // Your list container styles here
});

const ServiceScroller = (props: ServiceScrollerProp) => {
    return (
        <Section className="section">
            <ListContainer className="">
                <div role="list" className="">
                    {
                        props.services.map((item) =>
                            <ServiceItem {...item} key={item.Id} />
                        )
                    }
                </div>
            </ListContainer>
        </Section>
    );
};

export default ServiceScroller;
