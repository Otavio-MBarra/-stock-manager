import ProductController from "./ProductControler.js";
// console.log(localStorage.length);

const container = document.getElementById("container-list-products");

const productController = new ProductController(container);

const addProductForm = document.getElementById("addProductForm");

addProductForm.addEventListener("submit", (e) => {
  const data = {
    nameProduct: addProductForm.name.value,
    category: addProductForm.category.value,
    inStock: addProductForm.inStock.value,
  };
  console.log(data);

  productController.addProduct(data.nameProduct, data.category, data.inStock);
  addProductForm.reset();
  productController.showProducts();
  container.innerHTML = "";
  productController.renderProducts();
});
productController.showProducts();

const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");
const btnAddProduct = document.getElementById("btnAddProduct");
const modalAddProduct = document.getElementById("addProductModal");
const btncloseEditItemModal = document.querySelector("#closeEditItemModal");
const editItemModal = document.getElementById("editItemModal");
const btncloseAddProductModal = document.querySelector("#closeAddProductModal");
const containerProducts = document.querySelector("#container-list-products");
// const addProductForm = document.getElementById("addProductForm");

menuBtn.addEventListener("click", () => {
  menu.classList.toggle("translate-0");
  menu.classList.toggle("-translate-y-[1000px]");
});

btncloseEditItemModal.addEventListener("click", (e) => {
  editItemModal.classList.toggle("hidden");
});
btncloseAddProductModal.addEventListener("click", (e) => {
  modalAddProduct.classList.toggle("hidden");
});

btnAddProduct.addEventListener("click", () => {
  modalAddProduct.classList.toggle("hidden");
});
const searchInput = document.querySelector("#searchItem");

searchInput.addEventListener("input", (e) => {
  if (searchInput.value.length > 2) {
    try {
      let teste = search(searchInput.value);
      container.innerHTML = "";
      productController.renderProducts(teste);
    } catch (error) {
      alert(error.message);
      searchInput.value = "";
      container.innerHTML = "";
      productController.renderProducts();
    }
  }
});

function search(value) {
  const products = JSON.parse(localStorage.getItem("products"));
  const productsExists = products.filter((product) => {
    return product.name.includes(value);
  });
  if (productsExists.length == 0) {
    throw new Error("Produto não existe");
  }
  return productsExists;
}

containerProducts.addEventListener("click", (e) => {
  const item = e.target.closest(".openModalEdit");
  if (!item) return;
  const id = Number(item.id.slice(3, item.id.length));
  openModalEditProduct(id);
});
function openModalEditProduct(id) {
  const products = JSON.parse(localStorage.getItem("products"));

  const index = products.findIndex((p) => p.id === id);
  if (index === -1) return;

  const product = products[index];

  editItemModal.classList.remove("hidden");

  editValuesProduct(product, products, index);
}
function editValuesProduct(product, products, index) {
  const form = editItemModal.querySelector("form");
  form.querySelector("#nomeProduto").value = product.name;
  form.querySelector("#categoriaProduto").value = product.category;
  form.querySelector("#estoque").value = product.stock;
  const data = {
    name: form.nomeProduto,
    category: form.categoriaProduto,
    stock: form.estoque,
  };

  form.addEventListener("submit", (e) => {
    products[index].name = data.name.value;
    products[index].category = data.category.value;
    products[index].stock = data.stock.value;

    console.log(products[index]);
    localStorage.setItem("products", JSON.stringify(products));
  });
}
