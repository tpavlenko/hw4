
//  Создать двумерный массив, заполненный случайными числами в любом диапазоне.

//  Найти колонку, где сумма элементов наименьшая.
//  Найти колонку, где сумма элементов найбольшая.

var mass = [];
mass.length = 5;
var sizeI = mass.length;
var sizeJ = 5;

for (var i = 0; i < sizeI; i++) {
	mass[i] = [];
	mass[i].length = sizeJ;

	for (var j = 0; j < mass[i].length; j++) {
		mass[i][j] = Math.round(Math.random() * 10);
	}
}

var minColumn;
var maxColumn;

var minColumnJ;
var maxColumnJ;

for (var j = 0; j < sizeJ; j++) {
	for (var i = 0, sum = 0; i < sizeI; i++) {
		sum += mass[i][j];
	}

	if (j === 0) {
		minColumn = sum;
		maxColumn = sum;
		minColumnJ = j;
		maxColumnJ = j;
	}

	if (sum < minColumn) {
		minColumn = sum;
		minColumnJ = j;
	}

	if (sum > maxColumn) {
		maxColumn = sum;
		maxColumnJ = j;
	}
}

console.log(minColumnJ, 'minimum sum column');
console.log(maxColumnJ, 'maximum sum column');