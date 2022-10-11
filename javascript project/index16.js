arr = ["Anas","Hammad","Sharjeel","Awais" ];
// adding first guest at beigning
arr.unshift("Hamza");
// adding second guest at middle
arr.splice(2,0,"Fahad");
//adding the last guest at end
arr.splice(6,0,"Ahmed");
//sending invite to everyone
for (let x = 0;x<=6;x++){
     console.log(arr[x]+ " you are invited for the dinner")
}

