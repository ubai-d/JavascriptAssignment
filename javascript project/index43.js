// showing the array with the great
var magiciansnames =new Array("Ubaid","Ahmed","Faizan","Hammad");
var magiciansnames1 =new Array("The Great ");
function make_great(arr_magiciansnames) {
    for (i = 0 ;i < arr_magiciansnames.length;i++)
    console.log(magiciansnames1 + magiciansnames[i]);
}
make_great(magiciansnames);
// showing the original array
var magiciansnames =new Array("Ubaid","Ahmed","Faizan","Hammad");
function show_magicians(arr_magiciansnames) {
    for (i = 0 ;i < arr_magiciansnames.length;i++)
    console.log(magiciansnames[i]);
}
show_magicians(magiciansnames);