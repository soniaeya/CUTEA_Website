
import React, { useContext } from 'react';

import ResponsiveAppBar from "../components/ResponsiveAppBar";
import {Container, List, ListItem} from "@mui/material";
import { YouTubeEmbed } from 'react-social-media-embed';
import styled from "styled-components"
import {motion} from "framer-motion"
import About from "./about"
import School from "./school"
import Create from "./create"
import Main from "./main"
import GreenTiles from "../public/green-tiles.jpg"
import CardMedia from '@mui/material/CardMedia';
import TitleBanner from "../components/TitleBanner"
import Background from "@/components/Background";
import Faq from "@/pages/faq";
import PageContainer from "@/components/PageContainer";
import CommonButton from "@/components/CommonButton";

export default function Home() {

    return (
        <>
            <ResponsiveAppBar></ResponsiveAppBar>
            <PageContainer>

            </PageContainer>
            <CommonButton text={"Contact Us"}></CommonButton>



        </>
    )
}



