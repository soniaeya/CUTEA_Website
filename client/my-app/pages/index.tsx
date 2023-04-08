
import React, { useContext } from 'react';

import ResponsiveAppBar from "../components/ResponsiveAppBar";
import {Container, List, ListItem} from "@mui/material";
import { YouTubeEmbed } from 'react-social-media-embed';
import styled from "styled-components"
import {motion} from "framer-motion"
import About from "./about"
import GreenTiles from "../public/green-tiles.jpg"
import CardMedia from '@mui/material/CardMedia';

export default function Home() {

    return (
        <CardMedia image="../public/green-tiles.jpg"
                   alt="My Image" sx={{
            height: 300,
            objectFit: "cover"
        }}>
            <ResponsiveAppBar></ResponsiveAppBar>
            <MainContainer image={<GreenTiles/>}  maxWidth="lg">
                <motion.h1 initial={{opacity: 0}} animate={{opacity: 1}} style={{textAlign: "center", fontSize: 100}}>Welcome to CUTEA!</motion.h1>
                <p style={{textAlign: "center", fontSize: 22}}>We are the Concordia University Tea Enthusiast Association (CUTEA)</p>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <YouTubeEmbed url="https://www.youtube.com/watch?v=VyzI9Q1KByQ" width={650} height={440} />
                </div>

            </MainContainer>
            <About></About>
        </CardMedia>
    )
}

const MainContainer = styled(Container)`
  margin-top: 100px;
  height: 100vh;
  backgroundSize: cover;
  backgroundPosition: center;
  width: 100%;
  

`