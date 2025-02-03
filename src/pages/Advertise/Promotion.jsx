import React from 'react'
import { Container, Typography, Button, Box } from '@mui/material';
import Promote from "../../Assets/Prmotion.svg"
import Heading from '../../components/Headings/Heading';

const Promotion = () => {
    return (
        <>
            <Container sx={{ paddingY: '2rem', maxWidth: '800px', marginY: "3rem" }}>
                <Heading heading="Promote with Collegecue" />
                <Typography variant="body1" paragraph>
                    We are the most cutting-edge and engaging educational portal in India, with an experience that is ergonomically intended to maximize conversion. Students, parents, and instructors looking for information about higher education can find what they need on Collegecue.com. The website offers mailers services on our opt-in mailer database, text links, side bar banners, and footer banners.
                </Typography>
                <Box sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    gap: "3rem",
                    '@media(max-width : 770px)': {
                        flexDirection: "column"
                    }
                }}>
                    <Box>
                        <Typography variant="body1" paragraph>
                            <strong>What do we provide?</strong>
                        </Typography>
                        <Typography variant="body1" paragraph>
                            <strong>Academic Institutions:</strong>
                        </Typography>
                        <ul>
                            <li>Building an independent website for the organization</li>
                            <li>Adaptive display of images and other creative</li>
                            <li>Increased user engagement and click-through rate are assured</li>
                            <li>Choice to switch to referral links for traffic</li>
                            <li>Integrate your own API to receive real-time alerts when candidates request information</li>
                        </ul>
                        <Typography variant="body1" paragraph>
                            <strong>Promoters:</strong>
                        </Typography>
                        <ul>
                            <li>Lots of room for banners from other parties</li>
                            <li>Algorithm to modify banner placement only on pertinent pages</li>
                            <li>Ad Rotation Policy to guarantee long-term advertisement reach and frequency of ad viewing</li>
                        </ul>
                    </Box>

                    <img src={Promote} alt="@BharatTech" style={{ width: "30vw" }} />

                </Box>
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "row",
                        flexWrap: "wrap",
                        alignItems: "center",
                        gap: "2rem",
                        marginY: "1rem"
                    }}>
                    <Typography
                        sx={{
                            fontSize: '1rem',
                            fontWeight: '500',
                            marginY: '1rem',
                        }}
                        paragraph
                    >
                        To learn more, send us an email at
                    </Typography>
                    <Button color="primary" href="mailto:promotion@collegecue.com" sx={{ textTransform: 'lowercase', fontSize: "1rem" }}>
                        promotion@collegecue.com
                    </Button>
                </Box>
            </Container>
        </>
    )
}

export default Promotion;
