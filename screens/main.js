import { View, StyleSheet, ScrollView, Text } from "react-native";
import TopMoviesCarrouselContainer from "../components/TopMoviesCarrousel/TopMoviesCarrouselContainer";
import NavBar from "../components/NavBar";
import SearchMoviesContainer from "../components/SearchMovies/SearchMoviesContainer";

export default function Main() {

    return (
        <View>
            <ScrollView style={styles.container}>
                <NavBar />
                <View style={styles.content}>
                    <SearchMoviesContainer />
                    <TopMoviesCarrouselContainer />
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    content: {
      padding: 16,
    },
  });
  