( ()=>{
    // types
    type UserID = string | number;
    let userId: UserID;

    // Acciones por tipo de dato
    function greeting(value: UserID){
        if (typeof value === 'string'){
            // Typescript al saber que es string, activa todos los metodos string de autocompletado.
            console.log( `string ${value.toLowerCase()}` );
        } else {
            // Typescript sumiria number como tipo de dato, dado que el parametro solo admite string | number
            console.log( value.toFixed(1) ); // Deja solo un decimal
        }
    }

    // Literal Types
    type Sizes = 'S' | 'M' | 'L' | 'XL';
    let shirtSize: Sizes;
    shirtSize = 'M';

    console.log('size:', shirtSize);

} )();