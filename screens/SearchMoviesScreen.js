import { StyleSheet, View, ScrollView } from "react-native";
import SearchMoviesContainer from "../components/SearchMovies/SearchMoviesContainer";


export default function SearchMoviesScreen() {

    return (
        <View style={styles.viewContainer}>
            <ScrollView style={styles.container}>
                <View style={styles.content}>
                    <SearchMoviesContainer />
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
      padding: 8,
    },
    viewContainer: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 5
      },
  });
