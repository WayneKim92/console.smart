# console.smart

Smartly outputs content to the console.

## Installation

```sh
npm install console.smart
```

## Config
```shell
# Add the file below to the root of the project.
// console.d.ts
declare global {
  interface Console {
    smart(...args: any[]): void;
  }
}

export {};

```


## Usage

```js
import 'console.smart';

console.smart('Hello World!');
```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
