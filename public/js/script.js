// Global variables
let productsList = new Array();
// Elements
const $searchInputs = $("input[type='search']");
const $productsTableBody = $("#table_body");

// This will works after the page completely loaded
$(document).ready(function () {
  // Initializing materialize elements
  let sidenavsElems = document.querySelectorAll(".sidenav");
  M.Sidenav.init(sidenavsElems);
  let modelsElems = document.querySelectorAll(".modal");
  M.Modal.init(modelsElems);

  // Getting all products list
  axios
    .post("/admin/get-products")
    .then((response) => (productsList = response.data))
    .catch((err) => console.log(err.message));

  // Chacking if any of search input is not empty, if so filtering the displaying products
  $searchInputs.val() && filterAndDisplayProducts($searchInputs.val());
});

// Function will run when the search bar close icon clicks
function closeSearchBar() {
  filterAndDisplayProducts();
  $searchInputs.val("");
}

// Triggers when the search input value changing
$searchInputs.on("change paste keyup", (e) => {
  let searchQuery = $(e.target).val();
  if (searchQuery === "") return; // Chacking if the search input value is empty, if so nothing will happen
  filterAndDisplayProducts(searchQuery);
});

// This fun will filter product by query and display the filtered products
function filterAndDisplayProducts(query) {
  let filteredProducts = productsList;
  if (query) {
    query = query.toLowerCase();
    filteredProducts = productsList.filter(
      (product) =>
        product.name.toLowerCase().includes(query) ||
        product.description.toLowerCase().includes(query) ||
        product.price.toString().includes(query)
    );
  }
  let productsTableInnerHTML = filteredProducts.map(
    (product, idx) =>
      `<tr id="${product._id}_product">
            <td>${product.name}</td>
            <td>₹ ${product.price}</td>
            <td class="description">${product.description}</td>
            <td>${product.modified.toLocaleString("en-US")}</td>
            <td><img width="100" src="data:${product.imageEncode.type};base64,${
        product.imageEncode.data
      }" alt="${product.name}" /></td>
            <td>
                <a href="/admin/edit-product/${
                  product._id
                }" class="btn">Edit</a>
                <!-- Modal Trigger -->
                <a class="waves-effect waves-light btn modal-trigger red" href="#modal${idx}"
                    data-target="modal${idx}">Delete</a>

                <!-- Modal Structure -->
                <div id="modal${idx}" class="modal">
                    <div class="modal-content">
                        <h4>Are you sure ?</h4>
                        <p style="white-space: normal;">Are you want to
                            delete '${product.name}'
                                ? Once you deleted you can't
                                recover it. So make it sure.</p>
                    </div>
                    <div class="modal-footer">
                        <button class="modal-close waves-effect btn-flat">No</button>
                        <button class="modal-close waves-effect btn red"
                            onclick="deleteProduct(${product._id})">Yes</button>
                    </div>
                </div>
            </td>
        </tr>`
  );
  if (productsTableInnerHTML.length < 1)
    productsTableInnerHTML = `<tr><td colspan="6"><center><b>No products found!</b></center></td></tr>`;
  $productsTableBody.empty(); // Clearing inner html contents and element inside products table body
  $productsTableBody.html(productsTableInnerHTML); // Replacing filtered products to products table body
}
