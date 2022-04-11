import React from "react";
import axios from "axios"
import styled from "styled-components"

const Container = styled.div`
background-color: rgb(15, 23, 30);
    padding-top: 3vh;
    display:flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: space-around;
`
const Card = styled.div`
width:23%;
    margin:12px;
    padding:5px;
    display:flex;
    align-items:center;
    justify-content:space-around;
    flex-direction: column;
    font-size:0.9vw;
    text-align:center;
    background: rgb(238,174,202);
    background: radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%);
    border-radius:10px;
`

const Image = styled.img`
width: 60%;
`

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
        //console.log('ta pegando?')

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
            <container>                         
            {this.state.listSeries.map((item, index) => (
                <Card key={index}>
                    <h2>{item.name}</h2>
                    <Image src={item.poster_path} alt={'Imagem série'}/>                    
                    <p>{item.overview}</p>
                </Card>
            ))}
            </container>
        )
    }
}