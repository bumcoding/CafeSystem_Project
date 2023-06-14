class DrinkBuilder {
    constructor() {
        this.order = {};  // 이 객체에 주문 정보를 담음
    }

    // 메뉴 이름을 설정하는 메소드
    setMenuName(menuName) {
        this.order.menuName = menuName;
        return this;
    }

    // 메뉴 가격을 설정하는 메소드
    setMenuPrice(menuPrice) {
        this.order.menuPrice = menuPrice;
        return this;
    }

    // 최종적으로 주문 객체를 반환하는 메소드
    build() {
        return this.order;
    }
};

export default DrinkBuilder;