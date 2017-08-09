import React, { Component } from 'react';
import { Scene, Router } from 'react-native-router-flux';
import { connect } from 'react-redux';

import Home from '../Home';
import About from '../About';

const RouterWithRedux = connect()(Router);

class Navigator extends Component {
    render() {
        return (
            <RouterWithRedux>
                <Scene key="root" hideNavBar>
                    <Scene key="home" component={Home} />
                    <Scene key="about" component={About} />
                </Scene>
            </RouterWithRedux>
        )
    }
}

export default Navigator;
