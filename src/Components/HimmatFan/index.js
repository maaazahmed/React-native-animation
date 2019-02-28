import React, { Component } from "react";
import { View, Text, TouchableOpacity, Animated, StyleSheet, Easing } from "react-native"


export default class HimmatFan extends Component {
    constructor() {
        super()
        this.state = {
            fanAnimation: new Animated.Value(0),
            isFanStart: true,
            duration: null,
            PWO: "ON"
        }
    }

    startFane = () => {
        this.setState({
            isFanStart: false,
            PWO: "OFF"
        })
        Animated.loop(
            Animated.sequence([
                Animated.timing(this.state.fanAnimation, {
                    toValue: 100,
                    duration: 1000,
                    easing: Easing.linear
                }),
            ])
        ).start()
    }

    stopFan = () => {

        this.setState({
            isFanStart: true,
            PWO: "ON"
        })
        Animated.timing(this.state.fanAnimation, {
            toValue: 0,
            duration: 0,
            easing: Easing.linear
        }).start()
    }


    fanSpeed(num) {
        if (!this.state.isFanStart) {

            Animated.loop(
                Animated.sequence([
                    Animated.timing(this.state.fanAnimation, {
                        toValue: 100,
                        duration: num,
                        easing: Easing.linear
                    }),
                ])
            ).start()
        }
    }

    render() {
        const fanAnimation = this.state.fanAnimation.interpolate({
            inputRange: [0, 100],
            outputRange: ["0deg", "360deg"]
        })
        return (
            <View style={{ flex: 1, backgroundColor: "#f2f2f2", justifyContent: "center", }} >
                <Animated.Image
                    style={[styles.fanImg, { transform: [{ rotate: fanAnimation }] }]}
                    source={require("../../images/fane.png")} />
                <View style={[styles.buttonContainer]} >
                    <TouchableOpacity
                        onPress={this.fanSpeed.bind(this, 1000)}
                        style={[styles.butnS, styles.borders]} >
                        <Text>LOW</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={this.fanSpeed.bind(this, 500)}
                        style={[styles.butnS, styles.borders]} >
                        <Text>MED</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={this.fanSpeed.bind(this, 300)}
                        style={[styles.butnS, styles.borders]} >
                        <Text>HIG</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={this.state.isFanStart ? (this.startFane) : this.stopFan}
                        style={[styles.butnS]}>
                        <Text>{this.state.PWO}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    fanImg: {
        height: 200,
        width: 200,
        alignSelf: "center",
    },
    buttonContainer: {
        width: 300,
        backgroundColor: "#fff",
        height: 40,
        alignSelf: "center",
        marginTop: 50,
        justifyContent: "space-between",
        borderRadius: 5,
        padding: 5,
        flexDirection: "row",
        borderColor: "#000",
        borderWidth: 1,
    },
    butnS: {
        flex: 1,
        // backgroundColor: "blue",
        justifyContent: "center",
        alignItems: "center"
    },
    borders: { borderRightWidth: 1, borderColor: "#000" }
})