import { useEffect, useState } from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import axios from "axios";

export default function Card({ Movie }) {
    const[movieDetail, setMovieDetaile] = useState("")
    useEffect(() => {
        const options = {
            method: 'GET',
            url: 'https://moviesminidatabase.p.rapidapi.com/movie/id/tt14318430/',
            headers: {
              'X-RapidAPI-Key': 'b96ec2822cmshfee9322531e4280p1123c2jsn7217cbcd566f',
              'X-RapidAPI-Host': 'moviesminidatabase.p.rapidapi.com'
            }
          };

          axios.request(options)
          .then(res => {
            console.log(res.data.results.image_url)
            setMovieDetaile(res.data.results)
          })
          .catch(err => {
            console.log(err)
          })
    },[])

    return (
        <View style={styles.card}>
            <Text style={styles.cardTitle}> {movieDetail.title} </Text>
            <View style={{ flex: 2}}>
                <Image style={styles.cardImage} source={{ uri:movieDetail.image_url }}/>
            </View>
        </View>
    )
}


// Styles
// Updated Styles
const styles = StyleSheet.create({
    card: {
      backgroundColor: '#fff',
      borderRadius: 8,
      margin: 16,
      overflow: 'hidden', // Ensure the borderRadius applies to the image
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
      backgroundColor: '#3498db', // Background color for the title
      color: '#fff', // Text color for the title
      borderTopLeftRadius: 8,
      borderTopRightRadius: 8,
    },
    cardImage: {
      width: '100%',
      height: 200,
      borderRadius: 8,
    },
  });