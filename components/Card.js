import { useEffect, useState } from "react";
import { Text, StyleSheet, View, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Gif from 'react-native-gif';
import axios from "axios";

export default function Card({ Movie }) {
    const[movieDetail, setMovieDetaile] = useState("")
    const[loaded, setLoaded] = useState(false)
    const navigation = useNavigation()

    useEffect(() => {
        const options = {
            method: 'GET',
            url: 'https://moviesminidatabase.p.rapidapi.com/movie/id/' + Movie.imdb_id + "/",
            headers: {
              'X-RapidAPI-Key': 'b96ec2822cmshfee9322531e4280p1123c2jsn7217cbcd566f',
              'X-RapidAPI-Host': 'moviesminidatabase.p.rapidapi.com'
            }
          };

          axios.request(options)
          .then(res => {
            setMovieDetaile(res.data.results)
            setLoaded(true)
          })
          .catch(err => {
            console.log(err)
          })
    },[])

    const handleCardPress = () => {
      navigation.navigate('Detail', { movieDetail: movieDetail, movie: Movie });
    };

    return (
      <TouchableOpacity onPress={handleCardPress}>
        <View style={styles.card}>
            {
              loaded? 
                <View>
                  <Text style={styles.cardTitle}> {Movie.title} </Text>
                  <View style={{ flex: 2}}>
                    <Image style={styles.cardImage} source={{ uri:movieDetail.image_url }}/>
                  </View>
                </View>
              :
                <Gif
                  source={{ uri: '../../assets/loading-load.gif' }}
                  style={styles.gif}
                />
            }
        </View>
      </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    card: {
      backgroundColor: '#fff',
      borderRadius: 8,
      margin: 16,
      width: 150,
      overflow: 'hidden', 
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 5,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
    cardTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 8,
      padding: 16,
      backgroundColor: '#3498db',
      color: '#fff', 
      borderTopLeftRadius: 8,
      borderTopRightRadius: 8,
    },
    cardImage: {
      width: '100%',
      height: 120,
      width: 120,
      borderRadius: 8,
    },
  });