export function smart(...args: any[]) {
  let output = '';
  for (const arg of args) {
    if (typeof arg === 'object') {
      output += '\n';
      if (arg === null) {
        output += 'null ';
      } else if (arg instanceof Date) {
        output += arg.toISOString() + ' '; // Date 객체 처리
      } else if (arg instanceof RegExp) {
        output += arg.toString() + ' '; // RegExp 객체 처리
      } else if (Array.isArray(arg)) {
        console.table(arg); // 2차원 배열 이상일 경우 console.table을 사용하여 출력
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
    } else if (
      typeof arg === 'string' &&
      (arg === 'true' || arg === 'false' || 'undefined' || 'null')
    ) {
      output += `"${arg}" `; // 'true' 또는 'false' 문자열 처리
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
