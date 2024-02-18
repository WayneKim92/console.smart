import { Platform } from 'react-native';

let separator = ' ';

function smart(...args: any[]) {
  let output = '';

  try {
    for (const arg of args) {
      switch (typeof arg) {
        case 'object':
          if (arg === null) {
            output += 'null ';
          } else if (arg instanceof Date) {
            output += arg.toISOString().trim() + ' ';
          } else if (arg instanceof RegExp) {
            output += arg.toString() + ' ';
          } else if (Array.isArray(arg)) {
            console.table(arg);
          } else {
            output += JSON.stringify(arg, null, 2) + ' ';
          }
          output += separator;
          break;

        case 'function':
          let funcStr = arg.toString().replace(/^ +/gm, '\t');
          funcStr = funcStr.replace(/\t+}$/, '}');
          output += funcStr + separator;
          break;

        case 'string':
          output += `"${arg}"${separator}`;
          break;

        case 'symbol':
          output += arg.toString() + separator;
          break;

        default:
          output += arg + separator;
          break;
      }
    }
  } catch (e) {
    output = args.toString();
  } finally {
    console.log(output);
  }
}

console['smart'] = smart;

// https://gist.github.com/samuthekid/6dbfee2ef6029d544a7d873224d53e16
if (Platform.OS !== 'web') {
  const tab = 2;
  console.table = (data, spc = 0, pre = '') => {
    if (Array.isArray(data)) {
      console.log(' '.repeat(spc), pre, '[');
      data.forEach((item, i) => {
        console.table(item, spc + tab, `${pre}[${i}]`);
      });
      console.log(' '.repeat(spc), '],');
    } else if (typeof data === 'object') {
      console.smart(data);
    } else {
      console.log(' '.repeat(spc), pre, data, `(${typeof data})`);
    }
  };
}

console.log(`
                           _                                     _
                          | |                                   | |
  ___ ___  _ __  ___  ___ | | ___       ___ _ __ ___   __ _ _ __| |_
 / __/ _ \\| '_ \\/ __|/ _ \\| |/ _ \\     / __| '_ \` _ \\ / _\` | '__| __|
| (_| (_) | | | \\__ \\ (_) | |  __/  _  \\__ \\ | | | | | (_| | |  | |_
 \\___\\___/|_| |_|___/\\___/|_|\\___| (_) |___/_| |_| |_|\\__,_|_|   \\__|
`);

export const setSeparator = (newSeparator: string) => {
  separator = newSeparator;
};
