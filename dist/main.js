"use strict";
console.log('json dev 2');
//Types Date
// Number
// Explicito
var phone;
phone = 1;
phone = 232343;
// phone = 'hola mundo' // Error
// Inferido
var phoneNumber = 1232324;
phoneNumber = 234;
// phoneNumber = true // Error por tipo de datos
var hex = 0xf00d; // para definir un valor hexadecimal
var binay = 10; // para definir un valor binario
var octal = 484; // para definir un valor octal
// Tipo: Boolean
var isPro;
isPro = true;
// isPro =1; //Error
// Inferido
var isUserPro = false;
isUserPro = true;
// isUserPro = 32 // Error
// String
var username = 'json dev';
username = "JEHINGSON";
//username = true // Error
// Template String
// Uso de back-tick `
var userInfo;
userInfo = "\n  User Info:\n  username: " + username + "\n  firstName: " + (username + ' PERNIA') + " \n  phone: " + phoneNumber + "\n  isPro: " + isPro + "\n";
console.log('userInfo', userInfo);
