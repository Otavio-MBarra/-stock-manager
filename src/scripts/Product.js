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
    return `      <li
       data-index="${index}"

          class="openModalEdit md:w-72 bg-gray-300 hover:bg-gray-600 hover:text-white transition duration-200 ease-in-out flex justify-between items-center px-5 py-3 rounded-2xl cursor-pointer shadow-lg"
        >
          <div>
            <p class="font-semibold">${product.name}</p>
            <p class="font-light">${product.category}</p>
          </div>
          <p class="text-lg font-semibold">${product.stock}</p>
        </li>`;
  }
}

export default Product;
