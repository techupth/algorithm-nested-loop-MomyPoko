// เริ่มเขียนโค้ดตรงนี้
function printPattern(n) {
  let nullString = "";
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      nullString += j;
    }
    nullString += "\n";
  }
  return nullString;
}

console.log(printPattern(3));
