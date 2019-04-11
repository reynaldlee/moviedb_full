import React from 'react'
import { ImageBackground, View, StyleSheet, Dimensions, Image, Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

import { SimpleRatingView } from '../Rating';

const MovieSlide = ({ movieTitle, overview, genre, rating, backdrop, poster, onButtonPress }) => {

    return (<ImageBackground style={styles.container} source={backdrop}>
        <View style={styles.wrapper}>
            <Image style={styles.poster} source={poster}></Image>
            <View style={styles.descWrapper}>
                <Text style={styles.title}>{movieTitle}</Text>
                <Text style={styles.genre}>{genre}</Text>
                <SimpleRatingView rating={rating}></SimpleRatingView>
                <Text style={styles.overview} numberOfLines={3}>{overview}</Text>
                <TouchableOpacity style={styles.button} onPress={onButtonPress}>
                    <Text style={styles.buttonText}>View Details</Text>
                </TouchableOpacity>
            </View>
        </View>
    </ImageBackground>)
}

MovieSlide.propTypes = {
    movieTitle: PropTypes.string,
    overview: PropTypes.string,
    genre: PropTypes.string,
    rating: PropTypes.number,
    backdrop: PropTypes.shape({
        uri: PropTypes.string
    }),
    poster: PropTypes.shape({
        uri: PropTypes.string
    }),
    onButtonPress: PropTypes.func
}

const styles = StyleSheet.create({
    container: {
        height: 250,
        width: Dimensions.get("window").width,
    },
    wrapper: {
        flex: 1,
        flexDirection: "row",
        backgroundColor: "rgba(0,0,0,0.5)",
        padding: 16,
        alignItems: "center"
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
    genre: {
        color: "white"
    },
    overview: {
        color: "white"
    },
    button: {
        height: 30,
        backgroundColor: "red",
        padding: 5,
        marginTop: 10,
        borderRadius: 3,
        alignSelf: "baseline"
    },
    buttonText: {
        color: "white"
    }
});

export default MovieSlide;