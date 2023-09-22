import React from "react";

import {
    Text,
    View,
    StyleSheet,
    useColorScheme
} from 'react-native'

function AppPro(): JSX.Element{
    const isDarkMood = useColorScheme() === 'dark'
    return(
        <View style={styles.container}>
            <Text style={isDarkMood ? styles.whiteText : styles.darkText} >Hy World</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    whiteText: {
        color: '#ffffff'
    },
    darkText: {
        color: '#000000'
    }
})

export default AppPro;