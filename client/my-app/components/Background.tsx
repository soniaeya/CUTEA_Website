import React from 'react';
import Image from "next/Image";
import styled from "styled-components";

const Background = ({backgroundImg}) => {
    return (
        <StyledImage src={backgroundImg} alt={"Background Image"}>

        </StyledImage>
    );
};
const StyledImage = styled(Image)`
    width: 100vw;
  height: 500px;
  left: 0;
`

export default Background;