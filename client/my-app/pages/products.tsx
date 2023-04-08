import ResponsiveAppBar from "../components/ResponsiveAppBar";
import Container from "@mui/material/Container";
import React, { useContext } from 'react';

export default function Products() {
    return <div>
            <ResponsiveAppBar></ResponsiveAppBar>
        <Container style={{ marginTop: '100px' }} maxWidth="lg">
            <h1 style={{textAlign: "center"}}>Products</h1>
        </Container>

    </div>
}