import ResponsiveAppBar from "../components/ResponsiveAppBar";
import Container from "@mui/material/Container";
import React, { useContext } from 'react';

import MailingListForm from "../components/MailingListForm"

export default function Join() {
    return <div>
        <ResponsiveAppBar></ResponsiveAppBar>
        <Container style={{ marginTop: '100px' }} maxWidth="lg">
            <h1>Join Us</h1>
            <p>
                Subscribe to our mailing list to have keep up to date with club activities!




            </p>
            <MailingListForm></MailingListForm>
        </Container>

    </div>
}