// �����
// ���������� �������� �� �������:
var people = ["Tom", "Alice", "Bob", "Sam"];
for(var i = 0; i<people.length; i++){
    //console.log(people[i]);
	//alert(people[i]);
}

// ��������� ������� �� �������:
var people = ["Tom", "Alice", "Bob", "Sam"];
for(var i = people.length - 1; i >= 0; i--){
    //console.log(people[i]);
	//alert(people[i]);
	// ������ ��������� � �����, � ������� ������� ���������� � i = 3 �� i = 0
}

// for..in
// ���� for..in ������������ ��� �������� �������� � ��������
var people = ["Tom", "Alice", "Bob", "Sam"];
for(var index in people){
    //console.log(people[index]);
	//alert(people[index]);
}

// ���� for...of
// ���� for...of ����� �� ���� for...in � ������������ ��� �������� ���������, ��������, ��������
// ������� ������������ ������� ��������� ���������� � ���������� val,
// �������� ������� ����� ��������� �� ������� (��� ���� ���������)
let users = ["Tom", "Bob", "Sam"];
for(let val of users)
    //console.log(val);
	//alert(val);