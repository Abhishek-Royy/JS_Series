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
let toStr = veg.toString();
console.log(`After convert: ${toStr}`);

// concat() : example -> We can concat multiple Arrays.
let actor = ["Hritick", "Vicky", "Ranbir"];
let actress = ["Deepika", "Jhanvi", "Katrina"];
let south_actress = ["Rashmika", "Kirti", "Sai", "Samantha"];
let celeb = actor.concat(actress, south_actress);
console.log(celeb);

// unshift() : example
south_actress.unshift("Shrindhi"); //it's add 'Shrindhi' at the first position of 'south_actress' array.
console.log(south_actress);

// shift() : example
actor.shift("Hritick"); //it's delete 'Hritick' from first position of 'actor' array.
console.log(actor);

// slice() : example
let random_num = [23, 54, 78, 91, 29, 12, 41, 85];
console.log(random_num.slice(2, 6));

// splice() : example ->we can add elem, delete elem, replace elem all we can do.
let digit = [12, 54, 78, 96, 32, 24];
digit.splice(1, 2, 101, 202);
console.log(digit);

/* Create an array to store companies,
        Remove the first company
        Remove one company and add another company
        add amazon at the end. */
let company = ["TCS", "Google", "Microsoft", "Uber", "Cognigent"];
company.splice(0, 1);

company.splice(2, 1, "Accenture");

company.splice(4, 0, "Amazon");
console.log(company);

