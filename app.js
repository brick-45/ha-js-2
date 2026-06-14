// 1 Створити змінні celsius, fahrenheit для зберігання температури за Цельсієм та Фаренгейтом. Перевести температуру з Цельсія у Фаренгейти за допомогою формули та вивести результат в консоль.

// 2 Створити змінну daysInMonth для зберігання кількості днів у місяці. Обчислити кількість hoursInMonth годин та minutesInMonth хвилин у цьому місяці за допомогою оператора множення та вивести результат в консоль.
var daysInMonth = 31;
var hoursInMonth = daysInMonth * 24;
console.log(hoursInMonth, "hours");

var minutesInMonth = daysInMonth * 24 * 60;
console.log(minutesInMonth, "minutes");

// 3 Створити змінні health, energy для зберігання рівня здоров'я та енергії гравця в грі. Зменшити рівень здоров'я та енергії гравця за допомогою операторів віднімання та вивести результат в консоль.

var health = 100;
var energy = 100;

console.log(health - 30);
console.log(energy - 50);

// 4 Створити змінну totalPrice для зберігання суми покупки в магазині. Застосувати знижку discount в розмірі 10% до цієї суми за допомогою оператора множення. Результат зберегти в змінній discountedPrice та вивести результат в консоль.

var totalPrice = 130;
var discount = 0.10;
var discountedPrice = totalPrice * (1 - discount);

console.log(discountedPrice);

// 5 Створити змінну const floatNumber = 12.78 для зберігання числа з плаваючою комою. Використати метод Math.floor() для округлення числа до меншого. Результат зберегти в змінній roundedDown та вивести результат в консоль.

var floatNumber = 12.78;

console.log(Math.floor(floatNumber));

// 6 Створити змінну const floatString = "45.67"  для зберігання рядка, який містить числа з плаваючою комою. Використати метод parseFloat() для перетворення рядка у десяткове число. Результат зберегти в змінній parsedFloat та вивести результат в консоль.

var floatString = "45.67"
var parsedFloat = parseFloat(floatString);

console.log(parsedFloat);

// 7 Створити змінну const intString = "123" для зберігання рядка, який містить ціле число. Використати метод parseInt() для перетворення рядка у ціле число. Результат зберегти в змінній parsedIntта вивести результат в консоль.

var intString = "123";
var parsedInt = parseInt(intString);

console.log(parsedInt);

// 8 Створити змінну number для зберігання числа. Використати метод Math.sqrt() для обчислення квадратного кореня числа. Результат зберегти в змінній sqrtNumber та вивести результат в консоль.

var number = 144;
var sqrtNumber = Math.sqrt(number);

console.log(sqrtNumber);

// 9 Створити змінні const integer = 42 та const stringNumber = "256" для зберігання цілочисельного значення та рядка з числом у вигляді рядка. Використати метод parseInt() для перетворення рядка у ціле число. Результат зберегти в змінній convertedInt та вивести результат в консоль. Потім використати метод toString() для перетворення цілочисельного значення у рядок. Результат зберегти в змінній convertedString та вивести результат в консоль

var integer = 42;
var stringNumber = "256";

var converteInt = parseInt(stringNumber);
var convertedString = toString(integer);

console.log(converteInt);
console.log(convertedString);



