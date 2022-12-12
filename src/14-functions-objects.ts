(() => {
    type Sizes = 'S' | 'M' | 'L' | 'XL';
    type Product = {
        title: string,
        createdAt: Date,
        stock: number,
        size: Sizes
    };

    // const login = (email: string, pwd: string) => {
    //     console.log(email, pwd);
    // }
    const login = (data: { email: string, pwd: string }) => {
        console.log(data.email, data.pwd);
    }

    login({ email: 'sadnuro', pwd: '0123' });

    const products: Product[] = [];
    const addProduct = (data: Product ) => {
        products.push(data);
    };

    const addProductV2 = ( {title, createdAt, stock, size}: Product ) => {
        // Code here
    };

    addProduct({
        title: 'P1',
        createdAt: new Date(),
        stock: 1,
        size: 'S'
    })
    console.log(products);
})();