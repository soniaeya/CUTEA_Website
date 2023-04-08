
import React, { useContext } from 'react';

import ResponsiveAppBar from "../components/ResponsiveAppBar";
import {Container, List, ListItem} from "@mui/material";
import { YouTubeEmbed } from 'react-social-media-embed';
import styled from "styled-components"
import {motion} from "framer-motion"
import About from "./about"
import School from "./school"
import Create from "./create"
import GreenTiles from "../public/green-tiles.jpg"
import CardMedia from '@mui/material/CardMedia';
import TitleBanner from "../components/TitleBanner"
import Background from "@/components/Background";

export default function Home() {

    return (
        <>
            <ResponsiveAppBar></ResponsiveAppBar>

            <MainContainer maxWidth="lg">
                <motion.h1 initial={{opacity: 0}} animate={{opacity: 1}} style={{textAlign: "center", fontSize: 100}}>Welcome to CUTEA!</motion.h1>
                <p style={{textAlign: "center", fontSize: 22}}>We are the Concordia University Tea Enthusiast Association (CUTEA)</p>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <YouTubeEmbed url="https://www.youtube.com/watch?v=VyzI9Q1KByQ" width={650} height={440} />
                </div>

            </MainContainer>
            <TitleBanner title="About"/>
            <School></School>
            <Create></Create>

        </>
    )
}

const MainContainer = styled(Container)`
  margin-top: 100px;
  height: 100vh;
  backgroundSize: cover;
  backgroundPosition: center;
  width: 100%;
`
