import DalgonaLatte from '../Beverages/Latte/DalgonaLatte.js';
import GreenTeaLatte from '../Beverages/Latte/GreenTeaLatte.js';
import VanillaLatte from '../Beverages/Latte/VanillaLatte.js';
import CafeMenu from '../CafeMenu.js';

class LatteMenu extends CafeMenu {
    createOrder() {
        this.addPackage(new DalgonaLatte());
        this.addPackage(new GreenTeaLatte());
        this.addPackage(new VanillaLatte());
    }
}

export default LatteMenu;