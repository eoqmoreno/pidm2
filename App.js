import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import RotasTelas from './components/Routes';


const App = () => {
  return (
    <SafeAreaProvider>
      <RotasTelas></RotasTelas>
    </SafeAreaProvider>
  );
};

export default App;