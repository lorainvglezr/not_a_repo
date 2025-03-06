// Resolución de problema 1
document.write("<h3>Problema 1</h3>");
document.write("Número pedido al usuario mediante un 'prompt' y se regresa una tabla con los números del 1 al número dado con sus cuadrados y cubos.<br>")

const number = prompt("Ingrese un número para generar una tabla");

document.write(`<br><strong>Número ingresado por el usuario:</strong> ${number} <br>`);

function powers(number) {
    document.write("<table border='2'><tr><th><em>Número</em></th><th><em>Cuadrado</em></th><th><em>Cubo</em></th></tr>");
    for (let i = 1; i <= number; i++) {
        document.write("<tr>");
        document.write("<td><strong>" + i + "</strong></td>");
        document.write("<td>" + (i * i) + "</td>");
        document.write("<td>" + (i * i * i) + "</td>");
        document.write("</tr>");
    }
    document.write("</table><br><br>");
}

powers(number);



// Resolución del problema 2
document.write("<h3>Problema 2</h3>");
document.write("Se le pide al usuario el resultado de la suma de 2 números generados aleatoriamente. La página debe indicar el tiempo en que tardó el usuario en responder, así como también si la respuesta fue correcta o incorrecta.<br><br>");

const number1 = Math.floor(Math.random()*20);
const number2 = Math.floor(Math.random()*20);
const answer = number1 + number2;

const start = new Date();
const answer_try = prompt (`Resuelva la suma entre ${number1} y ${number2}`);
const end = new Date();

const final_time = ((end - start)/1000).toFixed(2);


document.write(`<strong>La suma era:</strong> ${number1} + ${number2}<br><strong>Tu respuesta final fue:</strong> ${answer_try}<br>`);
if (parseInt(answer_try) === answer) {
    document.write('<strong><em>FELICIDADES! <u>Lograste responder bien</u> la sumatoria</em></strong>.<br>');
} else {
    document.write(`<strong><em>QUE LASTIMA! El resultado que introdujiste <u>no es correcto</u></em></strong>. El resultado correcto es ${answer}.<br>`);
}

document.write(`<u><em>Respondiste esta pregunta en:</u></em> ${final_time} segundos.<br><br><br>`);


// Resolución del problema 3
document.write("<h3>Problema 3</h3>");
document.write("Se le otorga al usuario, de forma aleatoria, uno de los 3 arreglos predeterminados. La página debe indicar la cantidad de números negativos, la cantidad de ceros, y la cantidad de números positivos que se encuentran el arreglo seleccionado.<br><br>");

const array1 = [-3, 0, 12, -7, 5, 0, -1, 9, -2, 4, 0, 15, -8, 7, 0, -5, 6, -10, 2, 0];
const array2 = [3, -7, 0, 12, -5, 8, -2, 0, 15, -9, 6, -1, 4, -3, 0];
const array3 = [4, -3, 0, 7, -1, 0, 5, -8, 2, 0];

const arrays = [array1, array2, array3];
const selected_array = arrays[Math.floor(Math.random() * arrays.length)];

document.write("<strong>El arreglo seleccionado en esta ocasión es:</strong> " + selected_array.join(", ") + `<br>`);

let negative_count = 0;
let zeros_count = 0;
let positive_count = 0;
let array_size = selected_array.length;

for (let i = 0; i < array_size; i++) {
    if (selected_array[i] < 0) {
        negative_count = negative_count + 1;
    } 
    else if (selected_array[i] === 0) {
        zeros_count = zeros_count + 1;
    } 
    else {
        positive_count = positive_count + 1;
    }
}

document.write(`<em><u>Hay un total de...</u></em><br><em>Números negativos:</em> ${negative_count}<br><em>Cantidad de ceros:</em> ${zeros_count}<br><em>Números positivos:</em> ${positive_count}<br><br><br>`);


// Resolución del problema 4
document.write("<h3>Problema 4</h3>");
document.write("Se automatiza una matriz con varios arreglos de números adentro de ella y se le devuelve al usuario un arreglo con los promedios de cada uno de los arreglos dentro de la matriz.<br><br>")

const matrix = [[5, -3, 12, 0, -7, 8, 4], [15, -2, 9, -10, 3, 6, 0], [-1, -5, -3, -8, -2, -4, -7], [0, 0, 2, 3, 0, 1, 4], [10, 20, 30, 40, 50, 60, 70], [1.5, 2.3, -3.7, 4.0, 0.0, -1.2, 5.5], [0, -1, 2, 0, 3, -4, 0]];
const matrix_size = matrix.length;

function calculate_average (numbers){
    const sum = numbers.reduce((tempResult, currentVal) => tempResult + currentVal, 0);
    const result_average = sum / numbers.length;
    return result_average;
}
for (let i = 0; i < matrix_size; i++){
    document.write(`<strong>El promedio del arreglo <em>${i + 1}</em> se sacará con los siguientes números:</strong> [${matrix[i].join(", ")}] <br>`);
    const result_average = calculate_average(matrix[i]);
    document.write(`<u><em>El promedio del <strong>arreglo ${i + 1}</strong> es:</em></u> ${result_average.toFixed(2)}<br><br><br>`);
}


// Resolución del problema 5
document.write("<h3>Problema 5</h3>");
document.write("El usuario ingresa un número que tenga más de un dígito y la página devolverá el número ingresado por el usuario con sus dígitos en orden inverso.<br><br>")

const original_number = prompt("Escriba un número con más de 1 dígito");

function inverse(origin_number){
    let number2string = origin_number.toString();
    let backwards = number2string.split('').reverse().join('');
    return backwards;
}

document.write("<strong>El número original que ingresaste es:</strong> ", (original_number), '<br>');
document.write("<em><u>El número invertido es:</u></em> ", inverse(original_number), '<br><br><br>');


// Resolución del problema 6
document.write("<h3>Problema 6</h3><strong><em>Creación de solución a un problema de mi elección.</em></strong><br>");
document.write("El usuario ingresa una temperatura en grados Celsius y la página devolverá la temperatura pero en la escala de grados Farenheit.<br><br>")

const tempCelsius = prompt("Ingrese una temperatura en grados Celsius");

function celsius2Fahrenheit(tempCelsius) {
    return (tempCelsius * 9/5) + 32;
}

const tempFahrenheit = celsius2Fahrenheit(tempCelsius);

document.write(`<strong>La temperatura en grados Celsius que usted ingresó fue:</strong> ${tempCelsius} °C<br><em><u>La conversión a grados Fahrenheit de la misma temperatura es:</u></em> ${tempFahrenheit.toFixed(2)} °F <br><br><br>`);


alert(`     A continuación, usted podrá ver porqué razón se le pidió ingresar tantos números. 
    
    De igual forma, podrá visualizar las soluciones a los problemas en los que fueron utilizados dichos números recopilados durante su participación.`);