import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';



export default class FadeAnimation extends Component {
    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity style={styles.button} >
                    <Text style={styles.Text} >Animation</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    button: {
        height: 50,
        width: 100,
        backgroundColor: "blue"
    },
    Text: {
        color: "#fff"
    }
});
