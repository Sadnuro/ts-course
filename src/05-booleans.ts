( ()=>{
    // Solo admite true o false. No admite null o undefined
    let isEnable = true;
    let isNew: boolean = true;

    const random = Math.random();
    console.log('Random value:', random);

    // isNew = random >= 0.5;
    isNew = random >= 0.5 ? true : false;
    console.log('isNew:', isNew);

})();