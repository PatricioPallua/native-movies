import { ScrollView, View, Text } from "react-native";
import Card from "../Card";

export default function TopMoviesCarrousel({ Movies }){

    const renderMovies = Movies.map((movie, index) => (
        <Card key={index} Movie={movie}></Card>
    ));

    return(
            <View style={{ flex:1, backgroundColor: "white", paddingTop: 20, marginTop: 20}} >
                <Text style={{ fontSize: 25, fontWeight: "700", paddingHorizontal: 20 }}>
                    Top Movies
                </Text>

                <View style={{ height:250, marginTop: 20 }}>
                    <ScrollView
                        horizontal={true}
                    >
                        { renderMovies }
                    </ScrollView>
                </View>
            </View>
    )
} 