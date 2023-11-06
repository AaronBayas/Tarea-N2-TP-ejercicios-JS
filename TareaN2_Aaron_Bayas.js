//                                                      TAREA N2
// 1. Crea un array de números enteros y calcula su suma.
let array=[1,2,3,4,5,6,7,8,9,10];
let longitud=array.length
let suma=0;
for(let i=0; i<longitud;i++){
  suma=suma + array[i]
}
console.log("La suma del array ["+array.join(" + ")+"] = "+ suma);
// 2. Encuentra el número más grande en un array de números.
let array_numeros = [10, 5, 20, 8, 15];
let mayor = array_numeros[0];
let longitud1=array_numeros.length
for (let i = 1; i < longitud1; i++) {
  if (array_numeros[i] > mayor) {
    mayor = array_numeros[i];
  }
}
console.log("El número más grande es: " + mayor);

// 3. Encuentra el número más pequeño en un array de números.
let array_numeros1 = [10, 5, 20,2, 8, 15];
let menor = array_numeros1[0];
let longitud2=array_numeros1.length
for (let i = 1; i < longitud2; i++) {
  if (array_numeros1[i] < menor) {
    menor = array_numeros1[i];
  }
}
console.log("El número más pequeño es: " + menor);
// 4. Elimina los elementos duplicados de un array.
let elementos = [1, 2, 2, 3, 4, 4, 5, 5,6,6,6];
let array_Sin_Duplicados = [];
for (let i = 0; i < elementos.length; i++) {
  let elemento = elementos[i];
  let Duplicado = true;
  for (let j = 0; j < array_Sin_Duplicados.length; j++) {
    if (elemento === array_Sin_Duplicados[j]) {
      Duplicado = false;
      break;
    }
  }

  if (Duplicado) {
    array_Sin_Duplicados.push(elemento);
  }
}
console.log("El Array  [" + elementos+"]");
console.log("Array sin duplicados: " + array_Sin_Duplicados);
// 5. Dada una lista, invierte su orden.
let lista=[1,2,3,4,5,6,7,8,9,22];
let invertido=lista.reverse();
console.log("El array invertido ["+invertido.join(", ")+"]");

// 6. Crea un array con nombres de frutas e imprime la lista.
let lista_frutas = ["Plátano","Manzana", "Naranja", "Fresa", "Uva"];
console.log("Lista de frutas:");
for (let i = 0; i < lista_frutas.length; i++) {
  console.log(lista_frutas[i]);
}

// 7. Dado un array de números, encuentra el promedio de los valores.
let Arraynumeros = [10, 10, 10, 9, 9];
let suma_numeros = 0;
let longuitud_Array = Arraynumeros.length;
for (let i = 0; i < longuitud_Array; i++){
    suma_numeros += Arraynumeros[i];
}
let promedio = suma_numeros / longuitud_Array;
console.log("Promedio de los numeros "+promedio);

// 8. Escribe un programa que invierta un array sin utilizar métodos incorporados.

let Arraylista=[1,2,3,4,5,6,7,8,9,11];
let numerosinvertido=[];
for(let i=Arraylista.length-1; i>=0;i--){
  numerosinvertido.push(Arraylista[i])
  
}
console.log("El array invertido ["+numerosinvertido.join(", ")+"]");

// 9. Crea un array de objetos que representen productos (con propiedades como nombre, precio, y cantidad en stock).
let productos = [
    {
      nombre: "zapato",
      precio: 30,
      stock: 10
    },
    {
      nombre: "pantalon",
      precio: 20,
      stock: 5
    },
    {
      nombre: "blusas",
      precio: 15,
      stock: 15
    },
  ];
  
  console.log(productos);
  
// 10. Implementa una función que filtre los productos en stock cuyo precio sea mayor a cierto valor dado.

function filtrarProductos(productos, precioMinimo) {
    let productos_Filtrados = [];
    for (let i = 0; i < productos.length; i++) {
      let producto = productos[i];
      if (producto.stock >= 0 && producto.precio >= precioMinimo) {
        productos_Filtrados.push(producto);
      }
    }
    return productos_Filtrados;
  }
  let precioMinimo = 30; 
  let productos_Filtrados = filtrarProductos(productos, precioMinimo);
  if (productos_Filtrados.length > 0) {
    console.log("Productos con precio mayor a $" + precioMinimo + " :");
    console.log(productos_Filtrados);
  } else {
    console.log("No hay productos disponibles que cumplan con el criterio de precio mínimo.");
  }
