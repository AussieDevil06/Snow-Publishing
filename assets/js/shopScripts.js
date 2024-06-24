const merchProducts = [
	{
		id: 1,
		imgSrc: "./assets/images/snow-publishing-official-hoodie_1712550381776.jpg",
		imgAlt: "Snow Publishing Hoodie",
		title: "Snow Publishing Hoodie",
		size: "S",
		price: 45.0,
	},
	{
		id: 2,
		imgSrc: "./assets/images/snow-publishing-official-hoodie_1712550381776.jpg",
		imgAlt: "Snow Publishing Hoodie",
		title: "Snow Publishing Hoodie",
		size: "M",
		price: 50.0,
	},
	{
		id: 3,
		imgSrc: "./assets/images/snow-publishing-official-hoodie_1712550381776.jpg",
		imgAlt: "Snow Publishing Hoodie",
		title: "Snow Publishing Hoodie",
		size: "L",
		price: 55.0,
	},
	{
		id: 4,
		imgSrc: "./assets/images/snow-publishing-official-hoodie_1712550381776.jpg",
		imgAlt: "Snow Publishing Hoodie",
		title: "Snow Publishing Hoodie",
		size: "XL",
		price: 60.0,
	},
];

document.addEventListener("DOMContentLoaded", () => {
	// TODO: Repeat the process (like done below for the merch products) for the book products
	//     * -[ ] Define an array of book products
	//     * -[ ] Get access to the book product grid
	//     * -[ ] Create card elements for each of the book products

	// Access the merch product grid element
	let merchProductGrid = document.getElementById("merch-product-grid");

	// Add each product card to the merch product grid
	merchProducts.forEach((product) => {
		// Card div
		let div = document.createElement("div");
		div.id = `product-${product.id}`;
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

		// Add product size
		let productSize = document.createElement("p");
		productSize.className = "size";
		productSize.textContent = `Size: ${product.size}`;
		div.appendChild(productSize);

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
			console.log("Added to cart", product.id);
		};
		div.appendChild(addToCartBtn);

		// Add view details button
		let viewDetailsBtn = document.createElement("button");
		viewDetailsBtn.className = "view-details-button";
		viewDetailsBtn.title = "View Details";
		viewDetailsBtn.innerHTML = "View Details";
		viewDetailsBtn.onclick = () => {
			console.log("Showing details for product id ", product.id);
		};
		div.appendChild(viewDetailsBtn);

		// Add product card to the merch product grid
		merchProductGrid.appendChild(div);
	});
});
