import React from 'react';
import {StyleSheet, Text, View, ImageBackground} from 'react-native';

import Pulse from "./src/components/Pulse";

export default function App() {
    return (
        <View style={styles.container}>
            <ImageBackground style={styles.image} source={require('./assets/bg.jpg')}>
                <Pulse color='#7bd645' numPulses={2} diameter={180} speed={28} duration={2000}/>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'top',
    },
    image: {
        height: 250,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    }
});
