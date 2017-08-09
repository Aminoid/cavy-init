import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Tester, TestHookStore } from 'cavy';
import { Provider } from 'react-redux';

import store from './config/store';
import Navigator from './config/routes';
import AppSpec from './specs/AppSpec';

const testHookStore = new TestHookStore();

class cavyInit extends Component {
  render() {
    return (
        <Tester specs={[AppSpec]} store={testHookStore} waitTime={1000} startDelay={3000}>
            <Provider store={store}>
                <Navigator />
            </Provider>
        </Tester>
    );
  }
}

export default cavyInit;
