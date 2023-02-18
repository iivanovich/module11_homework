/*
Напишите функцию, которая принимает два натуральных числа x и n и возвращает x в степени n. Иначе говоря, умножает x на себя n раз и возвращает результат.

Используйте Arrow Function синтаксис.

Протестируйте функцию на любых значениях и выведите результат в консоль.
*/

const multiplication = (num, degree) => {
    let meaning =+ num;
    for (let i = 0; i < degree - 1; i++) {
        meaning *= num;
    }
    return console.log(meaning)
}

multiplication(3,10)