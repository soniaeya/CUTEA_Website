
import React, { useContext } from 'react';

import ResponsiveAppBar from "../components/ResponsiveAppBar";
import Container from "@mui/material/Container";



export default function Home() {
  return (
    <div>
      <ResponsiveAppBar></ResponsiveAppBar>

      <Container style={{ marginTop: '100px' }} maxWidth="lg">
        <h1>Welcome to CUTEA</h1>
        <p>This is the main content of the website.</p>
      </Container>
    </div>
  )
}
