"use strict";
// Tuples 
Object.defineProperty(exports, "__esModule", { value: true });
// [1, 'user']
var user;
user = [1, 'json dev'];
console.log('user', user);
console.log('username', user[1]);
console.log('id', user[0]);
console.log('username.length', user[1].length);
// tuplas con varios valores
// id, username, isPro
var userInfo;
userInfo = [2, 'json dev', true];
console.log('userInfo', userInfo);
// Arreglo de Tuplas
var array = [];
array.push([1, 'json dev1']);
array.push([2, 'json dev2']);
array.push([3, 'json dev3']);
console.log('array', array);
// Uso de funciones Array
// json dev1 -> JSONDEV2021
array[0][1] = array[0][1].concat('2021'); //concat agrega mas TEXTO
console.log('array', array);
