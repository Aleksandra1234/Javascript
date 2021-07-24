let first = prompt('Подвижный холм песка в пустыне называется:\n А. Дюна\n Б. Утес\n В. Скала');
if (first == 'A') {
     first = 2;
}
else {
    first = 0;
    }
let second = prompt('Чего не может торнадо?\nА. Стоять на месте\nБ. Поднять в воздух автомобиль\nВ. Вырвать с корнями дерево');
if (second == 'A') {
    second = 2;
}
else {
    second = 0;
    }
let third = prompt('Где находится яд у кобры?\nА. На кончике языка\nБ. В зубе\nВ. На хвосте');
if (third == 'Б') {
    third = 2;
}
else {
    third = 0;
}
let amount = first + second + third;
alert(`Сумма набранных баллов составляет: ${amount}`)
