import { View } from "react-native";
import TopMoviesCarrouselContainer from "../components/TopMoviesCarrouselContainer";
import NavBar from "../components/NavBar";

export default function Main() {

    return (
        <View>
            <NavBar />
            <TopMoviesCarrouselContainer />
        </View>
    )
}