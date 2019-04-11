import React from 'react'

import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import Icon from "react-native-vector-icons/Ionicons"


const ButtonWithIcon = ({ onPress, iconName, text }) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.container} >
                <Icon name={iconName} size={24} color="#aaa"></Icon>
                <Text style={styles.text}>{text}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        width: "100%",
        padding: 10,
    },
    text: {
        fontSize: 18,
        color: "#eee",
        marginLeft: 16
    }
})


export default ButtonWithIcon;