import { Container, styled } from "@mui/system"
import './Stats.css'

const Section = styled('section')({

})
const Stats = () => {
    return (
        <Section className="section">
            <Container className="section-content" maxWidth={'lg'}>
                <div>
                    <div className="stat">80%</div>
                    <div className="stat-desc">of 500+ companies work with us</div>
                </div>
                <div>
                    <div className="stat">20+</div>
                    <div className="stat-desc">years on the market</div>
                </div>
                <div>
                    <div className="stat">12%</div>
                    <div className="stat-desc"> average income growth with us</div>
                </div>
            </Container>
        </Section>
    )
}

export default Stats