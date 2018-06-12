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