import { useState } from "react";
import { View, StyleSheet } from "react-native";
import axios from "axios";
import SearchMoviesInput from "./SearchMoviesInput";
import SearchMoviesDisplay from "./SearchMoviesDisplay";


export default function SearchMoviesContainer(){

    const[search, setSearch] = useState("")
    const[moviesFound, setMoviesFound] = useState("")

    function handleSearch() {
        console.log(search)

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
            <SearchMoviesDisplay Movies={moviesFound}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#3498db', // Bar background color
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
        width: "90%",
        paddingHorizontal: 16,
        marginHorizontal: 10
    }
});
