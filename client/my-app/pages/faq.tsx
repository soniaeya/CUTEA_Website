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
        <TitleBanner title={"FAQ"} bckcolor={"#bad1c3"} fontColor={"#c94e14"}></TitleBanner>
        <Background backgroundImg={CutePattern}></Background>
            {/*<ResponsiveAppBar></ResponsiveAppBar>*/}
            {/*<Container style={{ marginTop: '100px' }} maxWidth="lg">*/}
            {/*    <h1 style={{textAlign: "center"}}>FAQ</h1>*/}



            {/*</Container>*/}
        </>
    );
};

export default Faq;