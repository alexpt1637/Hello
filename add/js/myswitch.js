var str = prompt("Введите сумму", 100);
var sum = parseInt(str);

// В конце каждого блока сase ставится оператор break, чтобы избежать выполнения других блоков.
// Если мы хотим также обработать ситуацию, когда совпадения не будет найдено, то можно добавить блок default:
switch(sum){
	case 100:
		alert("Доход в месяц равен 100 руб.");
        break;
	case 200:
		alert("Доход в месяц равен 200 руб.");
        break;
	case 300:
		alert("Доход в месяц равен 300 руб.");
        break;
	default:
		alert("Доход в месяц равен " + sum + " руб.");
        break;
}

var pension = 41300 * 12;
var sum = sum * 12;
var sumyar = sum + pension;
alert('Годовой доход равен ' + sumyar + ' руб.: \nЗарплата ' + sum + ' и ' + pension + ' руб.');