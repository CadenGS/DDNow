import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function SettingsScreen({navigation}) {
  return(
    <View style={styles.container}>
        <Text
            onPress={() => alert('This is the "Settings" screen.')}
            style={{fontSize: 26, fontWeight: 'bold'}}>Settings Screen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });