//- # Variables temporaires
//- ## let a = 1; -> 2
//- ## let b = 2; -> 3
//- ## let c = 3; -> 1
//- ## Afficher le changement des variables

/*
let a = 1;
let b = 2;
let c = 3;

let temp = a;

a = b;
b = c; 
c = temp;

console.log(a);
console.log(b);
console.log(c);
 */




//- # Exo 1
//    - ## Afficher 4, 3, 2, 1
//    - ## let a = 1; -> 4
//    - ## let b = 2; -> 3
//    - ## let c = 3; -> 2
//    - ## let d = 4; -> 1
//    - ## Afficher le changement des variables

/*
let a = 1;
let b = 2;
let c = 3;
let d = 4;

let temp;

temp = a;


a = d;
d = temp;
temp = b;
b = c;
c = temp
console.log(a);
console.log(b);
console.log(c);
console.log(d);
*/




//- #  Exo 2
//    - ## let b = 2; -> 3
//    - ## let c = 3; -> 4
//    - ## let d = 4; -> 1
//    - ## Afficher le changement des variables


/*let a = 1;
let b = 2;
let c = 3;
let d = 4;

let temp;
temp = a;
a =b;
b = c;
c = d; 
d = temp;
console.log(a);
console.log(b);
console.log(c);
console.log(d);
*/



//- # Exo 3
//    - ## Afficher 4, 3, 2, 1 avec une variable temporaire
//    - ## let tableau = [1, 2, 3, 4];


let a = 4;
let b = 3;
let c = 2;
let d = 1;

let tab = [a, b, c, d];
console.log(tab);
console.log(tab.reverse());



//    - # Exo 4
//    - ## let a = 1 -> 4
//    - ## let b = 2 -> 5
//    - ## let c = 3 -> 1
//    - ## let d = 4 -> 2
//    - ## let e = 5 -> 6
//    - ## let f = 6 -> 3
//    - ## Afficher le changement des variables

/*
let a = 1;
let b = 2;
let c = 3;
let d = 4;
let e = 5;
let f = 6;

let temp = a;

a = d;
d = b;
b = e;
e = f;
f = c;
c = temp;

console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);
console.log(f);
*/

