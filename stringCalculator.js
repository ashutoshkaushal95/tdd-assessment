const add = (numbers) => {
  console.log("numbers input: ", numbers);

  if (numbers === "") return 0;

  // check for custom delimeters
  let delimiter = /,|\n/;
  if (numbers.startsWith("//")) {
    const parts = numbers.split("\n");

    console.log("parts: ", parts);

    delimiter = new RegExp(parts[0].slice(2));

    console.log("delimiter: ", delimiter);

    numbers = parts.slice(1).join();

    console.log("numbers converted: ", numbers);
  }

  const numArray = numbers.split(delimiter).map(Number);

  console.log("numArray: ", numArray);

  // Check for negative numbers
  const negatives = numArray.filter((num) => num < 0);
  if (negatives.length > 0) {
    throw new Error(`Negative numbers not allowed: ${negatives.join(", ")}`);
  }

  return numArray.reduce((sum, num) => sum + num, 0);
};
console.log("answer", add("//;\n1;2;4;5"));
module.exports = add;
