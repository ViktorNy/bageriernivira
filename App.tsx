import React from 'react';
import Layout from './components/Layout';
import { useKeepAwake } from 'expo-keep-awake';
import { StatusBar } from 'expo-status-bar';
import { AppearanceProvider } from 'react-native-appearance';

export default function App() {
  useKeepAwake();
  return (
    <AppearanceProvider>
      <StatusBar hidden />
      <Layout />
    </AppearanceProvider>
  );
}