import React from 'react';
import styled from "styled-components";

const PageContainer = () => {
    return (
        <StyledPageContainer>
            <h1> Hello World</h1>
            <h1> Hello World</h1>
            <h1> Hello World</h1>
        </StyledPageContainer>
    );
};

const StyledPageContainer = styled.div`
    background: LemonChiffon;
  height: 800px;
  width: 1400px;
  display: block;
  postition: relative;
  margin-top: 80px;
  margin-left: auto;
  margin-right: auto;
  z-index: -1;
  order: 999
  
`

export default PageContainer;