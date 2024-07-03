// เริ่มเขียนโค้ดตรงนี้
function printStar(n) {
  let nullString = "";
  for (let i = 0; i < n; i++) {
    for (let j = 0; j <= i; j++) {
      nullString += "*";
    }
    nullString += "\n";
  }
  return nullString;
}

console.log(printStar(3));
