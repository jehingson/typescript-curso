// Array 
/* 
  * Al igual que JavaScript, TypeScript permite definir un arreglo para contener un conjunto
  de valores
  * Usa dos notaciones : [] y Array<tipo>
*/

// Corchetes []

// Tipo Explicito
let users: string[];
users = ['json dev', 'hugo p', 'jade m', 'jili p']
// users = [ 1, true, 'test'] //ERROR

// Tipos Inferidos
let otherUsers =  ['json dev', 'hugo p', 'jade m', 'jili p']
// otherUsers = [ 1, true, 'test'] //ERROR

// Array<TIPO>
let pictureTitles: Array<string>;
pictureTitles = ['Fovorite Sunset', 'Vacation Time', 'Landscape']

// Accediendo a los valores en un array
console.log('first user', users[0]);
console.log('firt title', pictureTitles[0])

// Propiedades en Array
console.log('users.length', users.length)

// Uso funciones en Arrays
users.push('YoutuberUser')
users.sort()
console.log('users', users)