// 11. Escribe un programa que cuente cuántas veces aparece un elemento en un array.
let Array_elemens=[1,2,3,3,3,4,5,6,6,7,8,8,9]
let contador=0;
let numero_buscado=8;
console.log("Ingrese el numero Buscado: "+numero_buscado)
for(let i=0;i<Array_elemens.length;i++){
    Array_elemens[i] == numero_buscado? contador++ :null
}
if(contador<=1){
    console.log("El elemento "+numero_buscado+" aparece: "+contador+" vez")
}else {
    console.log("El elemento "+numero_buscado+" aparece: "+contador+" veces")
}

// 12. Crea un array de números pares del 1 al 20.
let Array_Number=[]
for(let i=1; i<=20;i++){
    if(i % 2 == 0){
        Array_Number.push(i);
    }
}
console.log("El array de numeros pares es ["+Array_Number.join(" , ")+"]");
// 13. Dada una lista de nombres, ordénalos alfabéticamente.
let names = ["Aron", "Chritian", "Carlos", "Gary", "Jean"];
names.sort();
console.log("Nombres ordenados alfabéticamente: ");
console.log(names.join(", "));

// 14. Crea un array de los cuadrados de los números del 1 al 10.
let squares = [];

for (let i = 1; i <= 10; i++) {
    squares.push(i * i);
}
console.log("Array de los cuadrados de los números del 1 al 10 es:");
console.log(squares);

// 15. Dada una lista de números, encuentra el segundo número más grande.
let Lista_number = [1,6, 2, 4, 5, 10];
let Mayor = -Infinity; 
let Segundo_Mayor = -Infinity; 
for (let i = 0; i < Lista_number.length; i++) {
  if (Lista_number[i] > Mayor) {
    Segundo_Mayor = Mayor;
    Mayor= Lista_number[i];
  } else if (Lista_number[i] > Segundo_Mayor && Lista_number[i] < Mayor) {
    Segundo_Mayor = Lista_number[i];
  }
}
if (Segundo_Mayor === -Infinity) {
  console.log("No hay un segundo número más grande en la lista.");
} else {
  console.log("El segundo número más grande es: " + Segundo_Mayor);
}

// 16. Usa un bucle while para contar del 1 al 10.
let c=1;
while(c<=10){
    console.log(c);
    c++;
}

// 17. Usa un bucle for para imprimir los números pares del 1 al 20.
for(let i=1; i<=20;i++){
    if(i % 2 == 0){
    console.log(i);
    }
}

// 18. Escribe un programa que imprima los elementos de un array utilizando un bucle for.

let ElemensArray = [1, 2, 3, 4, 5];
for (let i = 0; i < ElemensArray.length; i++) {
  console.log(ElemensArray[i]);
}

// 19. Usa un bucle while para sumar los números del 1 al 100.

let sumatoria=0;
let num=[]
for(let i=0; i<=100;i++){
  sumatoria=sumatoria + i
}
console.log("La suma de "+sumatoria);

// 20. Escribe un programa que cuente cuántas veces aparece una letra en una cadena de texto utilizando un bucle for.
let cadena_elemens="HOLA QUE TAL"
cadena_elemens=cadena_elemens.toLocaleLowerCase()
let contador1=0;
let letra_buscada="u";
console.log("Ingrese el numero Buscado: "+letra_buscada)
for(let i=0;i< cadena_elemens.length;i++){
    cadena_elemens[i] == letra_buscada? contador1++ :null
}
if (contador1 <= 0) {
    console.log("El elemento '" + letra_buscada + "' no se encuentra en la palabra");
  } else if (contador1 === 1) {
    console.log("El elemento '" + letra_buscada + "' aparece: " + contador1 + " vez");
  } else {
    console.log("El elemento '" + letra_buscada + "' aparece: " + contador1 + " veces");
  }
// 21. Utiliza un bucle for para imprimir los números del 10 al 1 en orden decreciente.
for(let i=10; i>=1;i--){
    console.log(i);
}

