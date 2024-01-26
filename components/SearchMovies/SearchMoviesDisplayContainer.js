import { View, Text } from "react-native";
import SearchMoviesDisplay from "./SearchMoviesDisplay";


export default function SearchMoviesDisplayContainer({ Movies }){

    return (
        <View>
            {
                Movies.length > 0 ?
                    <View>
                        <SearchMoviesDisplay Movies={Movies} />
                    </View>
                    :
                    <View>
                        <SearchMoviesDisplay Movies={Movies} />
                    </View>
            }
        </View>
    )
}