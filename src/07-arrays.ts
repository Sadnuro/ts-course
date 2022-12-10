( ()=>{
    // Los metodos sobre los arrays solo admitiran parametros del tipo en que se definio 
    // de manera explicita o inferida 
    // a diferencia de JS donde un array puede contener cualquier tipo de dato
    let prices = [1, 2, 3, 4, 5];       // prices: number[]
    let vector = [1, 'x', true, null];  // vector: (string | number | boolean | null)[]

    let mixed: any[];
    let mixed2: (number | string | boolean | Object)[] = [];

    mixed2.push(1);
    mixed2.push('a');
    mixed2.push(true);
    mixed2.push({}); // Object
    mixed2.push([]); // Object

})();