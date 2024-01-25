import { View, Text } from "react-native";
import { useState, useEffect } from "react";
import LoaderKit from 'react-native-loader-kit'
import axios from "axios";
import Card from "../Card";
import TopMoviesCarrousel from "./TopMoviesCarrousel";

export default function TopMoviesCarrouselContainer () {
    const [topMovies, setTopMovies] = useState([])

    useEffect(() => {
        const options = {
            method: 'GET',
            url: 'https://moviesminidatabase.p.rapidapi.com/movie/order/byPopularity/',
            headers: {
              'X-RapidAPI-Key': 'b96ec2822cmshfee9322531e4280p1123c2jsn7217cbcd566f',
              'X-RapidAPI-Host': 'moviesminidatabase.p.rapidapi.com'
            }
        };
          
        axios.request(options)
        .then(res => {
            respuesta = res.data.results 
            setTopMovies(respuesta)
        })
        .catch(err => {
            console.log(err)
        })
    }, [])

    return (
        <View>
            {
                topMovies.length <= 0 ?                           
                    <Text> Cargando... </Text>
                    :
                    <TopMoviesCarrousel Movies={topMovies}></TopMoviesCarrousel>
            }
        </View>
    )
}