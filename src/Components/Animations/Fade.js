// import React, { Component } from 'react';
// import {
//     Platform,
//     StyleSheet,
//     Text, View,
//     Button,
//     TouchableOpacity,
//     Animated,
//     Dimensions,
//     Easing,
//     Image,
//     PanResponder,
// } from 'react-native';


// const { width, height } = Dimensions.get("window")
// export default class FadeAnimation extends Component {
//     constructor() {
//         super()
//         this.state = {
//             FadeAnimation: new Animated.Value(0), // = > define intial value of animated 
//             xValue: new Animated.Value(0), // = > define intial value of animated 
//             springValue: new Animated.Value(2) // = > define intial value of animated 
//         }
//     }

//     __fadeAnimation = () => {
//         Animated.timing(this.state.FadeAnimation, {
//             toValue: 1,
//             duration: 1000
//         }).start()
//     }

//     __moveAnimation = () => {
//         Animated.timing(this.state.xValue, {
//             toValue: width - 150,
//             duration: 1000,
//             easing: Easing.back()
//         }).start(() => {
//             Animated.timing(this.state.xValue, {
//                 toValue: 0,
//                 duration: 1000,
//                 easing: Easing.back()
//             }).start(() => {
//                 this.__moveAnimation()
//             })
//         })
//     }


//     _springAnimation = () => {
//         Animated.spring(this.state.springValue, {
//             toValue: 1,
//             friction: 0
//         }).start()
//     }

//     render() {
//         return (
//             <View style={styles.container}>
//                 {/* <Animated.View
//                     style={[
//                         styles.FadeAnimation,
//                         {
//                             // opacity: this.state.FadeAnimation,
//                             left: this.state.xValue
//                         }]} /> */}
//                 <Animated.Image
//                     source={require("../../images/react.png")}
//                     style={[styles.imageAnimation,
//                     {
//                         // left: this.state.xValue
//                         transform: [{ scale: this.state.springValue }]

//                     }]} />
//                 <TouchableOpacity onPress={this._springAnimation} style={styles.button} >
//                     <Text style={styles.Text} >Animation</Text>
//                 </TouchableOpacity>
//             </View>
//         );
//     }
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'center',
//         // alignItems: 'center',
//         backgroundColor: '#F5FCFF',
//     },
//     button: {
//         backgroundColor: "blue",
//         padding: 10,
//         margin: 10,
//         alignSelf: "center"

//     },
//     Text: {
//         color: "#fff"
//     },
//     FadeAnimation: {
//         height: 150,
//         width: 150,
//         backgroundColor: "green",
//     },
//     imageAnimation: {
//         height: 150,
//         width: 150,
//         alignSelf: "center"
//     }
// });






// import React, { Component } from 'react';
// import {
//     Platform,
//     StyleSheet,
//     Text, View,
//     Button,
//     TouchableOpacity,
//     Animated,
//     Dimensions,
//     Easing,
//     Image
// } from 'react-native';


// const { width, height } = Dimensions.get("window")
// export default class FadeAnimation extends Component {
//     constructor() {
//         super()
//         this.state = {
//             FadeAnimation: new Animated.Value(0), // = > define intial value of animated 
//             xValue: new Animated.Value(0),        // = > define intial value of animated 
//             springValue: new Animated.Value(.2),  // = > define intial value of animated 
//             rotateAnimation: new Animated.Value(0) // = > define intial value of animated 
//         }
//     }

//     __fadeAnimation = () => {
//         Animated.timing(this.state.FadeAnimation, {
//             toValue: 1,
//             duration: 1000
//         }).start()
//     }

//     __moveAnimation = () => {
//         Animated.timing(this.state.xValue, {
//             toValue: width - 150,
//             duration: 1000,
//             easing: Easing.linear
//         }).start(() => {
//             Animated.timing(this.state.xValue, {
//                 toValue: 0,
//                 duration: 1000,
//                 easing: Easing.linear
//             }).start(() => {
//                 this.__moveAnimation()
//             })
//         })
//     }
//     _springAnimation = () => {
//         Animated.spring(this.state.springValue, {
//             toValue: 1,
//             friction: 3
//         }).start()
//     }


//     __rotateAnimation = () => {
//         Animated.sequence([
//             Animated.timing(this.state.rotateAnimation, {
//                 toValue: 100,
//                 duration: 1000,
//                 easing: Easing.linear
//             }),
//             Animated.timing(this.state.rotateAnimation, {
//                 toValue: 0,
//                 duration: 1000,
//                 easing: Easing.linear
//             })
//         ]).start(() => {
//             this.__rotateAnimation()
//         })
//     }

