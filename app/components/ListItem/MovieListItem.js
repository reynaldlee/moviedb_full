import React from 'react';
import { View, Image, Text, StyleSheet, TouchableHighlight } from 'react-native';
import { SimpleRatingView } from '../Rating';


const MovieListItem = ({ movieId, movieTitle, releaseYear, rating, poster, overview, onPress }) => {
    return (
        <TouchableHighlight onPress={onPress}>
            <View style={styles.container}>
                <Image style={styles.poster} source={poster}></Image>
                <View style={styles.descWrapper}>
                    <Text style={styles.movieTitle} numberOfLines={2}>{movieTitle}</Text>
                    <Text style={styles.year}>{releaseYear}</Text>
                    <SimpleRatingView rating={rating} textStyle={{ color: "black" }} />
                    <Text style={styles.overview} numberOfLines={3}>{overview}</Text>
                </View>
            </View>
        </TouchableHighlight>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        overflow: "hidden",
        marginHorizontal: 16,
        marginTop: 8,
        borderRadius: 3
    },
    poster: {
        height: 160,
        width: 120
    },
    descWrapper: {
        flex: 1,
        padding: 8,
        backgroundColor: "white",
    },
    movieTitle: {
        fontWeight: "bold",
    },
    releaseYear: {
        fontWeight: "100"
    },
})


export default MovieListItem;