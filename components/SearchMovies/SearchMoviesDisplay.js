import { View, Text } from "react-native";
import Card from "../Card";
import TopMoviesCarrousel from "../TopMoviesCarrousel/TopMoviesCarrousel";


export default function SearchMoviesDisplay({ Movies }){

    const renderMovies = () => {Movies.map((movie, index) => (
        <Card key={index} Movie={movie}></Card>
    ))}

    return (
        <View>
            {
                Movies == "" ? 
                    <View> 
                        <Text> Busque una pelicula  </Text>
                    </View>
                    :
                    Movies.length > 0 ?
                    <View>
                        <TopMoviesCarrousel Movies={Movies} />
                    </View>
                    :
                    <View>
                        <Text> No se encontro peliculas  </Text>
                    </View>
            }
        </View>
    )
}