let productNameInput = document.getElementById("productNameInput");
let productPriceInput = document.getElementById("productPriceInput");
let productCategoryInput = document.getElementById("productCategoryInput");
let productDescriptionInput = document.getElementById(
  "productDescriptionInput"
);
let addproductbutton = document.getElementById("addproductbutton");
let updateproductbutton = document.getElementById("updateproductbutton");
let productContanier;
// the local storage is in your desk
//first we chek if it is == null or not
// if not -->>get the parse of local storgae in empty array
if (localStorage.getItem("myproducts") != null) {
  // multi ways of get obejct from storage data
  productContanier = JSON.parse(localStorage.getItem("myproducts"));
  // productContanier=JSON.parse(localStorage["myproducts"])
  //productContanier=JSON.parse(localStorage.myproducts)
  displayProducts();
}
// make it an empty array
else {
  productContanier = [];
}

//json-->>stringify-->converts object to string
//json-->>parse-->converts string to object
function addProduct() {
  let product = {
    productNameVal: productNameInput.value,
    productPriceVal: productPriceInput.value,
    productCategoryVal: productCategoryInput.value,
    productDescriptionVal: productDescriptionInput.value,
  };
  productContanier.push(product);
  localStorage.setItem("myproducts", JSON.stringify(productContanier));
  clearForm();
  displayProducts();
}

function clearForm() {
  productNameInput.value = "";
  productPriceInput.value = "";
  productCategoryInput.value = "";
  productDescriptionInput.value = "";
}
function displayProducts() {
  let cartoona = "";
  for (let i = 0; i < productContanier.length; i++) {
    cartoona += `    
    <tr>
    <td>${productContanier[i].productNameVal}</td>
    <td>${productContanier[i].productPriceVal}</td>
    <td>${productContanier[i].productCategoryVal}</td>
    <td>${productContanier[i].productDescriptionVal}</td>
    <td><div onclick="updateitem(${i})" class="btn btn-outline-warning">update</div></td>
    <td><div onclick="deleteitem(${i})" class="btn btn-outline-danger">delete</div></td>
  </tr>`;
  }
  document.getElementById("tableBody").innerHTML = cartoona;
}
function deleteitem(index) {
  productContanier.splice(index, 1);
  // we can't use remove like that
  // localStorage.removeItem("myproducts"); because it will delete th whole storage of related key
  // soil we will use the push technique in the local storge again
  localStorage.setItem("myproducts", JSON.stringify(productContanier));
  displayProducts();
}
function updateitem(index) {
  productNameInput.value = `${productContanier[index].productNameVal}`;
  productPriceInput.value = `${productContanier[index].productPriceVal}`;
  productCategoryInput.value = `${productContanier[index].productCategoryVal}`;
  productDescriptionInput.value = `${productContanier[index].productDescriptionVal}`;
  deleteitem(index);
  // addproductbutton.innerHTML=("Update Value");
  //to control the html code use innerHTML
  addproductbutton.classList.add("d-none");
  updateproductbutton.classList.replace("d-none", "d-block");
  // we use class list to control css classes
}
function updateProduct() {
  updateproductbutton.classList.replace("d-block", "d-none");
  addproductbutton.classList.replace("d-none", "d-block");
  addProduct();
}