// 22. Escribe un programa que imprima los números impares del 1 al 30 usando un bucle for.
for(let i=1; i<=30;i++){
    if(i % 2 == 1){
    console.log(i);
    }
}
// 23. Usa un bucle while para encontrar el primer número divisible por 7 y 11.
let number_one=1
while (true) {
    if (number_one % 7 === 0 && number_one % 11 === 0) {
      console.log("El primer número divisible por 7 y 11 es: " + number_one);
      break;
    }
    number_one++;
  }

// 24. Utiliza un bucle do while para imprimir los números del 1 al 10.
let contador2=1
while (contador2<=10) {
    console.log(contador2);
    contador2++;
  }

// 25. Implementa un bucle for que cuente hacia atrás desde 20 hasta 1.
for(let i=20; i>=1;i--){
    console.log(i);
}

// 26. Utiliza un bucle while para generar números aleatorios hasta que se genere un número mayor a 0.9.
let numeroAleatorio;
while (numeroAleatorio <= 0.9 || numeroAleatorio === undefined) {
  numeroAleatorio = Math.random(); 
  console.log(numeroAleatorio.toFixed(2));
}
numeroAleatorio > 0.9 ? 
console.log("Se ha generado un número mayor a 0.9: " + numeroAleatorio.toFixed(2)):
console.log("No ha generado un número mayor a 0.9 ")

// 27. Escribe un programa que sume los números pares del 1 al 100 utilizando un bucle for.
let sumatotal=0;
console.log("Los numeros pares del 1 al 100")
for(let i=0; i<=100;i++){
    if(i%2==0){
        console.log(i)
        sumatotal=sumatotal + i
    }
}
console.log("La suma de los pares es: "+sumatotal);

// 28. Crea un bucle for que imprima los números del 1 al 100, pero sustituye los múltiplos
// de 3 por "Fizz" y los múltiplos de 5 por "Buzz".
for (let i = 1; i <= 100; i++) {
    let alamacenar = "";
    i % 3 === 0? alamacenar+= "Fizz":null
    i % 5 === 0? alamacenar += "Buzz":null
    alamacenar === ""? alamacenar = i:null
  console.log(alamacenar);
  }

// 29. Escribe un programa que genere los primeros 10 números de la secuencia Fibonacci.
let a = 0;
let b = 1;
console.log("Los primeros 10 números de la secuencia Fibonacci son:");
for (let i = 0; i < 10; i++) {
  console.log(a);
  let followingNumero = a + b;
  a = b;
  b = followingNumero;
}

// 30. Utiliza un bucle for para imprimir los elementos de un array en reversa.
let Elementos_Array = [1, 2, 3, 4,5,6,7];
for(let i=Elementos_Array.length-1; i>=0;i--){
    console.log(Elementos_Array[i]);
}

// 31. Crea un programa que simule un menú de opciones con un switch para realizar diferentes acciones.
let opcion =4;
console.log("Menú de Opciones:");
console.log("1. Entrar al juego");
console.log("2. Entrar a partida");
console.log("3. Finalizar Partida");
console.log("4. Salir del juego");
console.log("Seleccione una opción:"+opcion);   
switch (opcion) {
case 1:
  console.log("Entrando al juego...");
  break;
case 2:
  console.log("Entrando a la partida...");
  break;
case 3:
  console.log("Finalizando Partida...");
  break;
case 4:
  console.log("Saliendo del juego.");
  break;
default:
  console.log("Opción no válida. Por favor, seleccione una opción válida.");
}
// 32. Escribe un programa que convierta un número en un mes del año usando un switch.
let option=12
let mes;
switch (option) {
  case 1:
    mes = "Enero";
    break;
  case 2:
    mes = "Febrero";
    break;
  case 3:
    mes = "Marzo";
    break;
  case 4:
    mes = "Abril";
    break;
  case 5:
    mes = "Mayo";
    break;
  case 6:
    mes = "Junio";
    break;
  case 7:
    mes = "Julio";
    break;
  case 8:
    mes = "Agosto";
    break;
  case 9:
    mes = "Septiembre";
    break;
  case 10:
    mes = "Octubre";
    break;
  case 11:
    mes = "Noviembre";
    break;
  case 12:
    mes = "Diciembre";
    break;
  default:
    mes = "Mes inválido";
}
console.log(mes);
// 33. Crea un programa que clasifique un día de la semana como laborable o fin de semana utilizando un switch.
let day = "jueves"; 
day= day.toLocaleLowerCase()
let tipo_Day;
switch (day) {
  case "lunes":
  case "martes":
  case "miercoles":
  case "jueves":
  case "viernes":
    tipo_Day = "día laborable";
    break;
  case "sabado":
  case "domingo":
    tipo_Day = "fin de semana";
    break;
  default:
    tipo_Day = "Día no válido";
}
console.log(`El día ${day} es un ${tipo_Day}.`);

