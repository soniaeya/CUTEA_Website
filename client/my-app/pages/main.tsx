import React from 'react';
import {motion} from "framer-motion";
import {YouTubeEmbed} from "react-social-media-embed";
import MatchaMarble from "@/public/matcha-marble.jpg"
import Background from "@/components/Background";
import TitleBanner from "@/components/TitleBanner";

const Main = () => {
    return (

            <Background backgroundImg={MatchaMarble} >
                <TitleBanner title={"Cutea"} bckcolor={"#bad1c3"} fontColor={"#c94e14"}></TitleBanner>
                {/*<h1 style={{textAlign: "center", fontSize: 100}}>Welcome to CUTEA!</h1>*/}
                {/*<p style={{textAlign: "center", fontSize: 22}}>We are the Concordia University Tea Enthusiast Association (CUTEA)</p>*/}
                {/*<div style={{ display: 'flex', justifyContent: 'center' }}>*/}
                {/*    <YouTubeEmbed url="https://www.youtube.com/watch?v=VyzI9Q1KByQ" width={650} height={440} />*/}
                {/*</div>*/}
            </Background>


    );
};

export default Main;