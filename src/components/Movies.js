import React from "react"
import axios from "axios"
import styled from "styled-components"
import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
    *{
        margin:0;
        padding:0;
        box-sizing:border-box;
    }
`

const Filmes = styled.div`
display:flex;
flex-direction: column;
margin-left: 2vw;
 
div{
   background-color: #84a59d;
 }

 p{
   width: 60%;
 }

 img{
   width: 20%;
 }
`

//const img = styled.div`
//width: 20%;
//`


const apiFilmes = axios.create({
  baseURL:"https://api.themoviedb.org/3/movie/popular?api_key=9f9d7b72f389f3fbc6da31d6f841f575"
})

export default class App extends React.Component{

  state={
    listFilmes:[]
  }

  async componentDidMount(){
    const response = await apiFilmes.get();
    console.log(response.data.results);
    //console.log ("dando oi quando inicializa a aplicação!")

    const filmes = response.data.results.map((item) => {
        return{
          ...item,
        poster_path:`https://image.tmdb.org/t/p/w500/${item.poster_path}`
      };
    });

    this.setState({
      listFilmes: filmes 
    });

  }

  render(){
    return(
      <Filmes>
        <GlobalStyle/>
      {this.state.listFilmes.map((item) => (
        <div key={item.id}>
          <h2>{item.title}</h2>
          
            <img src={item.poster_path} alt={`banner do filme: ${item.title}`} />
          
          <p>{item.overview}</p>
        </div>
      ))}
      </Filmes>
    )
  }
}
