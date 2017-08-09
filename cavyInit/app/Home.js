import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Button,
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { hook } from 'cavy';

class Home extends Component {
    render() {
        return(
            <View style={styles.container}>
                <Button title="Button 1" color="powderblue" onPress={() => {Actions.about()}}
                    ref={this.props.generateTestHook('Home.Button')}/>
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

export default hook(Home);
