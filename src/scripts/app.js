import ProductController from "./ProductControler.js";
// console.log(localStorage.length);

const container = document.getElementById("container-list-products");

const productController = new ProductController(container);

const addProductForm = document.getElementById("addProductForm");

addProductForm.addEventListener("submit", (e) => {
  e.preventDefault();
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

showProductList(listProduct);

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

openModalEdit.forEach((element) => {
  element.addEventListener("click", () => {
    editItemModal.classList.toggle("hidden");
  });
});
