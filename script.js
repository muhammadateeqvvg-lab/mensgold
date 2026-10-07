document.addEventListener('DOMContentLoaded', () => {
    const mainImage = document.querySelector('.main-image');
    const thumbnails = document.querySelectorAll('.thumbnail-images img');
    const buyNowBtn = document.getElementById('open-form-btn');
    const modal = document.getElementById('order-form-modal');
    const closeBtn = document.querySelector('.close-btn');
    const orderForm = document.getElementById('order-form');
    
    // Tab functionality
    const tabLinks = document.querySelectorAll('.tab-link');
    const tabContents = document.querySelectorAll('.tab-content');

    // Change main image on thumbnail click
    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', () => {
            mainImage.src = thumbnail.src;
        });
    });

    // Open the form modal when "Buy Now" button is clicked
    buyNowBtn.addEventListener('click', () => {
        modal.style.display = 'flex';
    });

    // Close the modal when the close button is clicked
    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // Close the modal when clicking outside the modal content
    window.addEventListener('click', (event) => {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });

    // Handle form submission
    orderForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevents the form from submitting normally
        
        // Collect form data
        const formData = new FormData(orderForm);
        const data = {};
        formData.forEach((value, key) => (data[key] = value));

        // You can send this data to a server here using an API call (e.g., fetch)
        // For now, we'll just log it to the console
        console.log('Order Details:', data);

        // Optionally, you can show a success message to the user
        alert('Thank you for your order! We will contact you shortly.');

        // Close the modal and reset the form
        modal.style.display = 'none';
        orderForm.reset();
    });

    // Handle tab clicks
    tabLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            // Remove active class from all links and content
            tabLinks.forEach(item => item.classList.remove('active'));
            tabContents.forEach(item => item.classList.remove('active'));
            
            // Add active class to the clicked link and its corresponding content
            const tabId = event.target.dataset.tab;
            document.getElementById(tabId).classList.add('active');
            event.target.classList.add('active');
        });
    });
});