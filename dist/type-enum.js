"use strict";
// Enum 
/*
    * Los enumerados permiten definir un conjunto de constantes con nombres
    * Tienen la ventaja de adaptarse al contexto de la aplicación

*/
// Orientacion para Fotografias
var PhotoOrientation;
(function (PhotoOrientation) {
    PhotoOrientation[PhotoOrientation["Landscape"] = 0] = "Landscape";
    PhotoOrientation[PhotoOrientation["Portrait"] = 1] = "Portrait";
    PhotoOrientation[PhotoOrientation["Squate"] = 2] = "Squate";
    PhotoOrientation[PhotoOrientation["Panorama"] = 3] = "Panorama"; // 3
})(PhotoOrientation || (PhotoOrientation = {}));
var landscape = PhotoOrientation.Landscape;
console.log('landscape', landscape);
console.log('Landscape', PhotoOrientation[landscape]);
var PictureOrientation;
(function (PictureOrientation) {
    PictureOrientation[PictureOrientation["Landscape"] = 10] = "Landscape";
    PictureOrientation[PictureOrientation["Portrait"] = 11] = "Portrait";
    PictureOrientation[PictureOrientation["Squate"] = 12] = "Squate";
    PictureOrientation[PictureOrientation["Panorama"] = 13] = "Panorama"; // 13  se van sumando uno a uno 
})(PictureOrientation || (PictureOrientation = {}));
console.log('portrait', PictureOrientation.Portrait);
var Country;
(function (Country) {
    Country["Bovivia"] = "bol";
    Country["Colombia"] = "col";
    Country["EEUU"] = "usa";
    Country["Espana"] = "esp";
})(Country || (Country = {}));
var country = Country.Colombia;
console.log('country', country);
// El uso es conciderado cuanod tenemos un numero de valores 
// Limitados como los dias de semana, colores, meses del año como ejemplos 
