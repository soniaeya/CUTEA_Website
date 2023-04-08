import ResponsiveAppBar from "../components/ResponsiveAppBar";
import Container from "@mui/material/Container";
import {List, ListItem} from "@mui/material";
import React from "react";
import sakao from "../public/sakao.png"
import shamisen from "../public/shamisen.webp"
import venttea from "../public/venttea.jpg"
import cultivaction from "../public/cultivaction.jpeg"
import TeamPic from "@/public/Team Picture.png";
import Image from "next/image";
import {motion} from "framer-motion"


export default function About() {
    return <div>
        <ResponsiveAppBar></ResponsiveAppBar>
        <Container style={{ marginTop: '100px' }} maxWidth="lg">
            <Container maxWidth="lg">
                <h1 style={{textAlign: "center"}}>Our Club Values </h1>

                <List>
                    <ListItem sx={{ display: 'list-item', textAlign: "center"}}>Unite People from all around the world</ListItem>
                    <ListItem sx={{ display: 'list-item', textAlign: "center"}}>Form friendships/ Brotherhood and Sisterhood</ListItem>
                    <ListItem sx={{ display: 'list-item', textAlign: "center"}}>Create Experiences you’ll never forget</ListItem>
                </List>
            </Container>
            <Container >
                <h1 style={{textAlign: "center"}}>Companies/Organisation that work with us</h1>
                <Container style={{
                    justifyContent: "center",
                    marginLeft: 120
                }}>

                    <motion.div
                        style={{
                            width: 200,
                            height: 200,
                        }}
                        whileHover={{ rotate: 360 }}
                    >
                        <Image width={200} height={200} src={sakao} alt="sakao"></Image>
                    </motion.div>

                    <motion.div
                        style={{
                            width: 200,
                            height: 200,
                        }}
                        whileHover={{ rotate: 360 }}
                    >
                        <Image width={200} height={200} src={venttea} alt="venttea"></Image>
                    </motion.div>
                    <motion.div
                        style={{
                            width: 200,
                            height: 200,
                        }}
                        whileHover={{ rotate: 360 }}
                    >
                        <Image width={200} height={200} src={shamisen} alt="shamisen"></Image>
                    </motion.div>
                    <motion.div
                        style={{
                            width: 200,
                            height: 200,
                        }}
                        whileHover={{ rotate: 360 }}
                    >
                        <Image width={200} height={200} src={cultivaction} alt="cultivaction"></Image>
                    </motion.div>




                </Container>



            </Container>



        </Container>


    </div>
}