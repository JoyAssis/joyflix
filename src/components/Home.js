import React from "react";
import styled from "styled-components";
//import img from "./src/img/claquete.png"


const Container = styled.div`
background-color: #f7ede2;
height: 76vh;
display: flex;
justify-content: flex-start;
`
const Box = styled.section`
height: 55vh;
width: 50vw;
margin: 5vw;
border: 2px solid black;
border-radius: 170px;
`

function Home() {
    return (
        <Container>
            
            <Box>
            <h2>imagem aqui</h2>
            </Box> 
        </Container>
    );
}

export default Home;