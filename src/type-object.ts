// Type: object
let user: object;
user = {} // Object

user = {
  id: 1,
  username: 'json dev',
  firstName: 'youtube',
  isPro: true
}

console.log('user', user);
//console.log('user.username', user.username)

// Object vs object

/* 
    * Object: instancia de la clase Object de javascript
    * object: tipo de valores no primitivos.
      - Con este tipo no se puede acceder a las propiedades del objeto 
*/

// Object vs object (Class Js vs Tipo Ts)
const myObj = {
  id: 1,
  username: 'json dev',
  firstName: 'youtube',
  isPro: true
}

const isInstance = myObj instanceof Object; // classe Object Javascript
console.log('isInstance', isInstance)
console.log('user.username', myObj.username) //Aca no tenemos ningun error


