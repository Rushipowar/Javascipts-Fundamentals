function Match(pattern, string){

    let regex = new RegExp(pattern);

    return regex.test(string);
}


const pattern1 = /\d+/;  
const pattern2 = /[a-zA-Z]+/;  


const  string1 = "12345";        
const  string2 = "Hello, World!"; 
const  string3 = "abc123";        

console.log(Match(pattern1, string1)); // true
console.log(Match(pattern2, string2)); // true
console.log(Match(pattern1, string2)); // false
console.log(Match(pattern1, string3)); // true
console.log(Match(pattern2, string3)); // true
