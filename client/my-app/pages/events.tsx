import ResponsiveAppBar from "../components/ResponsiveAppBar";
import Container from "@mui/material/Container";
import React, { useContext } from 'react';
import EventList from "../components/EventList"
export default function Events() {
    return <div>
            <ResponsiveAppBar></ResponsiveAppBar>
        <Container style={{ marginTop: '100px' }} maxWidth="lg">
        <h1 style={{textAlign: "center"}}>Previous Events</h1>
            <EventList></EventList>
    </Container>

    </div>
}