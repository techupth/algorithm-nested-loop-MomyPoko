function multiplicationTable(n) {
  let nullString = "";

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      let num = i * j;
      nullString += num + "\t";
    }
    nullString += "\n";
  }
  return nullString;
}

console.log(multiplicationTable(5));
