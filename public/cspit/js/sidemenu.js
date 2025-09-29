document.addEventListener('DOMContentLoaded', function () {
    // Get all dropdown links
    const dropdownLinks = document.querySelectorAll('.nav-link.dropdown-toggle');

    dropdownLinks.forEach((link) => {
        link.addEventListener('click', function (e) {
            e.preventDefault(); // Prevent default anchor behavior
            const parentItem = link.closest('.nav-item');
            const dropdownMenu = parentItem.querySelector('.dropdown-menu');

            console.log("Dropdown Item Clicked");
            
            // Toggle the dropdown visibility
            const isActive = parentItem.classList.contains('active');
            closeAllDropdowns(); // Close all dropdowns
            if (!isActive) {
                parentItem.classList.add('active');
                dropdownMenu.style.display = 'block';
            }
        });
    });

    // Close dropdowns when clicking outside
    document.addEventListener('click', function (e) {
        if (!e.target.closest('.nav-item')) {
            closeAllDropdowns();
        }
    });

    // Helper function to close all dropdowns
    function closeAllDropdowns() {
        document.querySelectorAll('.nav-item').forEach((item) => {
            item.classList.remove('active');
            const dropdownMenu = item.querySelector('.dropdown-menu');
            if (dropdownMenu) {
                dropdownMenu.style.display = 'none';
            }
        });
    }
    
});
