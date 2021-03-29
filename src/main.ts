console.log('json dev 2')

//Types Date
// Number
// Explicito
let phone: number;
phone = 1;
phone = 232343;
// phone = 'hola mundo' // Error

// Inferido
let phoneNumber = 1232324;
phoneNumber = 234;
// phoneNumber = true // Error por tipo de datos

let hex: number = 0xf00d; // para definir un valor hexadecimal
let binay: number = 0b1010; // para definir un valor binario
let octal: number = 0o744; // para definir un valor octal

// Tipo: Boolean
let isPro: boolean;
isPro = true;
// isPro =1; //Error

// Inferido
let isUserPro = false;
isUserPro = true;
// isUserPro = 32 // Error

// String
let username: string = 'json dev';
username = "JEHINGSON"
//username = true // Error

// Template String
// Uso de back-tick `
let userInfo: string;
userInfo = `
  User Info:
  username: ${username}
  firstName: ${username + ' PERNIA'} 
  phone: ${phoneNumber}
  isPro: ${isPro}
`
console.log('userInfo', userInfo)



