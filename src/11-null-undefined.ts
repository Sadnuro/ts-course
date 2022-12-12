( ()=>{
    // Los tipos de datos nativos, como number | string | boolean, no admiten valopres null o undefined
    let num1: number;
    let str1: string;

    // Cuando se declaran variables con inferencia de typado y asignacion null o undefined
    // El tipo de dato asumido es Any, a menos que se realice la declaracion directa de la variable
    // como tipo de dato undefined o null
    let null1 = null;
    let undefined1 = undefined;

    // Si se requiere una variable de tipo null que por alguna razon se inicialice en null
    // Se puede aser uso de el tipado multiple.
    // EJ: En runtime de AngularJS los componentes y librerias podrían iniciar como undefined mientras se cargan
    let num2: number | null = null;
    let str2: string | undefined;

    function hi(name: string | null) {
        let hello = 'hola ';
        if(name){
            hello += name;
        } else {
            hello += 'nobody';
        }
        console.log(hello);
    };
    

    function hiV2(name: string | null) {
        let hello = 'hola ';
        // Si name? no existe, toda la expresion devuelve null
        // name?.toLowerCase();
        hello += name?.toLocaleLowerCase() || 'nobody';

        console.log(hello);
    };

    hi('Sadith');
    hi(null);
    hiV2('Sadith');
    hiV2(null);
} )();