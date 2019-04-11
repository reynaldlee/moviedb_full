import React from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';
import PropTypes from 'prop-types';

const Container = (props) => {
    return (
        <View style={styles.container}>
            {props.loading ?

                <ActivityIndicator
                    style={{ flex: 1, backgroundColor: "black" }} color={"#EA0000"}
                    size="large" />
                :
                props.children
            }


        </View>
    );
}

Container.propTypes = {
    children: PropTypes.node,
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "black",
        flex: 1
    },
})



export default Container;