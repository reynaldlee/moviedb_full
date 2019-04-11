import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';

import { DrawerItems } from "react-navigation";

const Drawer = (props) => {


    const { navigation } = props;

    const onItemPress = ({ route }) => {

        if (route.routeName === "Search") {
            navigation.navigate("SearchScreen")
        } else {
            navigation.navigate(route.routeName);
        }
        navigation.closeDrawer();

    }


    return (
        <ScrollView contentContainerStyle={styles.container}>
            <DrawerItems {...props} onItemPress={onItemPress} />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        flex: 1
    }
})

export default Drawer;