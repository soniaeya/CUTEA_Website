import React from 'react';
import ResponsiveAppBar from "@/components/ResponsiveAppBar";
import {Container} from "@mui/material";
import pink_tea from "../public/pink_tea.jpg"

import Image from "next/image";
const School = () => {
    return (
        <div>
            <ResponsiveAppBar></ResponsiveAppBar>
            <Container style={{ marginTop: '100px', height: 700}} maxWidth="lg">
                <h1>School of Tea</h1>
                <Image width={200} height={200} src={pink_tea} alt="sakao"></Image>
                <h2 style={{textAlign: "center"}}>History and culture of tea</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A facilis in inventore magnam quae qui, quisquam voluptatum. Amet dolor doloribus est, id libero quasi, ratione, recusandae repudiandae sit unde veniam.</p>
                <h2 style={{textAlign: "center"}}>Tea Sommelier</h2>

                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A facilis in inventore magnam quae qui, quisquam voluptatum. Amet dolor doloribus est, id libero quasi, ratione, recusandae repudiandae sit unde veniam.</p>
                <h2 style={{textAlign: "center"}}>Tea Manufacturing</h2>

                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium consectetur fugiat ipsa ipsam minus nam praesentium sequi tempore veritatis voluptatum? Debitis eaque in iure laboriosam optio provident sed sequi, similique?Lorem ipsum dolor sit amet, consectetur adipisicing elit. A facilis in inventore magnam quae qui, quisquam voluptatum. Amet dolor doloribus est, id libero quasi, ratione, recusandae repudiandae sit unde veniam.</p>
                <h2 style={{textAlign: "center"}}>Health benefits</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A animi aut consectetur consequuntur, deserunt dignissimos dolor eveniet id iste molestias natus necessitatibus nesciunt nostrum pariatur repellat repellendus similique solut</p>
            </Container>
            
        </div>
    );
};

export default School;