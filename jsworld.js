alert(' Part 1');
var mark = +prompt('введите свой возраст');
if (mark < 18) {
    alert(' Вы еще молоды, Вам нужно учиться ');
} else if (mark < 50) {
    alert(' Вам нужно работать ')
} else if (mark < 60) {
    alert(' Вам скоро на пенсию ')
} else if (mark > 60) {
    alert(' Вы пенсионер ')

} else {
    alert(' Что-то пошло не так. ')
}
alert(' Part 2');
var time = +prompt(' Введите время в числах ')
switch (time) {
    case 1:
        alert(' час ночи');
        break;
    case 2:
        alert(time + ' часа ночи');
        break;
    case 3:
        alert(time + ' часа ночи');
        break;
    case 4:
        alert(time + ' часа ночи');
        break;
    case 5:
        alert(time + '  часов утра');
        break;
    case 6:
        alert(time + '  часов утра');
        break;
    case 7:
        alert(time + '  часов утра');
        break;
    case 8:
        alert(time + '  часов утра');
        break;
    case 9:
        alert(time + ' часов утра');
        break;
    case 10:
        alert(time + ' часов утра');
        break;
    case 11:
        alert(' часов утра');
        break;
    case 12:
        alert(time + ' часа дня');
        break;
    case 13:
        alert(' час дня');
        break;
    case 14:
        alert(' 2 часа дня');
        break;
    case 15:
        alert('3 часа дня');
        break;
    case 16:
        alert('4 часа дня');
        break;
    case 17:
        alert('5 часа дня');
        break;
    case 18:
        alert('6 часов вечера');
        break;
    case 19:
        alert('7 часов вечера');
        break;
    case 20:
        alert('8 часов вечера');
        break;
    case 21:
        alert('9 часов вечера');
        break;
    case 22:
        alert('10 часов вечера');
        break;
    case 23:
        alert('11 часов вечера');
        break;
    case 00 || 0:
        alert('12 часов вечера');
        break;
    default:
        alert(' Что-то пошло не так.');
        break;
}
alert(' Part 3');
var a = +prompt("Введи первое число: ");
var b = +prompt("Введи второе число: ");
var c = +prompt("Введи третье число: ");
if ((a == b) && (a == c) && (b == c)) {
    alert("Вы ввдели одинаковые числа, введите разные. ")
} else if ((a > b) && (a < c) || (a < b) && (a > c)) {
    alert(a)
} else if ((b > a) && (b < c) || (b < a) && (b > c)) {
    alert(b)
} else {
    alert(c)
}