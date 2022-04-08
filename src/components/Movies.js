import React from "react"
import axios from "axios"
import styled from "styled-components"
import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
    *{
        margin:0;
        padding:0;
        box-sizing:border-box;
        -webkit-scrollbar-track
          background-color: #F4F4F4;
        -webkit-scrollbar 
          width: 6px;
          background: #F4F4F4;
        -webkit-scrollbar-thumb 
          background: #dad7d7;
        }
    }
`

const Filmes = styled.div`
display:flex;
flex-direction: column;
margin-left: 2vw;
`
 

//const img = styled.div`
//width: 20%;
//`

const Card= styled.div`
  width: 90vw;
	height: 30vh;
	border-radius: 15px;
  background: rgb(238,174,202);
  background: radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%);
  padding: 1.5rem;
	display: flex;
	align-items: colunm;
  justify-content: space-evenly;
  transition: 0.4s ease-out;

  img{
    width: 10%;
  }

  &:hover{
		transform: translateY(30px);
  }


  h2{
    font-size: 1.5vw;
    
  }

  p{
    width: 20%;
    overflow: auto;
  }
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
    //console.log ("dando oi quando inicializa a aplicação!")

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
        <nav>
          <input type="text" placeholder=' Buscar...' onChange={this.filter} />
        </nav>
        <GlobalStyle/>
      
      {this.state.searchFilmes.map((item) => (
        <Card key={item.id}>
          <h2>{item.title}</h2>          
            <img src={item.poster_path} alt={`banner do filme: ${item.title}`} />          
          <p>{item.overview}</p>
          <span>{item.vote_average}</span>
        </Card>
      ))}
      </Filmes>
    )
  }
}
