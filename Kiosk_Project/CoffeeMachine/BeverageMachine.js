class BeverageMachine {
    static brewDrink(drinkName) {
        console.log(`음료기계: ${drinkName} 제조 시작...`);
        console.log(`음료기계: ${drinkName} 완성!`);
        return { name: drinkName };
    }
};

export default BeverageMachine;
