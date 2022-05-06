# Clases_y_prototipos
1. Orientación a Objetos en Javascript Conceptos de la POO
Un consultorio médico requiere un programa realizado en JavaScript, que permita almacenar y/o modificar los datos de sus pacientes. Así como filtrar y mostrar los
pacientes por nombre para poder hacer una búsqueda más rápida y ubicar la historia médica de cada persona. En el siguiente diagrama UML se puede observar cual es la
cardinalidad de los objetos y las propiedades que tiene cada uno.
-Consultorio 
/nombre
/paciente

-Paciente
/nombre
/edad
/rut
/diagnóstico

Primeramente se deben mostrar todos los pacientes con sus datos personales, luego mediante un método de búsqueda, mostrar los datos del paciente que concuerden con el
nombre que se envíe al método como argumento. Igualmente se deben proteger los datos y evitar modificaciones directas, por lo que se debe implementar getters y setters. Todo
esto se puede mostrar en la consola del navegador web de tu preferencia.
Requerimientos
1. Crear todo el código usando ES5.
2. Crear un método mediante la propiedad prototype que permita buscar los datos de los usuarios por nombre y otro método que permita mostrar todos los datos de
los usuarios registrados.
3.Crear una función constructora para cada objeto.
4.Implementar métodos getters y setters para poder acceder y modificar los datos de los pacientes
5.Instanciar cada objeto utilizando la instrucción new.
