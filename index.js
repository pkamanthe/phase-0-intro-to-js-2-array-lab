let cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    cats.push(name); // Adds the new cat to the end of the cats array.
}
function destructivelyPrependCat(name) {
    cats.unshift(name); // Adds the new cat to the beginning of the cats array.
}

function destructivelyRemoveLastCat() {
    cats.pop(); // Removes the last cat from the array.
}

function destructivelyRemoveFirstCat() {
    cats.shift(); // Removes the first cat from the array.
}
function appendCat(name) {
    return [...cats, name]; // Returns a new array with the new cat appended.
}
function prependCat(name) {
    return [name, ...cats]; // Returns a new array with the new cat at the beginning.
}

function removeLastCat() {
    return cats.slice(0, -1); // Returns a new array with the last cat removed.
}

function removeFirstCat() {
    return cats.slice(1); // Returns a new array with the first cat removed.
}