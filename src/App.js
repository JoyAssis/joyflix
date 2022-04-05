import React, { Component } from "react";
import Home from "./components/Home";
import Movies from "./components/Movies"
import Series from "./components/Series"
import styled from "styled-components"
import {createGlobalStyle} from "styled-components"
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


const GlobalStyle = createGlobalStyle`
*{
  margin:0;
  padding:0;
  box-sizing:border-box;
  list-style:none;
  a:hover {
  color: hotpink; }
  a:link {
    text-decoration: none; }
  }
  `
  const Title = styled.h1`
  color: #f28482;
  margin: 10px; 
  text-decoration: underline; 
  `
  const Menu = styled.nav`
  padding: 1vw;
  height: 2vh;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  `
  const List = styled.ul`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  pading: 1vw;
  font-size: 2vw;
  `
  const Item = styled.li`
  border-bottom:3px solid white;
  padding:0.5vw;
  width: 100%;
  font-size: 2vw;
  `

class App extends Component {
  render () {
    return (
    <div>
      <GlobalStyle/>
      <Title>JOYFLIX</Title>
      <Router>        
        <Menu>
          <List>
            <Item>
              <Link to="/">Home</Link>
            </Item>
            <Item>
              <Link to="/movies">Movies</Link>
            </Item>
            <Item>
              <Link to="/series">Series</Link>
            </Item>
          </List>
        </Menu>

        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="Movies" element={<Movies/>}/>
          <Route path="Series" element={<Series/>}/>          
        </Routes>
      
      </Router>    
    
    </div>
    );
  }
}

export default App;