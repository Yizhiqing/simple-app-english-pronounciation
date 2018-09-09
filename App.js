import React from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { word: '' };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>英語を入力してください。</Text>
        <TextInput
          style={{ height: 40, width: 200, borderColor: 'gray', borderWidth: 1 }}
          onChangeText={(text) => this.setState({ word: text })}
        />
        <Button
          onPress={() => {
            Expo.Speech.speak(this.state.word);
          }}
          title="発音"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
