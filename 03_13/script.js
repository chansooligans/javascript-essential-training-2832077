/**
 * Use the global Date() object to transform dates.
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
 */

import Backpack from "./Backpack.js";
import Book from "./Book.js";

const newbook = new Book("Harry Potter", 480, "JK Rowling");
const everydayPack = new Backpack(
  "Everyday Backpack",
  30,
  "grey",
  15,
  26,
  26,
  false,
  "December 5, 2018 15:00:00 PST"
);
console.log("The everydayPack object:", everydayPack);
console.log("Date acquired:", everydayPack.dateAcquired);
console.log("New book is called", newbook.title);
