document.addEventListener("DOMContentLoaded", () => {
	const PRODUCT_SOURCE_FILE = "./assets/product_list.json";
	const MERCH_PRODUCT_GROUP = { Name: "merch", Grid: "merch-product-grid" };
	const BOOK_PRODUCT_GROUP = { Name: "book", Grid: "book-product-grid" };
	const modal = document.getElementById("productModal");

	////////////////////////////////////////////////////////////////////////////////////////

	/**
	 * Opens the modal
	 * @param {*} product
	 */
	const openModal = (product) => {
		// Title
		document.getElementById("productTitle").textContent = product.title;

		// Images
		// TODO
		/*
			Setup an image slideshow gallery in the modal (shop.html) https://www.w3schools.com/howto/howto_js_slideshow_gallery.asp
			Add images and alt text iteratively
		*/

		// Price
		document.getElementById(
			"productPrice"
		).textContent = `$${product.price.toFixed(2)}`;

		// TODO
		// Colours
		/*
			Add colours iteratively IF EXISTS
		*/

		// TODO
		// Sizes
		/*
			Add sizes iteratively IF EXISTS
		*/

		// Description
		document.getElementById("productDescription").textContent =
			product.description;

		// Set the modal visible
		modal.style.display = "block";
	};

	////////////////////////////////////////////////////////////////////////////////////////

	/**
	 * Closes the modal
	 */
	const closeModal = () => {
		modal.style.display = "none";
	};

	////////////////////////////////////////////////////////////////////////////////////////

	/**
	 * Setup and event listener to close modal when clicking on the close button or outside the modal
	 */
	document.addEventListener("click", (e) => {
		if (e.target.classList.contains("close") || e.target == modal) {
			closeModal();
		}
	});

	////////////////////////////////////////////////////////////////////////////////////////

	/**
	 * Reads a source file and renders either books or merch to the page
	 * @param {String} sourceFile
	 * @param {*} productGroup
	 */
	const renderProducts = (sourceFile, productGroup) => {
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
					featureImage.id = "featureImg";
					featureImage.src = product.images.at(0).imgSrc;
					featureImage.alt = product.images.at(0).imgAlt;
					productCard.appendChild(featureImage);

					// Add product title
					let productTitle = document.createElement("h3");
					productTitle.id = "title";
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
						// Open the product modal and show the product
						openModal(product);
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
	};

	// Render book products to the page
	renderProducts(PRODUCT_SOURCE_FILE, BOOK_PRODUCT_GROUP);

	// Render merch products to the page
	renderProducts(PRODUCT_SOURCE_FILE, MERCH_PRODUCT_GROUP);
});
