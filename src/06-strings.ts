( ()=>{
    let productTitle = 'Amazing product';
    let productDescription = "Product's detail";
    // Back Tick
    const summary = `Title: ${productTitle}, Description: ${productDescription}, Price: ${ 2*2 }`;
    
    console.log(summary);
    
    // Error
    // productTitle = null;
    // productTitle = undefined;
    // productTitle = 1;
})();