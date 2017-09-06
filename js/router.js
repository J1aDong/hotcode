import React, {PureComponent} from 'react'
import {BackHandler, Animated, Easing} from 'react-native'
import {
    StackNavigator,
    TabNavigator,
    TabBarBottom,
    addNavigationHelpers,
    NavigationActions,
} from 'react-navigation'
import {connect} from 'react-redux'

import WelcomePage from './page/WelcomePage'
import DvaSample from './page/DvaSample'
import PopularPage from './page/PopularPage'
import TrendingPage from './page/TrendingPage'
import FavoritePage from './page/FavoritePage'

const HomePageNavigator = TabNavigator(
    {
        PopularPage: {screen: PopularPage},
        TrendingPage: {screen: TrendingPage},
        FavoritePage: {screen: FavoritePage}
    },
    {
        tabBarComponent: TabBarBottom,
        tabBarPosition: 'bottom',
        swipeEnabled: true,
        animationEnabled: true,
        lazyLoad: true,
        tabBarOptions: {
            tabBarVisible: true
        }
    }
);

const MainNavigator = StackNavigator(
    {
        HomePageNavigator: {screen: HomePageNavigator},
        WelcomePage: {screen: WelcomePage},
        DvaSample: {screen: DvaSample}
    },
    {
        headerMode: 'float',
    }
)

function getCurrentScreen(navigationState) {
    if (!navigationState) {
        return null
    }
    const route = navigationState.routes[navigationState.index]
    if (route.routes) {
        return getCurrentScreen(route)
    }
    return route.routeName
}

@connect(({router}) => ({router}))
class Router extends PureComponent {
    componentWillMount() {
        BackHandler.addEventListener('hardwareBackPress', this.backHandle)
    }

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.backHandle)
    }

    backHandle = () => {
        const currentScreen = getCurrentScreen(this.props.router)
        if (currentScreen !== 'HomePageNavigator') {
            this.props.dispatch(NavigationActions.back())
            return true
        }
        return false
    }

    render() {
        const {dispatch, router} = this.props
        const navigation = addNavigationHelpers({dispatch, state: router})
        return <MainNavigator navigation={navigation}/>
    }
}

export function routerReducer(state, action = {}) {
    return MainNavigator.router.getStateForAction(action, state)
}

export default Router
