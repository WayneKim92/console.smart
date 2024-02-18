export function smart(...args: any[]) {
  let output = '';
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
        output += '\n';
        break;

      case 'function':
        let funcStr = arg.toString().replace(/^ +/gm, '\t');
        funcStr = funcStr.replace(/\t+}$/, '}');
        output += funcStr + '\n';
        break;

      case 'undefined':
        output += 'undefined\n';
        break;

      case 'string':
        output += `"${arg}"\n`;
        break;

      default:
        output += arg + '\n';
        break;
    }
  }
  console.log(output);
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

console.smart = smart;
