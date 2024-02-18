import 'console.smart';
import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    const data = {
      name: 'John Doe',
      age: 30,
      isMarried: false,
      hobbies: ['reading', 'gaming', 'coding'],
      address: {
        city: 'Seoul',
        country: 'South Korea',
      },
      sayHello: function() {
        return 'Hello, world!';
      },
    };

    console.smart('Hello', 'world', 123, true, null, undefined, data, [1, 2, 3], data.sayHello);

  }, []);

  return (
    <View style={styles.container}>
      <Text>Open the console</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
