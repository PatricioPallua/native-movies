import { View, StyleSheet, TextInput, TouchableOpacity, Text } from "react-native";


export default function SearchMoviesInput({ setSearch, search, handleSearch }) {


    return(
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder={"Insert yout movie..."}
                onChangeText={(text) => setSearch(text)}
                value={search}
            />
            <TouchableOpacity style={styles.button} onPress={handleSearch}>
                <Text style={styles.buttonText}>Search</Text>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
      backgroundColor: '#3498db', // Bar background color
      padding: 10,
      flexDirection: 'row',
      alignItems: 'center',
      width: '100%',
    },
    input: {
      flex: 1,
      height: 40,
      backgroundColor: '#fff', // Input background color
      borderRadius: 5,
      paddingHorizontal: 10,
    },
    button: {
      marginLeft: 10, // Adjust the spacing between input and button
      backgroundColor: '#2ecc71', // Button background color
      paddingVertical: 10,
      paddingHorizontal: 15,
      borderRadius: 5,
    },
    buttonText: {
      color: '#fff', // Button text color
      fontWeight: 'bold',
    },
  });