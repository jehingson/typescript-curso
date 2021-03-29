// Tuples 

/*
  * Las tuplas permiten expresar una arreglo con un numero 
    fijo de elementos
  * Los tipos de datos son conocidos 
  * Los tipos de datos deben ser diferentes 

*/
export {}; //exportamos algo vacio 
// [1, 'user']
let user: [number, string];
user = [1, 'json dev'] 

console.log('user', user)
console.log('username', user[1])
console.log('id', user[0])
console.log('username.length', user[1].length)

// tuplas con varios valores
// id, username, isPro
let userInfo: [number, string, boolean];
userInfo = [2, 'json dev', true];
console.log('userInfo', userInfo);

// Arreglo de Tuplas
let array: [number, string][] = [];
array.push([1, 'json dev1']);
array.push([2, 'json dev2'])
array.push([3, 'json dev3'])
console.log('array', array)


// Uso de funciones Array
// json dev1 -> JSONDEV2021
array[0][1] = array[0][1].concat('2021'); //concat agrega mas TEXTO
console.log('array', array) 



