"use strict";
//Tipo: Any 
/*
  * Usado para capturar valores dinámicos
  * Los valores pueden cambiar de tipo en el tiempo
    -APIs externas
    -Librerías de terceros

  Nota: deberiamos aplicarlo como ultimo recurso o cuando no conozcamos el typo apriori de una variable
*/
// Tipo explicito
var idUser;
idUser = 1; // number
idUser = '1'; // string no hay problema proque idUser es de tipo any
console.log('idUser', idUser);
// Tipo Inferido
var otherId;
otherId = 1;
otherId = '1';
// otherId = true
console.log('otherId', otherId);
var surprise = 'hello typescript';
// surprise.sayHello(); //Error
var res = surprise.substring(6); //Podria haber un error en tiempo de 
console.log('res', res); // porque surprise es un valor diferente
// de type string el substring genera error
