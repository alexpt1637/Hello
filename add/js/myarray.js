// ��� �������� ������� ����������� ��������� new Array()
var myArray = new Array();

// �������� ������ ������������� �������:
var myArray = [];	// ������� ������ ������
var people = ["Tom", "Alice", "Sam"];	// ����� �������� ��������� ������
//console.log(people);

console.log(people[0]); 	// Tom
var person3 = people[2]; 	// Sam
console.log(person3); 		// Sam

people[2] = "Bob";
var person3 = people[2];
console.log('person3 = ' + person3);