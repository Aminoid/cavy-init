import React, { Component } from 'react';
import { Scene, Router } from 'react-native-router-flux';

import Home from '../Home';

class Navigator extends Component {
    render() {
        return (
            <Router>
                <Scene key="root" hideNavBar>
                    <Scene key="home" component={Home} />
                </Scene>
            </Router>
        )
    }
}

export default Navigator;
