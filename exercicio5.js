const stringChars = "fernando"; // YOU CAN CHANGE THIS NUMBER FOR TESTING CASES

function changeStringChars(str) {
  let stringInverted = "";

  console.log(`String before change ${str}`);

  for (let i = str.length - 1; i >= 0; i--) {
    stringInverted += str[i];
  }

  return stringInverted;
}

console.log(changeStringChars(stringChars));
