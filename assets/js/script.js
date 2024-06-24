document.addEventListener('DOMContentLoaded', () => {
    const cartBtn = document.getElementById('cartBtn');
    const modal = document.getElementById('cartModal');
    const closeModal = document.querySelector('.close');

    // Function to open the modal
    const openModal = () => {
        modal.style.display = 'block';
    };

    // Function to close the modal
    const closeModalFunc = () => {
        modal.style.display = 'none';
    };

    // Add event listener to Cart button
    cartBtn.addEventListener('click', (e) => {
        e.preventDefault();
        openModal();
    });

    // Add event listener to close button
    closeModal.addEventListener('click', closeModalFunc);

    // Close modal when clicking outside of modal content
    window.addEventListener('click', (e) => {
        if (e.target == modal) {
            closeModalFunc();
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const viewDetailsButtons = document.querySelectorAll('.view-details-button');
    const modal = document.getElementById('productModal');
    const closeModal = document.querySelector('.close');
    const productTitle = document.getElementById('productTitle');
    const productImage = document.getElementById('productImage');
    const productDescription = document.getElementById('productDescription');
    const productPrice = document.getElementById('productPrice');

    // Function to open the modal
    const openModal = (title, image, description, price) => {
        productTitle.textContent = title;
        productImage.src = image;
        productImage.alt = `Image of ${title}`;
        productDescription.textContent = description;
        productPrice.textContent = price;
        modal.style.display = 'block';
    };

    // Function to close the modal
    const closeModalFunc = () => {
        modal.style.display = 'none';
    };

    // Add event listeners to "View Details" buttons
    viewDetailsButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const card = button.closest('.product-card');
            const title = card.querySelector('h3').textContent;
            const image = card.querySelector('img').src;
            const description = 'This is a sample description for the product.'; // Replace with actual description if available
            const price = card.querySelector('.price').textContent;
            openModal(title, image, description, price);
        });
    });
    
  document.addEventListener('click', (e) => {
    if (e.target.classList.contains('close')) {
        closeModalFunc();
    }
});

    
    // Close modal when clicking outside of modal content
    window.addEventListener('click', (e) => {
        if (e.target == modal) {
            closeModalFunc();
        }
    });
});
