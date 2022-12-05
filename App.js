/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect, useState } from 'react';
import ElectrumClient from 'electrum-client';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const [electrumClient, setElectrumClient] = useState()
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const connect = async() => {
    const electrumPersistentPolicy = {
      retryPeriod: 5000,
      maxRetry: 10,
      pingPeriod: 5000,
      callback: null
    }
    const ver = await electrumClient.initElectrum({ client: "electrum-client-js", version: "1.4" }, electrumPersistentPolicy)
    console.log(ver)
  }

  useEffect(() => {
    const ec = new ElectrumClient(global.net, global.tls, 443, "electrum1.bluewallet.io", "tls")
    setElectrumClient(ec)
  }, [])

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}></View>
          <Button title="connect" onPress={connect} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
