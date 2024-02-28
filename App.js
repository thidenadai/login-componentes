import React from 'react';
import { StyleSheet, Text, View, TextInput, Image, ImageBackground, Button } from 'react-native';
import LoginText from './src/components/LoginText';
import LoginInput from './src/components/LoginInput';
import { styles } from './src/styles/stylesheets';

export default function App() {

  return (
    <View style={styles.container}>

      <LoginText/>
     <LoginInput/>
     <StyleSheet></StyleSheet>
    
    </View>
  );
}

;