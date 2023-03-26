import ResponsiveAppBar from "../components/ResponsiveAppBar";
import Container from "@mui/material/Container";
import React, { useContext } from 'react';

export default function Events() {
    return <div>
            <ResponsiveAppBar></ResponsiveAppBar>
        <Container style={{ marginTop: '100px' }} maxWidth="lg">
        <h1>Events</h1>
    </Container>

    </div>
}