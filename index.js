//paswword contains of 5 characters in random way
/*const characters = "abcdefghijklmnopqrstuvwxyz0123456789"; 
functin generatePassword(length){
    let password="";
    for (let i=0;i<length;i++){
        password+= characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return password;
}
const randompassword=generatePassword(5)
console.log("Password:",randompassword)
*/
//password contains one charcter and one number
const string = "abcdefghijklmnopqrstuvwxyz0123456789"; 
const num="0123456789"
const char="!@#$%^&*"
function generatePassword(length){
    let password="";
    let numbers=num[Math.floor(Math.random()*num.length)]
    let characters=char[Math.floor(Math.random()*char.length)]
    for (let i=0;i<length-2;i++){
        password+= string.charAt(Math.floor(Math.random() * string.length));
    }
    function finalpassword(c){
        let position=Math.floor(Math.random()*(password.length+1))
        password=password.slice(0,position)+c+password.slice(position);

    }
    finalpassword(numbers);
    finalpassword(characters)
    return password;
}

const randompassword=generatePassword(5)
console.log("Password:",randompassword)
