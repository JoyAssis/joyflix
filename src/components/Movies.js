import React from "react"
import axios from "axios"
import styled from "styled-components"
//import Slide from ".components/Slide/slide"
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
flex-direction: inline;
flex-wrap: wrap;
justify-content: space-evenly;
`

const Card= styled.div`
  background: rgb(238,174,202);
  background: radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%);
  width:20%;
  margin:20px;
  padding:10px;
  display:flex;
  align-items:center;
  justify-content:space-evenly;
  flex-direction: column;
  text-align:center;
  border-radius:15px;
`
const Image = styled.img`
width: 75%;
`
const Buscar = styled.div`
  display:flex;
  align-items:start;
  border-radius:15px;
`

const apiFilmes = axios.create({
  baseURL:"https://api.themoviedb.org/3/movie/popular?api_key=9f9d7b72f389f3fbc6da31d6f841f575"
})

export default class App extends React.Component{

  state={
    listFilmes:[],
    searchFilmes:[]
  }

  async componentDidMount(){
    const response = await apiFilmes.get();
    console.log(response.data.results);
  
    const filmes = response.data.results.map((item) => {
        return{
          ...item,
        poster_path:`https://image.tmdb.org/t/p/w500/${item.poster_path}`
      };
    });

    this.setState({
      listFilmes: filmes, 
      searchFilmes: filmes 
    });

  }

  filter = (event) => {
    const { listFilmes } = this.state
    const FilmesFiltrados = listFilmes.filter((item) => {
      if (item.title.toLowerCase().includes(event.target.value.toLowerCase())) {
        return true;
      }
    })
    this.setState({
      searchFilmes: FilmesFiltrados
    })
  }

  render(){
    return(
      
      <Filmes>
        <GlobalStyle/>
        <Buscar>
         <input type="text" placeholder=' Buscar...' onChange={this.filter} />
        </Buscar>      
      {this.state.searchFilmes.map((item) => (    
        
        <Card key={item.id}>
          <h2>{item.title}</h2>          
            <Image src={item.poster_path} alt={`banner do filme: ${item.title}`} />          
          <p style={{color:"white", margin:"5vh 1vw", textAlign:"justify", height:"12vh", overflowY:"scroll", padding:"0 1vw"}}>{item.overview}</p>
          <span>{item.vote_average}</span>
        </Card>
      ))}
      </Filmes>
    )
  }
}
