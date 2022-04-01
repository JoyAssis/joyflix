import React from "react"
import axios from "axios"

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
      <div>
      {this.state.listFilmes.map((item) => (
        <ul>
          <li>{item.title}</li>
          <li>
            <img src={item.poster_path} alt={`banner do filme: ${item.title}`} />
          </li>
        </ul>
      ))}
      </div>
    )
  }
}
