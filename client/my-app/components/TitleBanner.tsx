import React from 'react';
import styled from "styled-components";

function TitleBanner ({title}){

    return <Banner> {title} </Banner>

}
const Banner = styled.div`
  background-color: NavajoWhite;
  text-align: center;
  font-size: 120px;
  position: relative;
  width: 100vw;
  height: 130px;
  left: 0px;

`

export default TitleBanner;


//<div style={{backgroundColor: "NavajoWhite", textAlign: "center", fontSize: 120}}>Create a Tea Club</div>