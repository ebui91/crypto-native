import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import Store from './src/redux/store.js';

// Components can be imported using ES6 destructuring because of the index.js file
import { Header, CryptoContainer } from './src/components';


export default class App extends React.Component {
  render() {
    return (
      <Provider store= { Store }>
        <View>
          <Header />
          <CryptoContainer />
        </View>
      </Provider>
    )
  }
}
