import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Icon from "react-native-vector-icons/Ionicons"

const SimpleRatingView = ({ rating, textStyle = {} }) => {
    return (
        <View style={styles.ratingWrapper}>
            <Icon name="md-star" size={16} color="#F5B642"></Icon>
            <Text style={[styles.rating, textStyle]}>{rating}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    ratingWrapper: {
        flexDirection: "row",
        paddingVertical: 3
    },
    rating: {
        marginLeft: 6,
        color: "white"
    },
})

export default SimpleRatingView;