//     __moveAndRotateAnimation = () => {
//        this.__rotateAnimation()
//        this.__moveAnimation()
//     //    this._springAnimation()

//     }

//     render() {
//         const rotateInterPolate = this.state.rotateAnimation.interpolate({
//             inputRange: [0, 100],
//             outputRange: ["0deg", "360deg"]
//         })

//         return (
//             <View style={styles.container}>
//                 {/* <Animated.View
//                     style={[
//                         styles.FadeAnimation,
//                         {
//                             // opacity: this.state.FadeAnimation,
//                             left: this.state.xValue
//                         }]} /> */}


//                 {/* <Animated.Image
//                     source={require("../../images/react.png")}
//                     style={[styles.imageAnimation,
//                     {
//                         // left: this.state.xValue
//                         transform: [{ scale: this.state.springValue }]

//                     }]} /> */}
//                 <Animated.Image
//                     source={require("../../images/react.png")}
//                     style={[styles.imageAnimation,
//                     {
//                         left: this.state.xValue,
//                         // transform: [{ scale: this.state.springValue }]
//                         transform: [{ rotate: rotateInterPolate,}]

//                     }]} />
//                 <TouchableOpacity onPress={this.__moveAndRotateAnimation} style={styles.button} >
//                     <Text style={styles.Text} >Animation</Text>
//                 </TouchableOpacity>
//             </View>
//         );
//     }
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'center',
//         // alignItems: 'center',
//         backgroundColor: '#F5FCFF',
//     },
//     button: {
//         backgroundColor: "blue",
//         padding: 10,
//         margin: 10,
//         alignSelf: "center"

//     },
//     Text: {
//         color: "#fff"
//     },
//     FadeAnimation: {
//         height: 150,
//         width: 150,
//         backgroundColor: "green",
//     },
//     imageAnimation: {
//         height: 150,
//         width: 150,
//         // alignSelf: "center"
//     }
// });




// export default class multipleFadeView extends Component {
//     constructor() {
//         super()
//         let animatedValues = []
//         for (let i = 0; i < 1000; i++) {
//             animatedValues.push(new Animated.Value(0))

//         }
//         this.state = {
//             animatedValues: animatedValues
//         }
//     }


//     stagetAnimated = () => {
//         const animations = this.state.animatedValues.map((animatedValue) => {
//             return Animated.timing(animatedValue, {
//                 toValue: 1,
//                 duration: 5000
//             })
//         })
//         Animated.stagger(10, animations).start()
//     }

//     componentDidMount(){
//         this.stagetAnimated()
//     }


//     render() {
//         const animatedViews = this.state.animatedValues.map((animatedValue, index) => {
//             return (
//                 <Animated.View
//                     key={index}
//                     style={[styles.boxs, { opacity: animatedValue }]}
//                 />
//             )
//         })
//         return (
//             <View style={styles.container} >
//                 {animatedViews}
//             </View>
//         )
//     }
// }

// const styles = StyleSheet.create({
//     container: {
//         flex:1,
//         flexDirection: "row",
//         flexWrap: "wrap",
//         marginVertical:40
//     },
//     boxs: {
//         height: 20,
//         width: 20,
//         backgroundColor:"red",
//         margin:3
//     }
// })









// export default class GestureResponderCompo extends Component {
//     constructor() {
//         super()
//         this.state = {
//             pan: new Animated.ValueXY(0),
//             scale: new Animated.Value(1)
//         }
//     }

//     componentWillMount() {
//         this._panResponder = PanResponder.create({
//             onMoveShouldSetPanResponder: (evt, gestureState) => true,
//             onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,
//             onPanResponderGrant: (eve, gestureState) => {
//                 this.state.pan.setOffset({
//                     x: this.state.pan.x._value,
//                     y: this.state.pan.y._value
//                 })
//                 this.state.pan.setValue({
//                     x: 0, y: 0
//                 })
//                 Animated.spring(this.state.scale, {
//                     toValue: 1.3,
//                     friction: 3
//                 }).start()
//             },
//             onPanResponderMove: Animated.event([
//                 null,
//                 { dx: this.state.pan.x, dy: this.state.pan.y }
//             ]),

//             onPanResponderRelease: (evt, gestureState) => {
//                 this.state.pan.flattenOffset()
//                 Animated.spring(this.state.scale, {
//                     toValue: 1,
//                     friction: 3
//                 }).start()
//             }
//         })
//     }


