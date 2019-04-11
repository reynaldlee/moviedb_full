import React from 'react';
import { View, Image, Text, StyleSheet, TouchableHighlight } from 'react-native';
import PropTypes from 'prop-types';

const MovieCard = ({ poster, movieTitle, onPress }) => {
    return (
        <TouchableHighlight onPress={onPress}>
            <View style={styles.container}>
                <Image style={styles.poster} source={poster}></Image>
                <View style={styles.titleWrapper}>
                    <Text style={styles.movieTitle} numberOfLines={2}>{movieTitle}</Text>
                </View>
            </View>
        </TouchableHighlight>
    );
}

MovieCard.propTypes = {
    poster: PropTypes.shape({
        uri: PropTypes.string
    }),
    movieTitle: PropTypes.string,
    onPress: PropTypes.func
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 16,
        marginRight: 16,
        borderRadius: 3,
        overflow: "hidden",
        width: 140
    },
    poster: {
        height: 180,
        width: 140
    },
    titleWrapper: {
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "white",
        height: 40,
        paddingHorizontal: 3
    },
    movieTitle: {
        fontWeight: "bold",
        width: "100%",
        textAlign: "center"
    }
})


export default MovieCard;