( ()=>{
    const calcTotal = (prices: number[]): string =>{
        let total = 0;  // Infered number data type
        prices.forEach( (item) => {
            total += item;
        })
        return total.toString();   // Return Infered number data type
    }

    const rta = calcTotal( [1, 2, 3, 4, 5] );   // String variable
    console.log(rta);

    const printTotal = (prices: number[]): void => {
        const value = calcTotal(prices);
        console.log('The total value is:', rta); 
    }
    printTotal( [1, 2, 3, 4, 5] );

} )();