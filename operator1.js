var names = ["Maria", "Antony", "Joy", "Juan"];

// Task 1: Function to insert a name to the end of the list
function insertNameToEnd(name) {
  names.push(name);
}

insertNameToEnd("John"); // Inserting "John" to the end of the list
console.log(names); // Output: ["Maria", "Antony", "Joy", "Juan", "John"]

// Task 2: Function to check if a name exists in the list
function checkNameExists(name) {
  return names.includes(name);
}

console.log(checkNameExists("Joy")); // Output: true
console.log(checkNameExists("David")); // Output: false

// Task 3: Function to compare two lists and return the common names
function compareNameLists(newNames) {
  var commonNames = names.filter((name) => newNames.includes(name));
  return commonNames;
}

var newNames = ["Maria", "Antony", "Elena", "Juan"];
console.log(compareNameLists(newNames)); // Output: ["Maria", "Antony", "Juan"]

// Task 4: Function to get the lengths of names as an array
function getNameLengths(namesList) {
  var lengths = [];

  for (var i = 0; i < namesList.length; i++) {
    lengths.push(namesList[i].length);
  }

  return lengths;
}

var nameLengths = getNameLengths(names);
console.log(nameLengths); // Output: [5, 6, 3, 4, 4]
