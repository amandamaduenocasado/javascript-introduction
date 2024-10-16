/* console.log(active); 

muestra en el menu consola lo que escribamos aquí pero no se ejecuta */

function sayHello(name) {
  console.log('hola ' + name);
}

sayHello('amanda');

function calculateSquareArea(side) {
  console.log('El area del cuadrado es ' + side * side);
}

calculateSquareArea(25);

function calculateTriangleArea(base, altura) {
  console.log('El area del triangulo es ' + base * altura / 2);
}

calculateTriangleArea(10, 5); 

function calculateCircleArea(radio) {
  console.log('El area del círculo es ' + Math.PI * radio * radio);
}
  calculateCircleArea(5);

function celsiusToFahrenheit(celsius) {
  let farenheit = celsius  * 1.8 + 32;
  console.log('La conversión es ' + farenheit);
}
  celsiusToFahrenheit(3);

function fahrenheitToCelsius(fahrenheit) {
  let celsius = (fahrenheit - 32) / 1.8;
  console.log('El resultado es ' + celsius);
}
  fahrenheitToCelsius(5);

function totalPrice(price) {
  console.log('El resultado con IVA es ' + price * 1.21);
}
  totalPrice(5);

function writeMessage(name, material, size, note) {
  console.log('[name] ha pedido una caja de [material] de tamaño [size]. [note].');
}
  writeMessage('')
