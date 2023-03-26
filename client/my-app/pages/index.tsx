
import React, { useContext } from 'react';

import ResponsiveAppBar from "../components/ResponsiveAppBar";
import Container from "@mui/material/Container";



export default function Home() {
    return (
        <div>
            <ResponsiveAppBar></ResponsiveAppBar>

            <Container style={{ marginTop: '100px' }} maxWidth="lg">
                <h1>Welcome to CUTEA!</h1>
                <p>Concordia University Tea Enthusiast Association (CUTEA)</p>

            </Container>
        </div>
    )
}