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
const containerProducts = document.querySelector(".container-products");
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
const openModalEdit = document.querySelectorAll(".openModalEdit");

openModalEdit.forEach((element) => {
  element.addEventListener("click", () => {
    editItemModal.classList.toggle("hidden");
    const products = JSON.parse(localStorage.getItem("products"));
    const id = Number(element.id.slice(3, element.id.length));
    const index = products.findIndex((p) => p.id === id);
    console.log(products[index]);
    const formProduct = editItemModal.children[1];

    const data = {
      name: formProduct.nomeProduto,
      category: formProduct.categoriaProduto,
      stock: formProduct.estoque,
    };
    const { name, category, stock } = products[index];

    data.name.value = name;
    data.category.value = category;
    data.stock.value = stock;
    formProduct.addEventListener("submit", (e) => {
      products[index].name = data.name.value;
      products[index].category = data.category.value;
      products[index].stock = data.stock.value;

      console.log(products[index]);
      localStorage.setItem("products", JSON.stringify(products));
    });
  });
});

const searchInput = document.querySelector("#searchItem");

searchInput.addEventListener("input", (e) => {
  console.log(buscar(searchInput.value));
});

function buscar(value) {
  const products = JSON.parse(localStorage.getItem("products"));

  const teste = products.filter((produto) => {
    return produto.name.includes(value);
  });
  return teste;
}
