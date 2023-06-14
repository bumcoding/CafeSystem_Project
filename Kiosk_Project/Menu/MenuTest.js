import CoffeeMenu from './CoffeeMenu.js';
import AdeMenu from './Factories/AdeMenu.js';
import LatteMenu from './Factories/LatteMenu.js';

const customer1 = new CoffeeMenu();
customer1.createOrder();
console.log(customer1.getPackage());

const customer2 = new AdeMenu();
customer2.createOrder();
console.log(customer2.getPackage());

const customer3 = new LatteMenu();
customer3.createOrder();
console.log(customer3.getPackage());