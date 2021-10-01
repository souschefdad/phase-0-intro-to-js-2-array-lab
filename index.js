// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"] 

function destructivelyAppendCat(name) {
    const AppendedCat = cats.push(name);
    return AppendedCat;
}

function destructivelyPrependCat(name) {
    const PrependedCat = cats.unshift(name);
    return PrependedCat;
}

function destructivelyRemoveLastCat() {
    const DeRemoveLast = cats.pop();
    return DeRemoveLast;
}

function destructivelyRemoveFirstCat() {
    const DeRemoveFirst = cats.shift();
    return DeRemoveFirst;
}

function appendCat(name) {
    const NoDeAppend = [...cats, name];
    return NoDeAppend;
}

function prependCat(name) {
    const NoDePrepend = [name, ...cats];
    return NoDePrepend;
}

function removeLastCat() {
    const removeLast = cats.slice(0,-1);
    return removeLast;
}

function removeFirstCat() {
    const removeFirst = cats.slice(1);
    return removeFirst;
}
