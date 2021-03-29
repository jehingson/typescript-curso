"use strict";
// Tipo: Null y Undefined
/*
   * En Typescript, ambos "valores" tienen sus respectivos
    tipos:
      - null
      - undefined
*/
// Explicita
var nullVariable;
nullVariable = null;
//nullVariable = 1; // Error!
var otherVariable = null;
otherVariable = 'test';
console.log('nullVariable', nullVariable);
console.log('otherVariable', otherVariable);
// Tipo Undefined
var undefinedVariable = undefined;
//undefinedVariable = 'test' // Error
var otherUndefined = undefined;
otherUndefined = 1;
console.log('undefinedVariable', undefinedVariable);
console.log('otherUndefined', otherUndefined);
/*
  Tipo: Null y Undefined se puede considerar como subtipos

  * Null y Undefined se puede asumir como subtipo de los otros tipos de datos
  * Significa que se puede asignar null y undefined a una variable de tipo string, por ejemplo

*/
// Null y Undefined: Como subtipos
// --strictNullChecks
var albumName;
// albumName = null;
// albumName = undefined;
/*  Resumen:
  Podriamos tener asignaciones undefiend y null o no a travez del paramentro
  --strictNullChecks

*/
