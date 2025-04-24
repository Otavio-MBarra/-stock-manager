import Product from "./Product.js";
const listProduct = [
  {
    category: "teste",
    name: "curso",
    stock: "12",
  },
  {
    category: "roteador",
    name: "teste",
    stock: "12",
  },
];

const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");
const btnAddProduct = document.getElementById("btnAddProduct");
const modalAddProduct = document.getElementById("addProductModal");
const btncloseEditItemModal = document.querySelector("#closeEditItemModal");
const editItemModal = document.getElementById("editItemModal");
const btncloseAddProductModal = document.querySelector("#closeAddProductModal");
const containerProducts = document.querySelector(".container-products");
const addProductForm = document.getElementById("addProductForm");

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

addProductForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = {
    nameProduct: addProductForm.name.value,
    category: addProductForm.category.value,
    inStock: addProductForm.inStock.value,
  };
  listProduct.push(new Product(data.nameProduct, data.category, data.inStock));
  showProductList(listProduct);
  modalAddProduct.classList.toggle("hidden");
});

const saveEditItem = document.querySelector("#saveEditItem");
saveEditItem.addEventListener("click", (e) => {
  console.log(
    e.target.parentNode.parentNode.querySelector("#nomeProduto").value
  );

  listProduct[0].name =
    e.target.parentNode.parentNode.querySelector("#nomeProduto").value;
  console.log(listProduct);

  showProductList(listProduct);
});

function showProductList(listProduct) {
  const createProduct = listProduct.reduce((acc, product, index) => {
    return (
      acc +
      `      <li
       data-index="${index}"

          class="openModalEdit md:w-72 bg-gray-300 hover:bg-gray-600 hover:text-white transition duration-200 ease-in-out flex justify-between items-center px-5 py-3 rounded-2xl cursor-pointer shadow-lg"
        >
          <div>
            <p class="font-semibold">${product.name}</p>
            <p class="font-light">${product.category}</p>
          </div>
          <p class="text-lg font-semibold">${product.stock}</p>
        </li>`
    );
  }, "");
  containerProducts.innerHTML = createProduct;
  const productItems = containerProducts.querySelectorAll(".openModalEdit");
  productItems.forEach((item) => {
    item.addEventListener("click", (e) => {
      editItemModal.classList.toggle("hidden");

      const nameProduct = e.target.querySelector("p.font-semibold");
      const categoryProduct = e.target.querySelector("p.font-light");
      const stockProduct = e.target.querySelector("p.text-lg");

      editItemModal.querySelector("#nomeProduto").value = nameProduct.innerText;
      editItemModal.querySelector("#categoriaProduto").value =
        categoryProduct.innerText;
      editItemModal.querySelector("#estoque").value = Number(
        stockProduct.innerText
      );
    });
  });
}
