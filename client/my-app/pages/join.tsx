import ResponsiveAppBar from "../components/ResponsiveAppBar";
import Container from "@mui/material/Container";
import React, { useContext } from 'react';

export default function Join() {
    return <div>
        <ResponsiveAppBar></ResponsiveAppBar>
        <Container style={{ marginTop: '100px' }} maxWidth="lg">
            <h1>Join Us</h1>
            <p>
                Mailing List
            </p>
        </Container>

    </div>
}