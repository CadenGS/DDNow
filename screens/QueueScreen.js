import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function QueueScreen({navigation}) {
  return(
    <View style={styles.container}>
        <Text
            onPress={() => alert('This is the "Queue" screen.')}
            style={{fontSize: 26, fontWeight: 'bold'}}>Queue Screen</Text>
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