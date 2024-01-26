import React from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";

const MovieDetailScreen = ({ route }) => {
  const { movieDetail } = route.params;

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>{movieDetail.title}</Text>
      <Text style={styles.year}>{movieDetail.year}</Text>

      <View style={styles.genresContainer}>
        <Text style={styles.genresTitle}>Genres:</Text>
        {movieDetail.gen.map((genre) => (
          <Text key={genre.id} style={styles.genre}>
            {genre.genre}
          </Text>
        ))}
      </View>

      <Text style={styles.description}>{movieDetail.description}</Text>
      <Text style={styles.movieLength}>
        Movie Length: {movieDetail.movie_length} minutes
      </Text>

      <Image source={{ uri: movieDetail.image_url }} style={styles.movieImage} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 8,
  },
  year: {
    fontSize: 18,
    color: "#888",
    marginBottom: 8,
  },
  genresContainer: {
    flexDirection: "row",
    marginBottom: 16,
  },
  genresTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginRight: 8,
  },
  genre: {
    fontSize: 16,
    marginRight: 8,
  },
  description: {
    fontSize: 16,
    marginBottom: 16,
  },
  movieLength: {
    fontSize: 16,
    marginBottom: 16,
  },
  banner: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
    marginBottom: 16,
  },
  movieImage: {
    width: "100%",
    aspectRatio: 16 / 9, 
    resizeMode: "cover",
  }
});

export default MovieDetailScreen;