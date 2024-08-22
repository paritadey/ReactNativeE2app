import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Importing FontAwesome for the Love icon

const App = () => {
  const [number, setNumber] = useState(Math.floor(Math.random() * 100) + 1);
  const [guess, setGuess] = useState('');
  const [message, setMessage] = useState('');
  const [showLove, setShowLove] = useState(false);
  const [tries, setTries] = useState(0);

  const handleGuess = () => {
    const numericGuess = parseInt(guess);

    setTries(tries + 1); // Increment the number of tries on each guess

    if (numericGuess === number) {
      setMessage(`You guessed it right in ${tries + 1} tries!`);
      setShowLove(true);
    } else if (numericGuess < number) {
      setMessage('Too low! Try again.');
      setShowLove(false);
    } else {
      setMessage('Too high! Try again.');
      setShowLove(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Guess the Number (1-100)</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={guess}
        onChangeText={setGuess}
        placeholder="Enter your guess"
      />
      <Button title="Guess" onPress={handleGuess} />
      <Text style={styles.message}>{message}</Text>
      <Text style={styles.tries}>Number of Tries: {tries}</Text>
      {showLove && <Icon name="heart" size={50} color="red" />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5fcff',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    width: '80%',
  },
  message: {
    fontSize: 18,
    marginVertical: 10,
  },
  tries: {
    fontSize: 16,
    marginVertical: 10,
  },
});

export default App;