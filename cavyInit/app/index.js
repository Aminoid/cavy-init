import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import Navigator from './config/routes';

class cavyInit extends Component {
  render() {
    return (
      <Navigator />
    );
  }
}

export default cavyInit;
