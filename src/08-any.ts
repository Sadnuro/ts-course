( ()=>{
    /** El tipo de dato any “desactiva” el tipado de TS, volviendo de cierta forma a JS. No es recomendado usar any. 
     * Sin embargo, puede ser útil cuando estamos migrando código JS a TS. 
     * Podemos convertir de any a cualquier otro tipo de dato con el as operator. Este se usa de la siguiente forma.
     */
    let dinamycVar: any;
    dinamycVar = 1;
    dinamycVar = 'a';
    dinamycVar = false;
    dinamycVar = null;
    dinamycVar = [];
    dinamycVar = {};

    
    // cast
    dinamycVar= 'texto';
    let texto = (dinamycVar as string).toUpperCase();
    console.log(texto);

    dinamycVar = 13;
    let numero = ( <number>dinamycVar ).toFixed();
    console.log(numero);

})();