import Container from "@mui/material/Container";
import { InstagramEmbed } from 'react-social-media-embed';



export default function EventList() {

    return (<div>
                    <div style={{ display: 'inline-block'}}>
                        <InstagramEmbed url="https://www.instagram.com/p/CqTezZVuTQC/" width={328} />
                        <InstagramEmbed url="https://www.instagram.com/p/CqDh4_DuiKZ/" width={328} />
                        <InstagramEmbed url="https://www.instagram.com/p/CoxvN3AuUFs/" width={328} />
                        <InstagramEmbed url="https://www.instagram.com/p/CotdX43uJtv/" width={328} />
                    </div>


            {/*<Container style={{maxHeight: 500, overflow: 'auto', border: "groove"}}>*/}
            {/*    </Container>*/}
        </div>
    );
}
