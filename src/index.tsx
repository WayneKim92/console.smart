let separator = ' ';

function smart(...args: any[]) {
  let output = '[console.smart]\n';

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
