import React from 'react'
import { FlatList, View, Text, Image, StyleSheet, TouchableOpacity, Linking } from 'react-native';

const MovieTrailersTab = ({ data }) => {

    const openYoutube = (key) => {
        const url = `https://www.youtube.com/watch?v=${key}`

        Linking.canOpenURL(url)
            .then(() => {
                return Linking.openURL(url)
            })
            .catch(err => {
                alert(err);
            })
    }

    const renderItem = ({ item }) => {
        return <TouchableOpacity style={styles.itemWrapper} onPress={() => openYoutube(item.key)}>
            <Image style={styles.image}
                resizeMode="contain"
                source={require("../../assets/youtube-icon.png")}></Image>
            <Text style={styles.title}>{item.name}</Text>
        </TouchableOpacity>
    }

    return (
        <FlatList
            keyExtractor={(item) => item.id.toString()}
            data={data}
            renderItem={renderItem}
        ></FlatList>
    );
}

const styles = StyleSheet.create({
    itemWrapper: {
        flexDirection: "row",
        padding: 8
    },
    image: {
        height: 60,
        width: 100,
        padding: 8,
        alignSelf: "center",
    },
    title: {
        flex: 1,
        color: "#fff",
        fontWeight: "bold",
        alignSelf: "center"
    }
});

export default MovieTrailersTab;