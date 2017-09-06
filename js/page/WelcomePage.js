import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    InteractionManager,
    Platform,
    Button
} from 'react-native'

export default class WelcomePage extends Component {
    static navigationOptions = {
        header: null
    };

    componentDidMount() {
        const {navigate} = this.props.navigation;
        this.timer = setTimeout(() => {
            InteractionManager.runAfterInteractions(() => {
                // SplashScreen.hide();
                navigate('HomePageNavigator');
            });
        }, 500);
    }

    render() {

        return (
            <View style={styles.container}>
                {/*<Image style={{flex:1,width:null}} resizeMode='repeat' source={require('../../res/images/LaunchScreen.png')}/>*/}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})