In this chapter, we can learn so many new things, methodes etc.
    * we can define function() inside of an object.

_______________________

* If we use `arrow function`, then we need to use the exact object variable name, not the `this` keyword.
* If we use `normal function`, then we use `this` keyword. 
_______________________________________________________________

** A JS object is an entity, having state and behaviour(properties & methods)
** JS object has a special property called, `Prototype`. <-- prototype itself an OBJECT.
_____________________________________________________

we can create/use custom prototype ->
    * To set prototype, we use -> '__proto__'
Exmp: 
    const data = {
  company: "Infosis",
  turnOver: "600 cr",
  share: function () {
    console.log("Net share is 25% of turnover");
  },
};

const incometax = {
  annualTax: "25 cr",
};
// Use 'data' object as prototype in 'incometax' object.
incometax.__proto__ = data;  

** If objects and prototype has same method,
    then Object method will be used.
____________________________________________________________    
                                `CLASSES`
                               ------------
    Classes is a program code templete for creating object.
    Those object will have some state(variables) & some behaviour(functions) inside it.
