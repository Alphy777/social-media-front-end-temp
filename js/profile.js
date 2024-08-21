document.addEventListener("DOMContentLoaded", function() {
    const tabs = document.querySelectorAll('.tabs-section .tabs li');
    const sections = {
        "Posts": document.querySelector('.posts-section'),
        "Reels": document.querySelector('.reel-section'),
        "Saved": document.querySelector('.saved-section'),
        "Tagged": document.querySelector('.tagged-section')
    };

    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            // Remove active class from all tabs
            tabs.forEach(tab => tab.classList.remove('active'));
            // Add active class to the clicked tab
            this.classList.add('active');

            // Hide all sections
            Object.values(sections).forEach(section => section.classList.remove('active'));

            // Show the corresponding section
            const tabText = this.textContent.trim();
            sections[tabText].classList.add('active');
        });
    });

    // Initially display the first tab and section
    tabs[0].classList.add('active');
    sections["Posts"].classList.add('active');
});
