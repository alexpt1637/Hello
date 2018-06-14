// Для создания массива применяется выражение new Array()
var myArray = new Array();

// короткий способ инициализации массива:
var myArray = [];	// создаем пустой массив
var people = ["Tom", "Alice", "Sam"];	// можно добавить начальные данные
//console.log(people);

console.log(people[0]); 	// Tom
var person3 = people[2]; 	// Sam
//console.log('person3 = ' + person3); 		// Sam

people[2] = "Gon";		// переопределение элемента массива
var person3 = people[2];
//console.log('person3 = ' + person3);
//alert('person3 = ' + person3);
// установка значений для элементов массива
people[0] = "Bob";
//console.log(people[0]); // Bob

// Многомерные массивы
var numbers1 = [0, 1, 2, 3, 4, 5 ]; 	// одномерный массив
var numbers2 = [[0, 1, 2], [3, 4, 5] ]; // двумерный массив

var people = [
        ["Tom", 25, false],
        ["Bill", 38, true],
        ["Alice", 21, false]
];
 
//alert("people[0] = " + people[0]); // ["Tom", 25, false]
//alert("people[1] = " + people[1]); // ["Bill", 38, true]

people[0][1] = 56; 		// присваиваем отдельное значение
//alert("people[0][1] = " + people[0][1]); 	// 56
     
people[1] = ["Bob", 29, false]; // присваиваем массив
//alert("people[1][0] = " + people[1][0]); 			// Bob

var numbers = [];
numbers[0] = []; // теперь numbers - двумерный массив
numbers[0][0]=[]; // теперь numbers - трехмерный массив
numbers[0][0][0] = 5; // первый элемент трехмерного массива равен 5
console.log(numbers[0][0][0]);