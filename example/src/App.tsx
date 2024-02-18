import 'console.smart';
import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    const object = {
      name: 'John Doe',
      age: 30,
      isMarried: false,
      hobbies: ['reading', 'gaming', 'coding'],
      address: {
        city: 'Seoul',
        country: 'South Korea',
      },
      sayHello: function () {
        return 'Hello, world!';
      },
    };

    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const array2 = [
      [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      [11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
    ];
    const array3 = [
      [
        [1, 2],
        [2, 3],
        [3, 4],
      ],
      [
        [4, 5],
        [5, 6],
        [6, 7],
      ],
      [
        [7, 8],
        [8, 9],
        [9, 10],
      ],
    ];

    const now = new Date();

    console.smart(
      'Hello',
      'world',
      123,
      '123',
      'true',
      true,
      false,
      'false',
      null,
      'null',
      undefined,
      'undefined',
      function () {
        return 'Hello, world!';
      },
      undefined,
      object,
      object.sayHello,
      array,
      array2,
      array3,
      now,
      '2024-02-18T09:52:33.423Z',
      RegExp('abc', 'g'),
      '/abc/g',
      Symbol()
    );
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
