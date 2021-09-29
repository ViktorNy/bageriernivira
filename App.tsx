import React from 'react';
import Layout from './components/Layout';
import { useKeepAwake } from 'expo-keep-awake';
import { StatusBar } from 'expo-status-bar';
import { usePreventScreenCapture } from 'expo-screen-capture';

export default function App() {
  useKeepAwake();
  usePreventScreenCapture();
  return (
    <><StatusBar hidden /><Layout /></>
  );
}