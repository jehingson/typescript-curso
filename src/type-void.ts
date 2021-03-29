// Tipo: Void
/*
  * void: es lo opuesto de any: representa la ausencia de tipo 
  * Comúnmente se usa como tipo de retorno en funciones
*/
// No se utiliza en la declaracion de variables porque no tiene sentido
// se utiliza en la declaracion de funciones para indicar el tipo de 
// retorno de las mismas y se utiliza cuando estas funciones no retornan 
// ningun valor 

// Tipo explicito
function showInfo(user: any):any{
  console.log('User Info', user.id, user.username, user.firtName)
  //return 'hola'
}

showInfo({
  id: 12321,
  username: 'Json',
  firtName: 'Dev'
})

// Tipo Inferido
function showFormattedInfo(user: any){
  console.log('User Info', `
    id: ${user.id}
    username: ${user.username}
    firstName: ${user.firstName}
    `)
}
showFormattedInfo({
  id: 12321,
  username: 'Json',
  firtName: 'Dev'
});

// Tambien se puede asignar a variable de tipo void cuando el valor 
// de estas variables sean de tipo null o undefined

// Tipo void, como tipo de dato en una variable
let unusable: void;
//unusable = null; // caso especial
unusable = undefined

// Tipo Never: 
/* 
    * Representa el tipo de valor que nunca ocurre
      - Funciones que lanzan excepciones
      - Funciones que nunca retornan un valor 
      - Funciones lanzan error o tiene un ciclo infinito y no
      permite que finalice
*/

function handleError(code: number, message: string): never{
  // Process your code here
  // Generate a message
  throw new Error(`${message}. code: ${code}`);
}

try {
handleError(404, 'Not Fonund'); 
} catch (error) {
  
}

function sumNumbers(limit: number):never{
  let suma = 0;
  while(true){
    suma++;
  }

  /*
    Aqui sabemos que ese codigo nunca va a terminar
    y como sabemos eso lo que hacemo es declarar la funcion 
    como never y asi typescript sabra que sucedera un
    ciclo infinito
  */
}

sumNumbers(10);
// ciclo infinito, el programa nunca termina 

