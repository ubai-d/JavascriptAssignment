name1 = " Ubaid " + "\n" + " rehman ";
console.log(name1);
name2 = " Ubaid " + "\t" + " rehman ";
console.log(name2);
// using regex to auto delete all spaces
console.log(name1.trim().replaceAll(/\s/g, ''));
console.log(name2.trim().replaceAll(/\s/g, ''));
