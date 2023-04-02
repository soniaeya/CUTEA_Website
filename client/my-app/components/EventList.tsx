import Container from "@mui/material/Container";
import { InstagramEmbed } from 'react-social-media-embed';
import Button from "@mui/material/Button";
import {Modal} from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import React from "react"
import TeamPic from "../public/Team Picture.png"
import Image from "next/image"

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    mb: 2,
    display: "flex",
    flexDirection: "column",
    height: 800,
    overflowY: "auto",
    overflowX: "none",

};
export default function EventList() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (<div>

            <Image width={400} height={400} src={TeamPic} onClick={handleOpen} alt="t"></Image>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style} >
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Past CUTEA Events
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }} >
                        <div>
                            <InstagramEmbed url="https://www.instagram.com/p/CqTezZVuTQC/" width={600} />
                            <InstagramEmbed url="https://www.instagram.com/p/CqDh4_DuiKZ/" width={600} />
                            <InstagramEmbed url="https://www.instagram.com/p/CoxvN3AuUFs/" width={600} />
                            <InstagramEmbed url="https://www.instagram.com/p/CotdX43uJtv/" width={600} />
                        </div>
                    </Typography>
                </Box>
            </Modal>




            {/*<Container style={{maxHeight: 500, overflow: 'auto', border: "groove"}}>*/}
            {/*    </Container>*/}
        </div>
    );
}
