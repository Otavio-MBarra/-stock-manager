class Product {
  constructor(name, category, stock) {
    this.name = name;
    this.category = category;
    this.stock = stock;
    this.id = this.generateId();
  }
  generateId() {
    return Math.floor(Math.random() * 1000000);
  }
  render() {
    return "oi";
  }
}

export default Product;
