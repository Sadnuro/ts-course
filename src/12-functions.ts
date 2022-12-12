(() => {
    type Sizes = 'S' | 'M' | 'L' | 'XL';

    function createProductToJson(
        title: string,
        createdAt: Date,
        stock: number,
        size: Sizes
    ) {
        return {
            title,
            createdAt,
            stock,
            size
        }
    }
    const product1 = createProductToJson('P1', new Date(), 13, 'S');
    console.log(product1);

    const createProductToJsonV2 = (
        title: string,
        createdAt: Date,
        stock: number,
        size: Sizes | undefined = undefined
    ) => {
        return {
            title,
            createdAt,
            stock,
            size
        }
    }

    const product2 = createProductToJsonV2('P2', new Date(), 13);
    console.log(product2);


    (   // Scoped Block
        function auto() {
            console.log('This is an auto-executable JS function');
        }
    )();// Execution instruction.

})();