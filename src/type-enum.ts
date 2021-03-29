// Enum 
/* 
    * Los enumerados permiten definir un conjunto de constantes con nombres
    * Tienen la ventaja de adaptarse al contexto de la aplicación 

*/
// Orientacion para Fotografias

enum PhotoOrientation {
  Landscape,   // 0
  Portrait,   // 1
  Squate,    // 2
  Panorama  // 3
}

const landscape: PhotoOrientation = PhotoOrientation.Landscape
console.log('landscape', landscape)
console.log('Landscape', PhotoOrientation[landscape])

enum PictureOrientation {
  Landscape = 10,   // 10
  Portrait,   // 11
  Squate,    // 12
  Panorama  // 13  se van sumando uno a uno 
}

console.log('portrait', PictureOrientation.Portrait)

enum Country {
  Bovivia = 'bol',
  Colombia = 'col',
  EEUU = 'usa',
  Espana = 'esp'
}

const country: Country = Country.Colombia;
console.log('country', country)


// El uso es conciderado cuanod tenemos un numero de valores 
// Limitados como los dias de semana, colores, meses del año como ejemplos 