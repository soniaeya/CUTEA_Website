import React from 'react';
import Image from "next/Image";
import styled from "styled-components";
import Box from "@mui/material/Box";

const Background = (props) => {
    return (
        <StyledBox img={props.backgroundImg}>

        </StyledBox>
    );
};
const StyledBox = styled(Box)`
  height:100vh;
  width:100vw;
  margin-left: 0;
  left: 0;
  top: 0;
  position: relative;
  background-repeat: repeat;
  background-image: url(${props=> (props.img).src});
  color: SaddleBrown;
`

export default Background;