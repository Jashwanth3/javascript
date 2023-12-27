console.log('object tasks');
let person = {
    name: 'John',
    age: 30,
    city: 'new york'
};
delete person.age;
person.job='Engineer';
person.city='San Fransisco';
console.log(person);