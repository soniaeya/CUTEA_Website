
import ResponsiveAppBar from "../components/ResponsiveAppBar";
import Container from "@mui/material/Container";
import React, { useContext } from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import FacebookIcon from '@mui/icons-material/Facebook';
import Link from "next/link";

export default function Contact() {
    const handleClickFb = () => {
        // Navigate to the URL when the button is clicked
        window.location.href = 'https://www.facebook.com/groups/cutea/';
    };
    const handleClickInsta = () => {
        // Navigate to the URL when the button is clicked
        window.location.href = 'https://www.instagram.com/cutea_club/';
    };

    return <div>
        <ResponsiveAppBar></ResponsiveAppBar>
        <Container style={{ marginTop: '100px' }} maxWidth="lg">
            <h1>Contact Us</h1>
            <p>
                <InstagramIcon onClick={handleClickInsta}></InstagramIcon> Instagram: <Link href="https://www.instagram.com/cutea_club/">@cutea_club</Link>
                <br/>
                <MailOutlineIcon></MailOutlineIcon> Email: cuteaclubhouse@gmail.com
                <br/>
                <FacebookIcon onClick={handleClickFb}></FacebookIcon>   Facebook: <Link href="https://www.facebook.com/groups/cutea/">https://www.facebook.com/groups/cutea/</Link>


            </p>
        </Container>

    </div>
}