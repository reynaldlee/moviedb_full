import React from 'react'
import { View, StyleSheet, Image, Text } from 'react-native';
import { SimpleRatingView } from '../Rating';
import PropTypes from 'prop-types';

const MovieDetailView = ({ movieTitle, genres, tagline, rating, poster }) => {
    return (
        <View style={styles.container}>
            <Image style={styles.poster} source={poster}></Image>
            <View style={styles.descWrapper}>
                <Text style={styles.title}>{movieTitle}</Text>
                <Text style={styles.tagline}>{tagline}</Text>
                <Text style={styles.genre}>{genres.map(genre => genre.name).join(", ")}</Text>
                <SimpleRatingView rating={rating}></SimpleRatingView>
            </View>
        </View>
    )
}

MovieDetailView.propTypes = {
    movieTitle: PropTypes.string,
    genres: PropTypes.array,
    tagline: PropTypes.string,
    rating: PropTypes.number,
    poster: PropTypes.shape({
        uri: PropTypes.string
    })
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        padding: 16,
        alignItems: "flex-end",
        height: 150,
    },
    poster: {
        width: 120,
        height: 180,
        borderRadius: 3,
        marginRight: 10
    },
    descWrapper: {
        flexDirection: "column",
        justifyContent: "space-evenly",
        flex: 1
    },
    title: {
        fontWeight: "bold",
        color: "white",
        fontSize: 20
    },
    tagline: {
        color: "white",
        fontSize: 19
    },
    genre: {
        color: "white"
    },
    overview: {
        color: "white"
    },
});




export default MovieDetailView;