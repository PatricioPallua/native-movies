import { Text } from "react-native";


export default function MovieDetailScreen({ route }){

    const { movie, movieDetail } = route.params;

    console.log("MOVIE!!!", movie)
    console.log("MOVIE DETAIL!!!", movieDetail)

    return(
        <Text> Movie Detail </Text>
    )
}