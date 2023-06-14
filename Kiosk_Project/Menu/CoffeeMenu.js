import Americano from './Beverages/Coffee/Americano.js';
import Coldbrew from './Beverages/Coffee/Coldbrew.js';
import Espresso from './Beverages/Coffee/Espresso.js';
import CafeMenu from './Factories/CafeMenu.js';

class CoffeeMenu extends CafeMenu {
    createOrder() {
        this.addPackage(new Americano());
        this.addPackage(new Espresso());
        this.addPackage(new Coldbrew());
    }
}

export default CoffeeMenu;
