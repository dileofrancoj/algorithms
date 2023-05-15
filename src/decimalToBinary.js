function fractionToBinary(fraction) {
  let [numerator, denominator] = fraction.split("/");
  numerator = parseInt(numerator);
  denominator = parseInt(denominator);

  let result = "";
  let count = 0;
  while (count < 32 && numerator != 0) {
    numerator *= 2;
    if (numerator >= denominator) {
      result += "1";
      numerator -= denominator;
    } else {
      result += "0";
    }
    count++;
  }

  return "0." + result;
}

console.log(fractionToBinary("9/25"));
