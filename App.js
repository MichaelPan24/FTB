import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

import AppNavigator from './app/client/navigators/AppNavigator';
import store from './app/client/store';
import NavigationService from './app/utils/navigationUtil';

export default class App extends Component{
    render(){
      return (
        <Provider store={store().store}>
          <PersistGate loading={null} persistor={store().persistor}>
            <AppNavigator
              ref={navigatorRef => {NavigationService.setTopLevelNavigator(navigatorRef)}}
            />
          </PersistGate>
        </Provider>
      )
    }
}