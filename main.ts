//funtion Overloded

function add(a:string,b:string):string;   // Use to String method 
function add (a:boolean, b:boolean):boolean;  // Use to number 
function add (a:string, b:number):string;  // Use string and Number combine method
function add(a:any, b:any){
    return a+b;
}
let s1 = add("hello", "world")
let s2 = add ("true","false")
let s3 = add("helloWorld",22)

console.log(s1);
console.log(s2);
console.log(s3);


