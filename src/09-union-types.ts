( ()=>{
    let userId: string | number | boolean;

    // Acciones por tipo de dato
    function greeting(value: string | number){
        if (typeof value === 'string'){
            // Typescript al saber que es string, activa todos los metodos string de autocompletado.
            console.log( `string ${value.toLowerCase()}` );
        } else {
            // Typescript sumiria number como tipo de dato, dado que el parametro solo admite string | number
            console.log( value.toFixed(1) ); // Deja solo un decimal
        }
    }
    greeting(13.33);
    greeting('SNR');

} )();