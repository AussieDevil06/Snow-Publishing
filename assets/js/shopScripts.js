const PRODUCT_SOURCE_FILE = "./assets/product_list.json";
const MERCH_PRODUCT_GROUP = { Name: "merch", Grid: "merch-product-grid" };
const BOOK_PRODUCT_GROUP = { Name: "book", Grid: "book-product-grid" };

document.addEventListener("DOMContentLoaded", () => {
	// Render book products to the page
	renderProducts(PRODUCT_SOURCE_FILE, BOOK_PRODUCT_GROUP);

	// Render merch products to the page
	renderProducts(PRODUCT_SOURCE_FILE, MERCH_PRODUCT_GROUP);
});

/**
 * Reads a source file and renders either books or merch to the page
 * @param {String} sourceFile
 * @param {*} productGroup
 */
function renderProducts(sourceFile, productGroup) {
	fetch(sourceFile)
		.then((response) => response.json())
		.then((data) => {
			// Fetch the corresponding products
			const products =
				productGroup.Name === MERCH_PRODUCT_GROUP.Name
					? data.merchProducts
					: data.bookProducts;

			// Access the relevant product grid element
			let productGrid = document.getElementById(productGroup.Grid);

			// Add each product card to the product grid
			products.forEach((product) => {
				// Product card div
				let productCard = document.createElement("div");
				productCard.id = `${productGroup.Name}-product-${product.id}`;
				productCard.className = "product-card";

				// Add feature image
				// Note: The feature image is always the first image in the list
				let featureImage = document.createElement("img");
				featureImage.src = product.images.at(0).imgSrc;
				featureImage.alt = product.images.at(0).imgAlt;
				productCard.appendChild(featureImage);

				// Add product title
				let productTitle = document.createElement("h3");
				productTitle.innerText = product.title;
				productCard.appendChild(productTitle);

				// Add product price
				let productPrice = document.createElement("p");
				productPrice.className = "price";
				productPrice.textContent = `\$${Number(product.price).toFixed(2)}`;
				productCard.appendChild(productPrice);

				// Add product description
				let productDescription = document.createElement("p");
				productDescription.className = "description";
				productDescription.innerText = product.description;
				productCard.appendChild(productDescription);

				
				// Add view details button
				let viewDetailsBtn = document.createElement("button");
				viewDetailsBtn.className = "btn view-details-button";
				viewDetailsBtn.title = "View Details";
				viewDetailsBtn.innerHTML = "View Details";
				viewDetailsBtn.onclick = () => {
					//TODO: open modal and display info
					console.table(product.images)// ✅
				};
				productCard.appendChild(viewDetailsBtn);

				// Add to cart button
				let addToCartBtn = document.createElement("button");
				addToCartBtn.className = "btn add-to-cart-button";
				addToCartBtn.title = "Add to Cart";
				addToCartBtn.innerHTML = "Add to Cart";
				addToCartBtn.onclick = () => {
					// TODO: Implement add to cart functionality
				};
				productCard.appendChild(addToCartBtn);

				// Add product card to the book product grid
				productGrid.appendChild(productCard);

			});
		})
		.catch((error) => {
			console.error("Error fetching the file:", error);
		});
}
