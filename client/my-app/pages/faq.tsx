import React from 'react';
import ResponsiveAppBar from "@/components/ResponsiveAppBar";
import {List, ListItem} from "@mui/material";
import Container from "@mui/material/Container";

const Faq = () => {
    return (
        <div>
            <ResponsiveAppBar></ResponsiveAppBar>
            <Container style={{ marginTop: '100px' }} maxWidth="lg">
                <h1 style={{textAlign: "center"}}>FAQ</h1>
            </Container>
            
        </div>
    );
};

export default Faq;