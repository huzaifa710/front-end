export class Product {
  id: number;
  name: string;
  sku: string;
  price: number;
  images1: string;
  images2: string;
  images3: string
  constructor() {
    this.id = 0; // Initialize in constructor
    this.name = '';
    this.sku = '';
    this.price = 0;
    this.images1 = '';
    this.images2 = '';
    this.images3 = '';
  }
}
