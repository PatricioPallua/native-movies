import { useState } from "react";
import { View, StyleSheet } from "react-native";
import axios from "axios";
import SearchMoviesInput from "./SearchMoviesInput";
import SearchMoviesDisplayContainer from "./SearchMoviesDisplayContainer";


export default function SearchMoviesContainer(){

    const[search, setSearch] = useState("")
    const[moviesFound, setMoviesFound] = useState("")

    function handleSearch() {
        const options = {
            method: 'GET',
            url: 'https://moviesminidatabase.p.rapidapi.com/movie/imdb_id/byTitle/' + search + "/",
            headers: {
              'X-RapidAPI-Key': 'b96ec2822cmshfee9322531e4280p1123c2jsn7217cbcd566f',
              'X-RapidAPI-Host': 'moviesminidatabase.p.rapidapi.com'
            }
          };

          axios.request(options)
          .then(res => {
                setMoviesFound([])
                response = res.data.results 
                setMoviesFound(response)
                setSearch("")
          })
          .catch(err => {
              console.log(err)
          })
    } 

    return (
        <View>
            <SearchMoviesInput styles={styles.container} setSearch={setSearch} search={search} handleSearch={handleSearch}/>
            <SearchMoviesDisplayContainer Movies={moviesFound}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#3498db', 
        padding: 5,
        flexDirection: 'row',
        alignItems: 'center',
        width: "90%",
        paddingHorizontal: 5,
        marginHorizontal: 1
    }
});
