export function smart(...args: any[]) {
  let output = '';
  for (const arg of args) {
    if (typeof arg === 'object') {
      output += JSON.stringify(arg, null, 2) + ' ';
    } else {
      output += arg + ' ';
    }
  }
  console.log(output);
}

console.log(`
                           _                                     _
                          | |                                   | |
  ___ ___  _ __  ___  ___ | | ___       ___ _ __ ___   __ _ _ __| |_
 / __/ _ \\| '_ \\/ __|/ _ \\| |/ _ \\     / __| '_ \` _ \\ / _\` | '__| __|
| (_| (_) | | | \\__ \\ (_) | |  __/  _  \\__ \\ | | | | | (_| | |  | |_
 \\___\\___/|_| |_|___/\\___/|_|\\___| (_) |___/_| |_| |_|\\__,_|_|   \\__|
`);

console.smart = smart;
