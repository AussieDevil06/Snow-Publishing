const MERCH_PRODUCT_GROUP = { Name: "merch", Grid: "merch-product-grid" };
const BOOK_PRODUCT_GROUP = { Name: "book", Grid: "book-product-grid" };
const PRODUCT_SOURCE_FILE = "./assets/product_list.json";

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
				productGroup.Name === MERCH_PRODUCT_GROUP.Name ? data.merchProducts : data.bookProducts;

			// Access the relevant product grid element
			let productGrid = document.getElementById(productGroup.Grid);

			// Add each product card to the product grid
			products.forEach((product) => {
				// Card div
				let div = document.createElement("div");
				div.id = `${productGroup.Name}-product-${product.id}`;
				div.className = "product-card";

				// Add product image
				let img = document.createElement("img");
				img.src = product.imgSrc;
				img.alt = product.imgAlt;
				div.appendChild(img);

				// Add product title
				let h3 = document.createElement("h3");
				h3.innerText = product.title;
				div.appendChild(h3);

				if (productGroup.Name === MERCH_PRODUCT_GROUP.Name) {
					// Add product size
					let productSize = document.createElement("p");
					productSize.className = "size";
					productSize.textContent = `Size: ${product.size}`;
					div.appendChild(productSize);
				}

				// Add product price
				let productPrice = document.createElement("p");
				productPrice.className = "price";
				productPrice.textContent = `\$${Number(product.price).toFixed(2)}`;
				div.appendChild(productPrice);

				// Add to cart button
				let addToCartBtn = document.createElement("button");
				addToCartBtn.className = "btn";
				addToCartBtn.title = "Add to Cart";
				addToCartBtn.innerHTML = "Add to Cart";
				addToCartBtn.onclick = () => {
					// TODO: Implement add to cart functionality
					console.log(
						`${productGroup.Name} with id ${product.id} being added to cart`
					);
				};
				div.appendChild(addToCartBtn);

				// Add view details button
				let viewDetailsBtn = document.createElement("button");
				viewDetailsBtn.className = "view-details-button";
				viewDetailsBtn.title = "View Details";
				viewDetailsBtn.innerHTML = "View Details";
				viewDetailsBtn.onclick = () => {
					console.log(
						`Showing details for ${productGroup.Name} with id ${product.id}`
					);
				};
				div.appendChild(viewDetailsBtn);

				// Add product card to the book product grid
				productGrid.appendChild(div);

				console.log(`${productGroup.Name} products rendered successfully`);
			});
		})
		.catch((error) => {
			console.error("Error fetching the file:", error);
		});
}
