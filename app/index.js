import React, { Component } from 'react'
import { Provider } from 'react-redux';

import configureStore from "./config/configureStore"
import AppNavigator from './config/routes';

class App extends Component {
    render() {
        return (<Provider store={configureStore()}>
            <AppNavigator></AppNavigator>
        </Provider>)
    }
}

export default App;