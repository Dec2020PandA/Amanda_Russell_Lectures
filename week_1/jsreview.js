var myvar = "Hello world!"; //string
// var myvar = 5 <- integer/number
// var myvar = true <- boolean

console.log("Whatever I put here goes to console");

var num = 8;

if(num < 10){
    //console.log("The number "+num+" is less than 10"); concat
    //console.log("The number",num,"is less than 10");
    console.log(`The number ${num} is less than 10`);
}
else if(num > 10){
    console.log("The number is greater than 10");
}
else{
    console.log("The number equals 10");
}

// for(var num = 1; num < 11; num++){
//     console.log(num);
// }

var new_num = 1;
while(new_num < 11){
    console.log(new_num);
    new_num++;
}

function myFunction(){
    console.log("it does something");
}

// myFunction();

class User{
    constructor(name, email){
        this.name = name;
        this.email = email;
    }
    //any functions or methods that the user class utilizes
}

var Amanda = new User("Amanda","arussell@codingdojo.com");
console.log(Amanda);
console.log(Amanda['name']);
console.log(Amanda.email);

var arr = [1, "hello", true, [5,9], {"key":"value"}];
console.log(arr);
