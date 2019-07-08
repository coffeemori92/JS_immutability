const o1 = {name : 'kim'};
Object.freeze(o1);
const o2 = {name : 'lee'};
// o1 = o2; 에러 const 
// o1.name = 'park'; freeze => 값변경 안됨