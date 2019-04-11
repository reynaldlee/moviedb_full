import React from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import PropTypes from 'prop-types';



const MovieInfoTab = ({ overview, releaseDate, director, budget }) => {
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>Overview</Text>
            <Text style={styles.subtitle}>{overview}</Text>

            <View style={styles.row}>
                <Text style={styles.title}>Release Date</Text>
                <Text style={styles.subtitle}>{releaseDate}</Text>
            </View>

            <View style={styles.row}>
                <Text style={styles.title}>Directed By</Text>
                <Text style={styles.subtitle}>{director}</Text>
            </View>

            <View style={styles.row}>
                <Text style={styles.title}>Budget</Text>
                <Text style={styles.subtitle}>$ {budget.toLocaleString()}</Text>
            </View>

        </ScrollView>

    );
}


const styles = StyleSheet.create({
    container: {
        padding: 16,
        flex: 1,
    },
    title: {
        fontWeight: "600",
        color: "white",
        fontSize: 18,
        marginBottom: 8,
    },
    subtitle: {
        fontWeight: "200",
        color: "white",
    },
    row: {
        marginVertical: 8,

        flexDirection: "row",
        justifyContent: "space-between"
    }
})


MovieInfoTab.propTypes = {
    overview: PropTypes.string,
    releaseDate: PropTypes.string,
    director: PropTypes.string,
    budget: PropTypes.number

}

export default MovieInfoTab;