// 34. Implementa un convertidor de unidades (por ejemplo, de millas a kilómetros) utilizando un switch.
let unidad = "metros"; 
unidad=unidad.toLocaleLowerCase()
let valor = 50; 
let resultado=0;
console.log("Ingrese a que tipo de unidad quiere convertir: "+unidad);
if(unidad== "metros"){
    console.log("Ingrese el valora  convertir: "+valor+"m");
}else{
    console.log("Ingrese el valora  convertir: "+valor+"cm");
}
switch (unidad) {
  case "metros":
    resultado = valor * 100; 
    break;
  case "centimetros":
    resultado = valor / 100;
    break;
  default:
    console.log("Unidad no válida");
    break;
}
if (resultado !== undefined) {
  console.log(valor+" "+unidad+" equivale a "+resultado+" centímetros." );
}

// 35. Escribe un programa que determine el tipo de triángulo (equilátero, isósceles, escaleno) utilizando un switch.
let side_1 = 0; 
let side_2 = 2; 
let side_3 = 0; 
let triangle_Type;
side_1 === side_2 && side_2 === side_3?
    triangle_Type = "equilateral": 
    side_1 === side_2 || side_2 === side_3 || side_1 === side_3?
    triangle_Type = "isosceles":  triangle_Type = "scalene";

switch (triangle_Type) {
  case "equilateral":
    console.log("El triángulo es equilátero.");
    break;
  case "isosceles":
    console.log("El triángulo es isósceles.");
    break;
  case "scalene":
    console.log("El triángulo es escaleno.");
    break;
  default:
    console.log("No es un triángulo válido.");
}

// 36. Crea una función que calcule el área de un triángulo.
function calculateTriangleArea(base_1 , height_1) {
    if (base_1 <= 0 || height_1 <= 0) {
      return "La base y la altura deben ser números positivos.";
    }
    let area = (base_1  * height_1) / 2;
    return area;
  }
  let base_1  = 5;
  let height_1 = 8;
  let area = calculateTriangleArea(base_1 , height_1);
  console.log("El area del triángulo con base "+base_1+" y altura "+height_1+" es : "+area);
// 37. Escribe una función que devuelva la longitud de un array.
function Devolver_Logitud(longitud){
    return longitud.length;
}
let ElArray=[1,2,3,4,5];
console.log("Longitud del Array: "+Devolver_Logitud(ElArray));

// 38. Crea una función que convierta grados Celsius a Fahrenheit.
function ConvertiGrado(celsius) {
    let fahrenheit = (celsius * 9/5) + 32;
    return fahrenheit;
  }
  let temperatura_Celsius = 20;
  let temperatura_Fahrenheit = ConvertiGrado(temperatura_Celsius);
  console.log(`${temperatura_Celsius} Grados Celsius = ${temperatura_Fahrenheit} Grados Fahrenheit.`);

// 39. Escribe una función que genere un array de números primos.
function generarArrayPrimos(hasta) {
    let numerosPrimos = [];
    
    function isPrimo(num) {
      let acu = 0, divisor = 2, band = 1;
      while (divisor < num && band === 1) {
        if (num % divisor === 0) {
          band = 0;
        } else {
          divisor = divisor + 1;
        }
      }
      return band;
    }
    for (let i = 2; i <= hasta; i++) {
      if (isPrimo(i)) {
        numerosPrimos.push(i);
      }
    }
    return numerosPrimos;
  }
  let limite = 25;
  let primosHasta = generarArrayPrimos(limite);
  console.log("El array de numeros primos hasta " + limite );
  console.log( "[ "+ primosHasta.join(" , ")+"]");
// 40. Crea una función que calcule el factorial de un número.
function factorialnum(num){
    let facto=1
    for(let i=1;i<=num;i++){
        facto=facto*i
    }
   return facto
}
let number1=5
let factorial=factorialnum(number1);
console.log("El factorial de "+number1+" es: "+factorial);

