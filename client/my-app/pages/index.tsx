
import React, { useContext } from 'react';

import ResponsiveAppBar from "../components/ResponsiveAppBar";
import {Container} from "@mui/material";



export default function Home() {

    return (
        <div>
            <ResponsiveAppBar></ResponsiveAppBar>
            <Container style={{ marginTop: '100px' }} maxWidth="lg">
                <h1>Welcome to CUTEA!</h1>
                <p>We are the Concordia University Tea Enthusiast Association (CUTEA)</p>
            </Container>

        </div>
    )
}