import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableHighlight,
} from 'react-native';
import {connect} from 'dva/mobile';

const App = connect(({count}) => ({count}))((props) => {
    const {dispatch, count} = props;
    return (
        <View style={styles.container}>
            <Text style={styles.welcome}>
                Count: {count}
            </Text>
            <TouchableHighlight onPress={() => {
                dispatch({type: 'count/add'})
            }}>
                <Text>Add</Text>
            </TouchableHighlight>
            <TouchableHighlight onPress={() => {
                dispatch({type: 'count/addDelay'})
            }}>
                <Text>Delay Add</Text>
            </TouchableHighlight>
        </View>
    );
});

export default class DvaSample extends Component {
    static navigationOptions = {
        header: null
    };

    render() {
        return (
            <App/>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
});