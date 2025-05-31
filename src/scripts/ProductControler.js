import Product from "./Product.js";

class ProductController {
  constructor(container) {
    this.container = container;
    this.products = this.loadProducts();
  }
  showProducts() {
    console.log(this.products);
  }

  addProduct(name, category, stock) {
    const product = new Product(name, category, stock);
    this.products.push(product);
    this.saveProducts();
    console.log(this.saveProducts());
  }

  loadProducts() {
    const data = localStorage.getItem("products");
    return data ? JSON.parse(data) : [];
  }
  saveProducts() {
    localStorage.setItem("products", JSON.stringify(this.products));
  }
  /*   <li
          class="openModalEdit md:w-72 bg-gray-300 hover:bg-gray-600 hover:text-white transition duration-200 ease-in-out flex justify-between items-center px-5 py-3 rounded-2xl cursor-pointer shadow-lg"
        >
      
        </li> */
  renderProducts() {
    this.products.forEach((product) => {
      const element = document.createElement("li");
      element.classList.add(
        "openModalEdit",
        "md:w-72",
        "bg-gray-300",
        "hover:bg-gray-600",
        "hover:text-white",
        "transition",
        "duration-200",
        "ease-in-out",
        "flex",
        "justify-between",
        "items-center",
        "px-5",
        "py-3",
        "rounded-2xl",
        "cursor-pointer",
        "shadow-lg"
      );
      element.innerHTML = `
            <div>
            <p class="font-semibold">${product.name}</p>
            <p class="font-light">Roteador</p>
          </div>
          <p class="text-lg font-semibold">20</p>
        </li>
        <li
          class="md:w-72 bg-gray-300 hover:bg-gray-600 hover:text-white transition duration-200 ease-in-out flex justify-between items-center px-5 py-3 rounded-2xl cursor-pointer shadow-lg"
        >
          <div>
            <p class="font-semibold">AX300</p>
            <p class="font-light">Roteador</p>
          </div>
          <p class="text-lg font-semibold">20</p>
      `;

      console.log(element);
    });
  }
}

export default ProductController;
