'use strict';

import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    InteractionManager,
    Platform,
    Button
} from 'react-native';

export default class PopularPage extends Component {

    static navigationOptions = {
        title: null,
    };

    render() {
        return (
            <Text>PopularPage</Text>
        );
    }
}