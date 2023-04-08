import React from 'react';
import ResponsiveAppBar from "@/components/ResponsiveAppBar";
import {List, ListItem} from "@mui/material";
import Container from "@mui/material/Container";
import Background from "@/components/Background"
import CutePattern from "@/public/cute-pattern.jpg"
import TitleBanner from "@/components/TitleBanner";

const Faq = () => {
    return (
        <>
        <TitleBanner title={"FAQ"} bckcolor={"#f2e7e1"} fontColor={"#82bdae"}></TitleBanner>
        <Background backgroundImg={CutePattern}>
            {/*<ResponsiveAppBar></ResponsiveAppBar>*/}
            {/*<Container style={{ marginTop: '100px' }} maxWidth="lg">*/}
            {/*    <h1 style={{textAlign: "center"}}>FAQ</h1>*/}



            {/*</Container>*/}
        </Background>
        </>
    );
};

export default Faq;