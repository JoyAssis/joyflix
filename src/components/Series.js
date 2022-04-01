import React from "react";
import axios from "axios"

const apiSeries = axios.create({
    baseURL:"https://api.themoviedb.org/3/tv/popular?api_key=9f9d7b72f389f3fbc6da31d6f841f575"
})

export default class Series extends React.Component{
    state={
        listSeries:[]
    }

    async componentDidMount(){
        const response = await apiSeries.get()
        console.log(response.data.results)
        console.log('ta pegando?')

        const series = response.data.results.map((item) => {
            return{
                ...item,
                poster_path:`https://image.tmdb.org/t/p/w200/${item.poster_path}`
            }
        })

        this.setState({
            listSeries: series
        });
    }


    render(){
        return(
            <div>
                <h2>Series</h2>
            {this.state.listSeries.map((item, index) => (
                <ul key={index}>
                    <li>{item.name}</li>
                    <li>
                        <img src={item.poster_path} alt={'Imagem série'}/>
                    </li>
                    <li>{item.overview}</li>
                </ul>
            ))}
            </div>
        )
    }
}