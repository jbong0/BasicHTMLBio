import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NativeRouter, Switch, Route } from 'react-router-native';
// import { Button, Text } from 'react-native-base'

import Splash from './components/Splash.js';
import Login from './components/Login.js';
import {Dashboard} from './components/Dashboard.js';
import {Matches} from './components/Matches.js';
import Snapshot from './components/Snapshot.js';
import {Messages} from './components/Messages.js'
import {MessageView} from './components/MessageView.js'

export default class App extends React.Component {
  render() {
    return (
      <NativeRouter>
        <View style={styles.container}>
          <Switch>
            // <Route exact path='/' component={Splash} />
            <Route exact path='/' component={Login} />
            // <Route exact path='/' component={Dashboard} />
            // <Route exact path='/' component={Messages} />
            // <Route exact path='/' component={MessageView} />
            // <Route exact path='/Matches' component={Matches} />
            // <Route exact path='/' component={Snapshot} />
          </Switch>
        </View>
      </NativeRouter>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

// light blue 45afdf a1e2fd
