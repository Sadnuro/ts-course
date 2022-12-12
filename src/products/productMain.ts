import { addProduct, calcStock, products } from "./product.service";

addProduct({
    title: 'P1',
    createdAt: new Date(),
    stock: 5,
    size: 'XL'
});
addProduct({
    title: 'P2',
    createdAt: new Date(),
    stock: 13,
    size: 'S'
});

console.log(products);