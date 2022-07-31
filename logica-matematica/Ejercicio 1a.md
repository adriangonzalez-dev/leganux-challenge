# Ejercicios Técnicos
## 1 a.- lógica matemática

### Proceso de solución
* Se identifica la problemática.
* Se evalúan las diferentes alternativas a la solucíon.
* Se desestructura la solución en pequeños problemas.
* Se identifican posibles errores y se corrigen.
* Se Verifica funcionamiento correcto.

### Pasos que realiza el programa

#### newCadena
* Declara un array vacío

#### prevNum(symbol)
* @param symbol - el símbolo a evaluar
 * Toma un símbolo y devuelve el índice de la última aparición de ese símbolo en la cadena, menos uno.
 * Se utiliza el indice del símbolo y se le resta 1 para hallar el indice del número anterior al símbolo.

#### nextNum(symbol)
* @param symbol - el símbolo a evaluar
 * Toma un símbolo y devuelve el índice de la última aparición de ese símbolo en la cadena, más uno.
 * Se utiliza el indice del símbolo y se le suma 1 para hallar el indice del número siguiente al símbolo.

#### calc(cadena)
 * @param cadena - la cadena a evaluar
 * Toma una cadena, eliminina los espacios y la divide retornando un array
 * Filtra los símbolos para conocer la cantidad de iteraciones a realizar en base a la cantidad de símbolos existentes
 * Se utiliza un ciclo for para iterar el array.
 * Comprobando si el array incluye el símbolo y si lo hace, reemplaza 3 posiciones a partir del número previo por el resultado de la operación.
 * Retorna el resultado pasando el array a string, y de string a Number

 ### Test realizados
 * Se incluye el archivo test.html integrando QUnit para realizar las pruebas.