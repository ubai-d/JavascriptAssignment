const locations = ["Swat","Makkah", "Madina", "GhareHira","Kashmir"];
// Print your array in its original order.
console.log(locations);

// Print your array in alphabetical order without modifying the actual list.
let sortedLocations = locations.slice().sort();
console.log(sortedLocations);

//Show that your array is still in its original order by printing it.
console.log(locations);

//printing arrays in reverse alphabatical order
let revesesortedlocation = locations.slice().reverse();
console.log(revesesortedlocation);

// printing array in original form
console.log(locations);

// Reverse the order of your list. Print the array to show that its order has changed.
locations.reverse();
console.log(locations);

// Reverse the order of your list again. Print the list to show it’s back to its original order.

locations.reverse();
console.log(locations);

// Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
locations.sort();
console.log(locations);

// Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
locations.sort();
console.log(locations);