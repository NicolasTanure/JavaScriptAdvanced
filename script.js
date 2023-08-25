/**
 * Practice: Making classes and objects
 *
 * - Find a type of object you have more than one of in your house (eg. clothing, writing tools, etc).
 * - Create a class describing this object type - its properties and methods.
 * - Create several objects using the class.
 * - Test the objecs by calling their properties and using their methods in the console.
 */
import Backpack from "./Backpack.js";
import Table from "./Table.js";

const MyBackpack = new Backpack("MyBackpack", 30, "black", 15, 25, 25, false);
const MyTable = new Table("grey", 100, 3);

console.log(MyBackpack);
console.log(MyBackpack.pocketNum);
console.log(MyBackpack.color);
console.log(Table.color);
console.log(MyTable);
console.log(Table);

console.log(MyTable.tableChangerColor("blue"));
