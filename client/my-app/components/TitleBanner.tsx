import React from 'react';
import styled from "styled-components";

function TitleBanner ({title, bckcolor, fontColor}){

    return <Banner bckcolor={bckcolor} fontColor={fontColor}> {title} </Banner>

}
const Banner = styled.div`
  background-color: ${props => props.bckcolor};
  text-align: center;
  font-size: 120px;
  position: relative;
  width: 100vw;
  height: 130px;
  left: 0px;
  color: ${props => props.fontColor};

`

export default TitleBanner;


//<div style={{backgroundColor: "NavajoWhite", textAlign: "center", fontSize: 120}}>Create a Tea Club</div>