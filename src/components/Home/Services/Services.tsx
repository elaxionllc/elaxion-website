import ServiceScroller, { ServiceScrollerProp } from './ServiceScroller';

import * as dt from './assets/digital-transformation2.png'
import * as rbi from './assets/reporting-bi.png'

const Services = () => {

    const services: ServiceScrollerProp = {
        services: [
            {
                Id: 1,
                BackgroundImage: `${dt.default}`,
                OverlayBackgroundColor: 'rgb(38 54 74 / 68%)',
                OverlayBackgroundImage: 'linear-gradient(rgb(39 59 87 / 65%), rgb(174 248 254 / 34%) 39%, rgba(20, 20, 20, 0))',
                // BackgroundImage: 'https://assets-global.website-files.com/65a8ae332eab54a3194bad66/65a8afcafde87aa48a144d27_Proj%20Thumbnail%203-min.jpg',
                SubTitle: 'Modernization and transformation in software solutions',
                Title: 'Digital Transformation',
                Url: '#',
                Body: "We specializes in crafting modern, scalable solutions designed to meet the unique needs of businesses of any size. As a trusted partner, we consistently deliver high-performance, secure software systems. Whether you're a startup or an established corporation, we're committed to providing excellence and helping you reach your objectives"
            },
            {
                Id: 2,
                OverlayBackgroundColor: 'rgb(147 123 107 / 68%)',
                OverlayBackgroundImage: 'linear-gradient(rgb(157 84 36 / 65%), rgba(20, 20, 20, .7) 39%, rgba(20, 20, 20, 0))',
                BackgroundImage: `${rbi.default}`,
                SubTitle: 'Driving growth through tailored insights and precision analytics',
                Title: 'Reporting and BI',
                Url: '#',
                Body: 'Unlock growth potential with data-driven decisions tailored to your needs. We focus on building and customizing tools like business intelligence dashboards, detailed reporting systems, and reliable data warehousing solutions. This way, you get precisely what your business requires to gain valuable insights and drive growth.'
            },

            {
                Id: 3,
                OverlayBackgroundColor: 'rgb(158 74 90 / 68%)',
                OverlayBackgroundImage: 'linear-gradient(rgb(205 72 96 / 65%), rgba(20, 20, 20, .7) 39%, rgba(20, 20, 20, 0))',
                BackgroundImage: 'https://assets-global.website-files.com/65a8ae332eab54a3194bad66/65a8af99b60abd235dc360f0_Proj%20Thumbnail%202-min.jpg',
                SubTitle: 'Software automation solutions for streamlined operations',
                Title: 'Driving Efficiency',
                Url: '#',
                Body: 'Cut down on manual tasks and expenses by automating critical business processes. Harness the capabilities of AI, robotic process automation, and other cutting-edge automation solutions to streamline operations'
            },
            {
                Id: 4,
                OverlayBackgroundColor: 'rgb(145 105 33 / 65%)',
                OverlayBackgroundImage: 'linear-gradient(rgb(145 105 33 / 65%), rgb(174 248 254 / 34%) 39%, rgba(20, 20, 20, 0))',
                BackgroundImage: 'https://assets-global.website-files.com/65a8ae332eab54a3194bad66/65a8af99b60abd235dc360f0_Proj%20Thumbnail%202-min.jpg',
                SubTitle: 'Maximizing operational effectiveness through collaboration',
                Title: 'Strategic Partnership',
                Url: '#',
                Body: 'Our service seamlessly integrates with your team, functioning as a trusted extension of your workforce. We adapt to your changing needs, provide skilled professionals, and shoulder some workload so your team can focus on critical tasks. Together, we leverage collective knowledge and resources, driving progress and ensuring measurable returns on your investment'
            },
        ]
    }

    return (


        <>
            <ServiceScroller {...services} />
        </>

    );
};

export default Services;
