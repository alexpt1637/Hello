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

// ����������� �������
var numbers1 = [0, 1, 2, 3, 4, 5 ]; 	// ���������� ������
var numbers2 = [[0, 1, 2], [3, 4, 5] ]; // ��������� ������

var people = [
        ["Tom", 25, false],
        ["Bill", 38, true],
        ["Alice", 21, false]
];
 
//alert("people[0] = " + people[0]); // ["Tom", 25, false]
//alert("people[1] = " + people[1]); // ["Bill", 38, true]

people[0][1] = 56; 		// ����������� ��������� ��������
//alert("people[0][1] = " + people[0][1]); 	// 56
     
people[1] = ["Bob", 29, false]; // ����������� ������
//alert("people[1][0] = " + people[1][0]); 			// Bob

var numbers = [];
numbers[0] = []; // ������ numbers - ��������� ������
numbers[0][0]=[]; // ������ numbers - ���������� ������
numbers[0][0][0] = 5; // ������ ������� ����������� ������� ����� 5
console.log(numbers[0][0][0]);