// 41. Escribe una función que verifique si una cadena de texto es un palíndromo.
function palindromo(frase) {
    let inicio = 0;
    let fin = frase.length - 1;
    let esPalindromo = true;
    for (let i = 0; i < frase.length / 2; i++) {
      if (frase[inicio] !== frase[fin]) {
        esPalindromo = false;
        break; 
      }
      inicio++;
      fin--;
    }
    if (esPalindromo) {
      return "La frase `" + frase + "` es un palíndromo";
    } else {
      return "La frase `" + frase + "` no es palíndromo";
    }
  }
  let frase = "ana";
  let resultados = palindromo(frase);
  console.log(resultados);

// 42. Crea una función que cuente el número de vocales en una cadena de texto.
function count_Vowels(text) {
    text = text.toLowerCase();
    let count = 0;
    for (let i = 0; i < text.length; i++) {
      const character = text[i];
      character === 'a' || character === 'e' || character === 'i' || character === 'o' || character === 'u'? count++:null
    }
    return count;
  }
  let text = "Hola que tal";
  let number_Vowels = count_Vowels(text);
  console.log("La frase '"+text+"'");
  console.log("Tiene "+number_Vowels+" vocales.");
  
// 43. Escribe una función que calcule el mínimo común múltiplo (MCM) de dos números.
function calcularMCM(a, b) {
    function calcularMCD(x, y) {
      if (y === 0) {
        return x;
      } else {
        return calcularMCD(y, x % y);
      }
    }
    let mcd = calcularMCD(a, b);
    let mcm = (a * b) / mcd;
  
    return mcm;
  }
  let numero1 = 12;
  let numero2 = 18;
  let mcm = calcularMCM(numero1, numero2);
  console.log("El MCM de "+numero1+" y "+numero2+" es: "+mcm);

// 44. Crea una función que determine si un número es par o impar.
function numParImpar(num){
    let respuesta;
    num % 2 == 0? respuesta=("El numero "+num+" es par"):respuesta=("El numero "+num+" no es par")
    return respuesta;
}
let number2=4
let par=numParImpar(number2);
console.log(par);

// 45. Implementa una función que sume los elementos de un array.
function sumar_Array(array) {
    let suma = 0;
    for (let i = 0; i < array.length; i++) {
      suma += array[i];
    }
    return suma;
  }
  let mi_Array = [1, 2, 3, 4, 5];
  let resp = sumar_Array(mi_Array);
  console.log("El array es: "+mi_Array.join(" + ")+" =");
  console.log("La suma es: "+resp);
  
// 46. Crea una clase llamada "Persona" con atributos nombre y edad.
class People {
  constructor(nombre, edad) {
      this.nombre = nombre;
      this.edad = edad;
  }
  saludar() {
    let saludo;
    saludo=("Hola, soy "+this.nombre+" y tengo "+this.edad+" años.");
    return saludo
  }
}
let  persona1 = new People("Aaron", 22);
 
// 47. Crea un objeto de la clase "Persona" e imprime sus atributos.
console.log("Nombre: "+persona1.nombre);
console.log("Edad: "+persona1.edad); 

// 48. Agrega un método a la clase "Persona" para saludar.
persona1.saludar();
console.log(persona1.saludar())

// 49. Crea una clase llamada "Rectángulo" con atributos largo y ancho.
class Rectangulo {
  constructor(largo, ancho) {
      this.largo = largo;
      this.ancho = ancho;
  }
  calcularArea() {
    return this.largo * this.ancho;
  }
}
let mi_Rectangulo = new Rectangulo(10, 5);

// 50. Agrega un método a la clase "Rectángulo" para calcular el área.
let area1 = mi_Rectangulo.calcularArea();
console.log("Area del rectangulo: " + area1);

