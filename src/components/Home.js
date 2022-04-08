import React from "react";
import styled from "styled-components";
//import img from "./src/components/img/claquete.png"


const Container = styled.div`
background: rgb(238,174,202);
background: radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%);
height: 76vh;
display: flex;
justify-content: flex-start;
`
const Box = styled.section`
margin: 5vw;
 img{
    height: 55vh;
    width: 20vw;
    border: 2px solid pink;
    border-radius: 170px;
 }
`

function Home() {
    return (
        <Container>
            
            <Box>
            <img src="https://i.pinimg.com/564x/58/51/bd/5851bde1fc3616783c34efb4cf394127.jpg"/>
            </Box> 
        </Container>
    );
}

export default Home;