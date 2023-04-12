import React from 'react';
import styled from "styled-components"
import Button from "@mui/material/Button";
const CommonButton = ({text}) => {
    return (
        <StyledButton variant="contained">
            {text}
        </StyledButton>
    );
};

const StyledButton = styled(Button)`
    border-radius: 0;
  width: 200px;
  background: #1c1c1c;
  height: 60px;
  font-size: 16px;
  letter-spacing: .2rem;
`


export default CommonButton;