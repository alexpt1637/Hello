// Циклы
// приращение счетчика на единицу:
var people = ["Tom", "Alice", "Bob", "Sam"];
for(var i = 0; i<people.length; i++){
    //console.log(people[i]);
	//alert(people[i]);
}

// уменьшать счетчик на единицу:
var people = ["Tom", "Alice", "Bob", "Sam"];
for(var i = people.length - 1; i >= 0; i--){
    //console.log(people[i]);
	//alert(people[i]);
	// массив выводится с конца, а перебор массива начинается с i = 3 до i = 0
}

// for..in
// Цикл for..in предназначен для перебора массивов и объектов
var people = ["Tom", "Alice", "Bob", "Sam"];
for(var index in people){
    //console.log(people[index]);
	//alert(people[index]);
}

// Цикл for...of
// Цикл for...of похож на цикл for...in и предназначен для перебора коллекций, например, массивов
// Текущий перебираемый элемент коллекции помещается в переменную val,
// значение которой затем выводится на консоль (или окно программы)
let users = ["Tom", "Bob", "Sam"];
for(let val of users)
    //console.log(val);
	//alert(val);