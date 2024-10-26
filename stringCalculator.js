const add = (numbers) => {
  if (numbers === "") return 0;

  let delimiter = /,|\n/; // Default delimiter
  if (numbers.startsWith("//")) {
    const parts = numbers.split("\n");
    delimiter = new RegExp(parts[0].slice(2)); // Extract delimiter
    numbers = parts.slice(1).join("\n"); // Remove delimiter part
  }

  const numArray = numbers.split(delimiter).map(Number);
  return numArray.reduce((sum, num) => sum + num, 0);
};

module.exports = add;
