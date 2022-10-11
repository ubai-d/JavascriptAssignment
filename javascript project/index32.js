let current_users = ["Ubaid","Ahmed","Anas","Hammad","Fahad"];
let a = current_users;
let new_users = ["Ubaid","sarwar","Farhan","Saeed","Maaz"];
for(i =0 ;i < new_users.length;i++){
    if (new_users[i] == a[i]){
        console.log(new_users[i] + " you have to change the username")
    }
    else{
        console.log(new_users[i]+" userName is availible")
    }
}
