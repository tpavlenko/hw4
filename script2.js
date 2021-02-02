
//     В одномерном массиве произвести такую замену:

//     1 элемент поменять с 2
//     3 элемент поменять с 4
//     5 элемент поменять с 6 и тд

// Если массив непарный - последний элемент не трогать.

// было 1 2 3 4 5 6, 7, должно стать: 2 1 4 3 6 5, 7

var a = [1, 2, 3, 4, 5, 6, 7];

for (var i = 0, j, size = a.length; i < size; i++) {
	if ((i % 2) == 0)
		j = i;

	var swap = a[i];
	a[i] = a[j];
	a[j] = swap;
}

console.log(a);