// 51. Crea una clase llamada "CuentaBancaria" con atributos saldo y titular.
class CuentaBancaria {
  constructor(titular, saldo = 0) {
    this.titular = titular;
    this.saldo = saldo;
  }
  depositar(cantidad) {
    if (cantidad > 0) {
      this.saldo += cantidad;
      return "Se depositaron "+cantidad+"$. Nuevo saldo: "+this.saldo
    } else {
      return "La cantidad a depositar debe ser mayor que 0.";
    }
  }
  retirar(cantidad) {
    if (cantidad > 0 && cantidad <= this.saldo) {
      this.saldo -= cantidad;
      return "Se retiro "+cantidad+"$. Nuevo saldo: "+this.saldo
    } else {
      return "La cantidad a retirar debe ser mayor que 0 y no puede exceder el saldo disponible.";
    }
  }
}

const cuenta = new CuentaBancaria("Juan Pérez", 1000);
// 52. Agrega métodos para depositar y retirar dinero de la cuenta bancaria.
console.log("El saldo inicial es: "+cuenta.saldo)
console.log(cuenta.depositar(500));
console.log(cuenta.retirar(200));

// 53. Crea una clase llamada "Coche" con atributos marca, modelo y año.
    class Coche {
      constructor(marca, modelo, año) {
        this.marca = marca;
        this.modelo = modelo;
        this.año = año;
        this.velocidad = 0;
      }
    
      acelerar(velocidad) {
        this.velocidad += velocidad;
        return this.marca +this.modelo+"aceleró a " +this.velocidad+"km/h" 
      }
    }
// 54. Agrega un método para acelerar el coche.
let coche = new Coche("Toyota ", " Camry ", 2022);
console.log(coche.acelerar(50));

// 55. Escribe un programa que cree un array de objetos "Coche" y acelere cada uno de ellos.
let coches = [
  new Coche("Toyota ", "Camry ", 2022),
  new Coche("Ford ", "Mustang ", 2021),
  new Coche("Honda ", "Civic ", 2020)
];
for (let i = 0; i < coches.length; i++) {
  console.log(coches[i].acelerar(50));
}

// 56. Crea una clase "Libro" con atributos título, autor y año de publicación.
let newBook = {
  title: "To Kill a Mockingbird",
  author: "Harper Lee",
  publicationYear: 1960,
 // 57. Agrega un método para mostrar la información del libro.
  bookInformation: function () {
      console.log("Titulo: "+this.title);
      console.log("Autor: "+this.author);
      console.log("Año de Publicacion: "+this.publicationYear);
  }
};
newBook.bookInformation();
// 58. Escribe un programa que cree un array de objetos "Libro" y muestre su información.
function create_books(title, author, year_of_publication) {
  this.title = title;
  this.author = author;
  this.year_of_publication = year_of_publication;
  this.bookInformation = function () {
      console.log("Titulo: "+this.title);
      console.log("Autor: "+this.author);
      console.log("Año de Publicacion: "+this.year_of_publication);
  };
}
let book_1 = new create_books("Misterio en la Mansión", "Laura Stevenson", 2005);
book_1.bookInformation();

let book_2 = new create_books("Aventuras en la Selva Perdida", "Michael Johnson", 2010);
book_2.bookInformation();

book_2.bookInformation();
function Book(title, author, publicationYear) {
  this.title = title;
  this.author = author;
  this.publicationYear = publicationYear;

  this.info = function () {
    console.log("Titulo: "+this.title);
    console.log("Autor: "+this.author);
    console.log("Año de Publicacion: "+this.publicationYear);
  };
}

let libro3 = new Book("Los Pilares de la Tierra", "Ken Follett", 1989);
libro3.info();

let libro4 = new Book("El Código Da Vinci", "Dan Brown", 2003);
libro4.info();

// 59. Implementa una función que calcule el área de un círculo dada su radio.
function circleArea(radius) {
  let pi = 3.14;
  let area = pi * radius ** 2;
  return area;
}
let r = 8;
let circleAreaResult = circleArea(r);
console.log("El area del circulo es "+circleAreaResult);

// 60. Crea una función que reciba un array de números y devuelva un nuevo array con los
// números ordenados de menor a mayor.
function sort_Array(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
      for (let j = i; j < arr.length; j++) {
          if (arr[i] > arr[j]) {
              let temp = arr[i];
              arr[i] = arr[j];
              arr[j] = temp;
          }
      }
  }
  return arr;
}
let arrayToSort = [12, 1, 3, 5, 6, 9, 10, 11];
let sort_edArray = sort_Array(arrayToSort);
console.log("El array con los números ordenados de menor a mayor:");
console.log(sort_edArray);
