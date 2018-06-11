var date = new Date(); 		// получаем текущую дату
var time = date.getHours(); // получаем текущее время в часах
if(time < 13) 				// сравниваем время с числом 13
    alert('Доброе утро! \nСейчас ' + date + '\n' + time + ' час.'); 	// если время меньше 13
else
    alert('Добрый вечер! \nСейчас ' + date + '\n' + time + ' час.'); // если время равно 13 и больше

// Добрый вечер! Сейчас Mon Jun 11 2018 22:46:43 GMT+1000 (Владивосток, стандартное время) 22 час.

var a = 12, b = 3, c = a * b;
//alert('Рассчет c = ' + c);

var a = c / 2;
//alert('Переопределена переменная a = ' + a);

// С помощью ключевого слова const можно определить константу
const rate = 10;
//alert('Константа rate = ' + rate);

// Дробные числа (числа с плавающей точкой)
var x = 45.2, y = 23.897;
var z = x * y;
alert('x = 45.2, y = 23.897 \nПроизведение двух чисел: ' + z);

// Также мы можем внутри стоки использовать другой тип кавычек:
var companyName = 'Бюро "Рога и копыта"';
alert(companyName);
console.log(companyName);		// Для вывода различного рода информации в консоли браузера
document.write(companyName);	// Программа выводит результат операции напрямую на веб-страницу

// Тип object представляет сложный объект
var user = {name: "Tom", age:24};
user.name = 'Bob';
console.log(user.name);
alert('Возраст студента по имени ' + user.name + ' ' + user.age + ' года');

// Переменные могут динамически менять тип
var xNumber;  // тип undefined
console.log(xNumber);
xNumber = 45;  // тип number
console.log(xNumber);
xNumber = "45"; // тип string
console.log(xNumber);

var xNumber = 45;  // тип number
var yNumber = xNumber + 5;
console.log('тип number ' + yNumber); // 50
     
xNumber = "45"; // тип string
var zNumber = xNumber + 5
console.log('тип string ' + zNumber); // 455

// С помощью оператора typeof можно получить тип переменной
var name = "Tom";
console.log(typeof name); // string