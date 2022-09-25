var shoppingCart = {
    shirt : 2,
    pant : 2,
    shoes : 1,
    sunglass : 2,
    books : 5,
    pen : 12
}


console.log(typeof(shoppingCart));

const keys = Object.keys(shoppingCart);
const values = Object.values(shoppingCart)

console.log(keys);
console.log(values);

for(var i=0; i < keys.length;i++){
    console.log(keys[i]);
}