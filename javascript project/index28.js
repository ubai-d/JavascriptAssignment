let age = Math.floor(Math.random()*66);
if (age < 2){
    console.log("A person is baby");
}
else if(age == 2|| age < 4){
    console.log("A person is toddler");
}
else if(age == 4 || age < 13){
    console.log("A person is a kid")
}
else if (age == 13|| age < 20){
    console.log("A person is a teenager");
}
else if (age == 20 || age < 65){
    console.log("A person is adult");
}
else if (age == 65){
    console.log("A person is elder");
}
else {
    console.log("A person is geeting an old");
}
