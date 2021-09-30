import { useKeepAwake } from 'expo-keep-awake';
import { usePreventScreenCapture } from 'expo-screen-capture';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Navigator } from './navigation/Navigator';

export default function App() {
  useKeepAwake();
  usePreventScreenCapture();
  return (
    <SafeAreaProvider>
      <StatusBar hidden /><Navigator />
    </SafeAreaProvider>
  );
}


