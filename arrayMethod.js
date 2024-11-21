const fruits = ["Apple", "Orange", "Banana", "Coconut"];
console.log(fruits);

fruits.push("Cherry") // push is used to add items at the end of an array
console.log(fruits);

fruits.unshift("Mango",) // unshift is used to add an item(s) at the beginning of an array
console.log(fruits);

fruits.pop(); // pop removes the last item in an array
console.log(fruits);

fruits.shift(); // shift removes the first item in the array
console.log(fruits);

fruits.splice(1, 1); // splice removes an identified item, it uses two parameter, the first to identify the index of the array and the second how many to remove
console.log(fruits)

fruits[1] = "Blueberry"; // To replace an item in an array call on the variable and add [inside this the index or the item number the replace], and add the new item using string.
console.log(fruits);

fruits.splice(1, 0, "Strawberry"); // splice can also be used to add items into an array, to do that, add 0 to tell it not to remove items but to add.
console.log(fruits)

for( let i = 0; i < fruits.length; i++){
    console.log(fruits[i])
}

// Mapping Method
 fruits.map( fruit => console.log(fruit)) // To use mapping method we call on the variable to display . map and add an argument by creating a new variable using arrow function and console log the new variable .

 let upperCaseFruits = fruits.map(fruit => fruit.toUpperCase())  // to change to uppercase first create a variable, next call on the variable to change to uppercase.map and add the parameters like this: a new variable with arrow function .toUpperCase() and lastly console log the first variable you created
 console.log(upperCaseFruits);

 let longFruits = fruits.filter( fruit => fruit.length > 7);
 console.log(longFruits);

 let foundFruit = fruits.find( fruit => fruit === "Apple") // use .find to know if an item is inside an array
 console.log(foundFruit);

 let hasApple = fruits.includes("Apple");
 console.log(hasApple);

 // Assignment 1
 // Concat Method is a type of array method that  joins two or more strings, it  does not change the existing strings.
// Am going to create two arrays and join them togather using concat method
 let letter = ["informal", "formal", "description"]; // this is the first array variable i created
 let person = ["shedrack", "meshack", "abednego"]; // this is the second one
 let work = letter.concat(person); // to join them both together, i have to create a new variable and assign it a value
 // WORK , next i call on my first array .concat(inside here i will add the second array PERSON) if you console log work
 // you will see that the two arrays are joined together.
 work.map(works => console.log(works)); // next i want to make the two arrays to display independently on its own
 // so i will call on the value to display .map(and inside here i will insert my parameters)

 //Assignment 2
//The sort() method sorts the elements of an array,  
//it also arranges the elements as strings in alphabetical and ascending order.
// it also overwrites the original array.
 work.sort();
 console.log(work)
 // Am going to reverse the items in the array using ARRAY REVERSE() METHOD.
 // Array reverse() method reverses the order of  every item in the array
 work.reverse(); // so reverse the order of the items in the concated array we have , 
 // we will call on the variable  we concated or joined and add .reverse() 
 console.log(work) // if we console log the variable it will be reversed

 //Assignment 3
 // using mapping() method create an array of objects and display each item in the console
 const userInfos = [
    {name:"Chadwick", location: "Los Angeles", work: "Actor", gender: "Male"} // first create an array of objects
 ];
userInfos.map(userInfo => console.log( "name:",userInfo.name,  "location:",userInfo.location, "work:", userInfo.work,"gender:", userInfo.gender)); // use mapping method to display each item
// call on variable you want to map out and add .map() inside the parameter add your arguments and when console logging ,
// console log the new variable you created inside the map parameter .name or any item in the array object...
