/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  // toString 함수를 사용하여 숫자를 문자로 변환
  // .split('') 함수를 사용하여 문자로 변한 숫자를 한자리씩 arr에 저장.
  // .reverse 함수로 arr의 안에 숫자를 반전 시킴.
  //. .join("")함수를 사용하여 뒤집어진 문자화된 숫자를 한 문자로 변경
  // parseInt로 문자를 숫자로 바꾼후, 파라미터 x와 비교하여 같다면 true 같지 않다면 false를 return
  let reversed = x.toString();
  let changed = reversed.split("").reverse().join("");

  let palind = parseInt(changed);
  if (palind == x) {
    return true;
  } else {
    return false;
  }
};