import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { Button } from 'react-native-elements'


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
          style={{ height: 40, width: 300 }}
          onChangeText={(text) => this.setState({ word: text })}
          value={this.state.word}
        />
        <View style={{ flexDirection: 'row' }}>
          <Button
            raised
            onPress={() => {
              Expo.Speech.speak(this.state.word);
            }}
            icon={{ name: 'mic' }}
            backgroundColor='black'
            title='発音' />
          <Button
            raised
            onPress={() => {
              this.setState({ word: '' });
            }}
            icon={{ name: 'clear' }}
            backgroundColor='black'
            title='クリア' />
        </View>
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
