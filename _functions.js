/*MINIMUM
1. Напиши всі можливі варіанти створення функцій.*/
/*
Every JavaScript function is actually a Function object. 
This can be seen with the code (function () {}).constructor === Function, which returns true. 
        A) Існують вбудовані функції:
                - alert(message)
                - prompt(message, default)
                - confirm(question)
А також ми мижемо створити самотужки:
        B) Функции вида "function declaration statement"
Приклад:
function square(number) {       в рядку 14 ініціалізуємо функцію з ключевим словом function назвою square та задаємо їй список параметрів через кому (тут параметр number). Якщо параметрів немає, ми залишаємо пусті дужки. Потім відкриваємо тіло функції з фігурної дужки
  return number * number;       в рядку 15 оголошуємо вираз повернення значення який обчислює вираз і повертає його значення та пишемо вираз із значенням параметра 
} 

        C) Функции вида "function definition expression" тобто створюється функція і присвоюється як значення змінній
але в такому випадку ми не можемо викликати функцію перед ініціалізацією змінної, тому що виконання коду ще не досягає частини його коду НА ВІДМІНУ від (B) виду
Приклад:
let square = function(number) { 
    return number * number
}
        D) Функції без назви:
        function () { 
            alert(`Hello world`);
        }
        
        E) Існує ще один простий та короткий синтаксис для створення функцій, який часто доцільніше використовувати замість
Функціонального Виразу. Це так звані “стрілкові функції”, приклад:
let func = (arg1, arg2, ..., argN) => expression; створюється функція яка приймає аргументи, потім вираховує вираз та повертає результат
абл якщо кілька виразів тоді вкладення у фігурних дужках {
    return arg1 + arg2 + argN;
}*/

/*2. Створи функцію, яка буде виводити кількість переданих їй аргументів.*/
function getQuantityArg (){
    console.log(arguments.length);
}
getQuantityArg('Hello', 7, 'World');
getQuantityArg('Yes', 222);
getQuantityArg(989, 09, 8, 9098, 90, 'Good','Work','Well','done', 9890);
/*3. Напиши функцію, яка приймає 2 числа і повертає :
       -1, якщо перше число менше, ніж друге; 
       1 - якщо перше число більше, ніж друге; 
       0 - якщо числа рівні.*/
let a = -1;
let b = 1;
function getNumbers(numberFirst, numberSecond) {
    if (numberFirst < numberSecond)
    alert(`Перше число менше, ніж друге отже: ${a}`);
    if (numberFirst > numberSecond)
    alert(`Перше число більше, ніж друге отже: ${b}`);
    if (numberFirst === numberSecond)
    alert(`Числа рівні отже: ${0}`);
}
let numberFirst;
let numberSecond;
while (true) {
    numberFirst = +prompt(`Введіть саме число для перевірки`);
    if (numberFirst === null) {
        continue;
    }
    if (isNaN(numberFirst)) {
        continue;
    }
    break;
}
while (true) {
    numberSecond = +prompt(`Введіть саме число для перевірки`);
    if (numberSecond === null) {
        continue;
    }
    if (isNaN(numberSecond)) {
        continue;
    }
    break;
}
getNumbers(numberFirst, numberSecond);
/*4. Напиши функцію, яка обчислює факторіал переданого їй числа.*/
function factorial(n) {
    return n ? n * factorial(n - 1) : 1;
}
let fac;
while (true) {
    fac = +prompt(`Введіть число для вирахування факторіалу`);
    if (fac === null) {
        continue;
    }
    if (isNaN(fac)) {
        continue;
    }
    if(fac < 0) {
        alert(`Введіть позитивне число`);
        continue;
    }
    break;
}
console.log(`Факторіал числа ${factorial(fac)}`);
/*5. Напиши функцію, яка приймає три окремі цифри і перетворює їх в одне число. 
Наприклад: цифри 1, 4, 9 перетворяться в число 149.*/
let firstNumber = prompt(`З\'єднаємо числа до купи, введи перше:`);
let secondNumber = prompt(`Введи друге:`);
let thirdNumber = prompt(`Введи третє:`);
function createNumber (firstNumber, secondNumber, thirdNumber) {
    if (isNaN(firstNumber) || isNaN(secondNumber) || isNaN(thirdNumber)) {
        alert(`Еееее ні друже, ми домовлялись лише числа`)
    } else {
        alert (`Юхууу 🎉 ось таке число вийшло: ${firstNumber + secondNumber + thirdNumber}`);
    } 
}
createNumber(firstNumber, secondNumber, thirdNumber);

/*6. Напиши функцію, яка приймає довжину і ширину прямокутника і обчислює його площу. 
Якщо в функцію передали 1 параметр, то вона обчислює площу квадрата.*/

// function computeArea(length, width) {
//     if (length === n || width === n ) {
//         alert(`Ти не ввів одне із значень, отже це площа квадрата: ${length ** 2 || width ** 2}`)
//     } else {
//         alert(`Площа прямокутника: ${length * width}`);
//     }
// }
// let length = +prompt(`Зараз порахуємо площу прямокутника. Введи його довжину:`);
// let width = +prompt(`і ще ширину:`);
// computeArea(length, width);
// -------------------------------------------------------------------------------------------------
function computeArea(length, width) {
    if (width === undefined) {
        return length ** 2;
    } else {
        return length * (width || length);
    }
}
let length = +prompt("Введіть довжину прямокутника або сторону, якщо це квадрат");
let width = +prompt("Введіть ширину прямокутника, якщо вона є (можна пропустити)");

console.log(computeArea(length, width));

