import { View, StyleSheet, ScrollView, Text } from "react-native";
import TopMoviesCarrouselContainer from "../components/TopMoviesCarrousel/TopMoviesCarrouselContainer";
import NavBar from "../components/NavBar";

export default function MainScreen() {

    return (
        <View style={styles.viewContainer}>
            <NavBar />
            <ScrollView style={styles.container}>
                <View style={styles.content}>
                    <TopMoviesCarrouselContainer />
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    scrollContainer: {
      flex: 1,
    },
    content: {
      padding: 16,
    },
    viewContainer: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 10
      },
  });
