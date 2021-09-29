import React from 'react';
import Layout from './components/Layout';
import { useKeepAwake } from 'expo-keep-awake';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  useKeepAwake();
  return (
    <><StatusBar hidden /><Layout /></>
  );
}