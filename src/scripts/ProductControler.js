import Product from "./Product.js";

class ProductController {
  constructor(container) {
    this.container = container;
    this.products = this.loadProducts();
    this.renderProducts();
  }
  showProducts() {
    // console.log(this.products);
    this.newId();
  }

  addProduct(name, category, stock) {
    const product = new Product(name, category, stock, this.newId());
    this.products.push(product);
    this.saveProducts();
    // console.log(this.saveProducts());
  }
  newId() {
    let id;
    console.log(this.products);

    const randomNum = Math.floor(Math.random() * 10000) + 1;

    return;
  }

  loadProducts() {
    const data = localStorage.getItem("products");
    return data ? JSON.parse(data) : [];
  }
  saveProducts() {
    localStorage.setItem("products", JSON.stringify(this.products));
  }

  renderProducts() {
    this.products.forEach((product) => {
      const productElement = document.createElement("li");
      productElement.classList.add(
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
      productElement.innerHTML = `
                  <div>
            <p class="font-semibold">${product.name}</p>
            <p class="font-light">${product.category}</p>
          </div>
          <p class="text-lg font-semibold">${product.stock}</p>
      `;

      this.container.appendChild(productElement);
      // console.log(productElement);
    });
  }
}

export default ProductController;
