class CafeFactory {
    constructor() {
        this.package = new Array();
    }
    createOrder() {}
    getPackage() {
        return this.package;
    }
    addPackage(object) {
        this.package.push(object);
    }
}

export default CafeFactory;
