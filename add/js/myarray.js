// ��� �������� ������� ����������� ��������� new Array()
var myArray = new Array();

// �������� ������ ������������� �������:
var myArray = [];	// ������� ������ ������
var people = ["Tom", "Alice", "Sam"];	// ����� �������� ��������� ������
//console.log(people);

console.log(people[0]); 	// Tom
var person3 = people[2]; 	// Sam
//console.log('person3 = ' + person3); 		// Sam

people[2] = "Gon";		// ��������������� �������� �������
var person3 = people[2];
//console.log('person3 = ' + person3);
//alert('person3 = ' + person3);
// ��������� �������� ��� ��������� �������
people[0] = "Bob";
//console.log(people[0]); // Bob