//     render() {
//         return (
//             <View style={{ flex: 1, backgroundColor: "green", marginVertical: 40 }} >
//                  <Animated.View
//                     style={
//                         [styles.ball,{
//                             transform: [
//                                 { translateX: this.state.pan.x },
//                                 { translateY: this.state.pan.y },
//                                 { scale: this.state.scale },
//                             ]
//                         }]}
//                     {...this._panResponder.panHandlers}
//                 />
//             </View>
//         )
//     }
// }


// const styles  = StyleSheet.create({
//     ball:{
//         height: 150,
//         width: 150,
//         backgroundColor: "red",
//         borderRadius: 1000,
//         position: "absolute",
//     },
// })































import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text, View,
    Button,
    TouchableOpacity,
    Animated,
    Dimensions,
    Easing,
    Image,
    PanResponder,
} from 'react-native';

const { height, width } = Dimensions.get("screen")
export default class GestureResponderCompo extends Component {
    constructor() {
        super()
        this.state = {
            pan: new Animated.ValueXY(0, 0),
            number: 0,
            layout: null
        }
        this.timer = null;
        this.right = this.right.bind(this);
        this.bottom = this.bottom.bind(this)
        this.stopTimer = this.stopTimer.bind(this);
        this.left = this.left.bind(this);
        this.top = this.top.bind(this);
    }


    stopTimer() {
        clearTimeout(this.timer);
    }

    right() {
        const layout = this.state.layout;
        if (layout.width / 2 - 25 > this.state.pan.x._value) {
            this.state.pan.setValue({
                x: this.state.pan.x._value + 5,
                y: this.state.pan.y._value
            })
            this.timer = setTimeout(this.right, 1);
        }
    }
    left() {
        const layout = this.state.layout;
        if (-(layout.width / 2 - 25) < this.state.pan.x._value)
            this.state.pan.setValue({
                x: this.state.pan.x._value - 5,
                y: this.state.pan.y._value
            })
        this.timer = setTimeout(this.left, 1)
    }

    bottom() {
        this.state.pan.setValue({
            x: this.state.pan.x._value,
            y: this.state.pan.y._value + 5
        })
        this.timer = setTimeout(this.bottom, 1);
    }
    top() {
        this.state.pan.setValue({
            x: this.state.pan.x._value,
            y: this.state.pan.y._value - 5
        })
        this.timer = setTimeout(this.top, 1)

    }
    render() {
        return (
            <View style={{ flex: 1, justifyContent: "center" }} >
                <View style={{
                    flex: 1,
                    backgroundColor: "yellow",
                    justifyContent: "center",
                    alignItems: "center",
                }} onLayout={(e) => {
                    this.setState({
                        layout: e.nativeEvent.layout
                    })
                }}  >
                    <Animated.View
                        style={
                            [styles.ball, {
                                transform: [
                                    { translateX: this.state.pan.x },
                                    { translateY: this.state.pan.y },
                                ]
                            }]} />
                </View>
                <View style={{ height: 150, width, backgroundColor: "red", alignItems: "center", justifyContent: "center" }} >
                    <TouchableOpacity
                        style={{
                            height: 30, width: 100, backgroundColor: "green",
                            alignItems: "center", justifyContent: "center"
                        }}
                        onPressIn={this.right}
                        onPressOut={this.stopTimer}>
                        <Text>Right</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{
                            height: 30, width: 100, backgroundColor: "green",
                            alignItems: "center", justifyContent: "center",
                            marginTop: 5
                        }}
                        onPressIn={this.left}
                        onPressOut={this.stopTimer}>
                        <Text>Left</Text>
                    </TouchableOpacity>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", }} >
                        <TouchableOpacity
                            style={{
                                height: 30, width: 100, backgroundColor: "green",
                                alignItems: "center", justifyContent: "center",
                                marginTop: 5
                            }}
                            onPressIn={this.bottom}
                            onPressOut={this.stopTimer}>
                            <Text>Bottom</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={{
                                height: 30, width: 100, backgroundColor: "green",
                                alignItems: "center", justifyContent: "center",
                                marginTop: 5
                            }}
                            onPressIn={this.top}
                            onPressOut={this.stopTimer}>
                            <Text>Top</Text>
                        </TouchableOpacity>
                    </View>


                </View>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    ball: {
        height: 50,
        width: 50,
        backgroundColor: "#fff",
        borderRadius: 1000,
        position: "absolute",
    },
})