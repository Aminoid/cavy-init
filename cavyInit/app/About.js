import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Text,
} from 'react-native';

import { hook } from 'cavy';

class About extends Component {
    render() {
        return(
            <View style={styles.container}>
                <Text ref={this.props.generateTestHook('About.Text')}>This is About Page</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})

export default hook(About);
