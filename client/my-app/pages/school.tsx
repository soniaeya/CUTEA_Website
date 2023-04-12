import React from 'react';
import ResponsiveAppBar from "@/components/ResponsiveAppBar";
import {Container} from "@mui/material";
import pink_tea from "../public/pink_tea.jpg"

import Image from "next/image";
import styled from "styled-components";
import Box from "@mui/material/Box";
import myImage from "@/public/multicored-tiles.jpg";
const School = () => {
    return (

        <StyledBox>
            <div sx={{top: 0}} style={{backgroundColor: "#fcf0de", textAlign: "center", fontSize: 120}}>School of Tea</div>
            <StyledContainer maxWidth="lg">
                <div style={{fontSize: 30, textAlign: "center"}}>History and culture of tea</div>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A facilis in inventore magnam quae qui, quisquam voluptatum. Amet dolor doloribus est, id libero quasi, ratione, recusandae repudiandae sit unde veniam.</p>
                <div style={{fontSize: 30, textAlign: "center"}}>Tea Sommelier</div>

                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A facilis in inventore magnam quae qui, quisquam voluptatum. Amet dolor doloribus est, id libero quasi, ratione, recusandae repudiandae sit unde veniam.</p>
                <div style={{fontSize: 30, textAlign: "center"}}>Tea Manufacturing</div>

                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium consectetur fugiat ipsa ipsam minus nam praesentium sequi tempore veritatis voluptatum? Debitis eaque in iure laboriosam optio provident sed sequi, similique?Lorem ipsum dolor sit amet, consectetur adipisicing elit. A facilis in inventore magnam quae qui, quisquam voluptatum. Amet dolor doloribus est, id libero quasi, ratione, recusandae repudiandae sit unde veniam.</p>
                <div style={{fontSize: 30, textAlign: "center"}}>Health benefits</div>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A animi aut consectetur consequuntur, deserunt dignissimos dolor eveniet id iste molestias natus necessitatibus nesciunt nostrum pariatur repellat repellendus similique solut</p>
            </StyledContainer>

        </StyledBox>


    );

};

const StyledContainer = styled(Container)`
  margin-top: 50px;
  height: 500px;
  background-color: #fcf0de;
  padding: 40px;
  position: relative;
  border: 3px solid #654321;
  border-radius: 20px;

`

const StyledBox = styled(Box)`
  height:100vh;
  width:100vw;
  left: 0px;
  top: 0;
  position: relative;
  background-repeat: revert;
  background-image: url(${myImage.src});
  z-index: 0;
  
`

export default School;