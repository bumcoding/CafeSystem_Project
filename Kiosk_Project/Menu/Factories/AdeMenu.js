import GrapefruitAde from '../Beverages/Ade/GrapefruitAde.js';
import GreenGrapeAde from '../Beverages/Ade/GreenGrapeAde.js';
import LemonAde from '../Beverages/Ade/LemonAde.js';
import CafeMenu from '../CafeMenu.js';

class AdeMenu extends CafeMenu {
    createOrder() {
        this.addPackage(new LemonAde());
        this.addPackage(new GreenGrapeAde());
        this.addPackage(new GrapefruitAde());
    }
}

export default AdeMenu;