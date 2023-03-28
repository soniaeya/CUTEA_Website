
import ResponsiveAppBar from "../components/ResponsiveAppBar";
import Container from "@mui/material/Container";
import React, { useContext } from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import FacebookIcon from '@mui/icons-material/Facebook';
import Link from "next/link";
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function Contact() {
    const handleClickFb = () => {
        // Navigate to the URL when the button is clicked
        window.location.href = 'https://www.facebook.com/groups/cutea/';
    };
    const handleClickInsta = () => {
        // Navigate to the URL when the button is clicked
        window.location.href = 'https://www.instagram.com/cutea_club/';
    };

    const handleClickLinkedin = () => {
        // Navigate to the URL when the button is clicked
        window.location.href = 'https://www.linkedin.com/in/cutea-club-960ab1266/';
    };

    return <div>
        <ResponsiveAppBar></ResponsiveAppBar>
        <Container style={{ marginTop: '100px' }} maxWidth="lg">
            <h1>Contact Us</h1>
            <p>
                <InstagramIcon onClick={handleClickInsta}></InstagramIcon> Instagram: <Link href="https://www.instagram.com/cutea_club/">@cutea_club</Link>
                <br/><br/>
                <MailOutlineIcon></MailOutlineIcon> Email: cuteaclubhouse@gmail.com
                <br/><br/>
                <FacebookIcon onClick={handleClickFb}></FacebookIcon>   Facebook: <Link href="https://www.facebook.com/groups/cutea/">https://www.facebook.com/groups/cutea/</Link>
                <br/><br/>
                <LinkedInIcon onClick={handleClickLinkedin}></LinkedInIcon>    Linkedin: <Link href="https://www.linkedin.com/in/cutea-club-960ab1266/">https://www.linkedin.com/in/cutea-club-960ab1266/</Link>
            </p>
        </Container>

    </div>
}