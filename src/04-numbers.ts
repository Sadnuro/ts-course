( ()=>{
    // Tipado Inferido
    let productPrice =100;
    // Tipado Explicito
    let productStock: number = 50;
    // productStock = productStock + '1'; // JS: '501'
    productStock = productStock + 1;


    // Error
    // productPrice = 'hola';
    // productPrice = undefined;
    // productPrice = null;

    let discount = parseInt('123'); // Tipado Inferido: number

    // Hexadecimal
    let hex = 0xff;
    // Binario
    let bin = 0b1010;
    console.log(hex);   // Lo tranforma a decimal
    console.log(bin);   // Lo tranforma a decimal

    // Objeto number
    // Funciona pero opera como objeto, no como tipo numerico nativo
    let numero: Number = 10;

})();