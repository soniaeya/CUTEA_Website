import ResponsiveAppBar from "../components/ResponsiveAppBar";
import Container from "@mui/material/Container";
export default function About() {
    return <div>
        <ResponsiveAppBar></ResponsiveAppBar>
        <Container style={{ marginTop: '100px' }} maxWidth="lg">
            <h1>About</h1>
            <p>This is the about page of my website.</p>
        </Container>

    </div>
}