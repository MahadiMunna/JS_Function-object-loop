var student = {
    id: '203-15-3881',
    name: 'Munna',
    class: 'L2T3'
}

console.log(student);
console.log(student.name);


//way of changing properties value.
student.name='Hasan';
console.log(student);
console.log(student.name);

student['name']= 'Mahadi';
console.log(student);
console.log(student['name']);

var sName = 'class';
var sNameValue = 'L3T1';
student[sName]= sNameValue;
console.log(student);
console.log(student.class);

//find out properties and values only
var properties = Object.keys(student);
var propertiesValues = Object.values(student);

console.log(properties);
console.log(propertiesValues);