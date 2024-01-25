import { View } from "react-native";
import TopMoviesCarrouselContainer from "../components/TopMoviesCarrousel/TopMoviesCarrouselContainer";
import NavBar from "../components/NavBar";
import SearchMoviesContainer from "../components/SearchMovies/SearchMoviesContainer";

export default function Main() {

    return (
        <View>
            <NavBar />
            <SearchMoviesContainer />
        </View>
    )
}