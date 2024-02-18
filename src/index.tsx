export function smart(...args: any[]) {
  let output = '';
  for (const arg of args) {
    if (typeof arg === 'object') {
      output += '\n'
      if (arg === null) {
        output += 'null ';
      } else if (Array.isArray(arg)) {
        output += '[ ' + arg.map(item => JSON.stringify(item, null, 2)).join(', ') + ' ] ';
      } else {
        output += JSON.stringify(arg, null, 2) + ' ';
      }
      output += '\n'; // 객체가 전달되면 한 줄 개행 추가
    } else if (typeof arg === 'function') {
      // 함수를 문자열로 변환하고, 각 줄의 시작 부분에서 공백 문자를 제거
      let funcStr = arg.toString().replace(/^ +/gm, '\t');
      // 마지막 줄의 시작 부분에서 탭 문자를 제거
      funcStr = funcStr.replace(/\t+}$/, '}');
      output += funcStr + ' ';
    } else if (typeof arg === 'undefined') {
      output += 'undefined ';
    } else {
      output += arg + ' ';
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
