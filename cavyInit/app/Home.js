import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Button,
} from 'react-native';

class Home extends Component {
    render() {
        return(
            <View style={styles.container}>
                <Button title="Button 1" color="powderblue" onPress={() => {}} />
                <Button title="Button 2" color="skyblue" onPress={() => {}} />
                <Button title="Button 3" color="steelblue" onPress={() => {}} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
    }
})

export default Home;
