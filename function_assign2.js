function fn(person){
    person.name = 'lee';
}
let o1 = {name : 'kim'};
let o2 = Object.assign({}, o1);
fn(o2);
console.log(o1, o2);