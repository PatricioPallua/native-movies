import { View, Text } from "react-native";
import { useState, useEffect } from "react";
import LoaderKit from 'react-native-loader-kit'
import axios from "axios";

export default function TopMoviesCarrousel () {
    // 3204f2e85cmsh6e9ee1ce458b15fp11e41cjsn7debf6d27af2
    const [topMovies, setTopMovies] = useState([])

    useEffect(() => {
        console.log("ENTRAMOS ACA")
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
            console.log(res.data.results)
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
                    <Text> topMovies </Text>
            }
        </View>
    )
}