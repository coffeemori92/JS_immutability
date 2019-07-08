function fn(person){
    person = Object.assign({}, person);
    person.name = 'lee';
    return person;
}
let o1 = {name : 'kim'};

// let person = o1;
// person.name = 'lee';

let o2 = fn(o1);
console.log(o1, o2);