// crating aaray that gives error
let list = ["Ubaid","Anas","Faizan","Hammad"]
list[8] = "Zubair";
//  i created this Error by adding value in 8th index instead of 4th, this will create empty values in our array and total values/keys will be 5 in our object but it will show us total length of 9 values.and all empty spaces will be undefined

///////////Resolving this error////////////

/* A filter function that will filter out all the empty values from our array. */
newList = list.filter((l) => l.length > 0);

console.log(newList);