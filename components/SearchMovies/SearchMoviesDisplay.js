import { render } from "react-dom";
import { View, StyleSheet, ScrollView, Text} from "react-native";
import Card from "../Card";

export default function SearchMoviesDisplay({ Movies }) {

    const renderMovies = () => Movies.map((movie, index) => (
        <Card style={styles.card} key={index} Movie={movie}></Card>
    ));

    return(
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.row}>
                    {
                        Movies.length > 0 ?
                            renderMovies()
                        :
                            <Text> Movies not found </Text>
                        }
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    scrollViewContainer: {
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "space-between",
      padding: 16,
      minHeight: 200,
    },
    row: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
    },
    card: {
      flexBasis: "48%", // Adjust as needed based on your design
      marginBottom: 16,
      borderRadius: 8,
      borderWidth: 1,
      borderColor: "#ddd",
      padding: 16,
      alignItems: "center",
      justifyContent: "center",
    },
  });