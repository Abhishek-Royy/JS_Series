// push() : example
let veg = ["cabage", "potato", "clauflower", "zinger"];
/*let new_add_veg=veg.push("chili")
for(let i of veg){
    console.log(i);
}*/
veg.push("tomato", "bins");
console.log(veg);

// pop() : example
let delete_item = veg.pop();
console.log(veg);
console.log(`Deleted Item: ${delete_item}`);

// toString() : example
let toStr=veg.toString();
console.log(`After convert: ${toStr}`);