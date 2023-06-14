class BeverageMachine {
    brewDrink(drinkName) {
        return new Promise((resolve) => {
            console.log(`음료기계: ${drinkName} 제조 시작...`);
            setTimeout(() => {
                console.log(`음료기계: ${drinkName} 완성!`);
                resolve({ name: drinkName }); // 음료 제조가 완료된 후 Promise를 resolve
            }, 3000); // 음료 제조 시간을 3초로 설정
        });
    }
};

export default BeverageMachine;
