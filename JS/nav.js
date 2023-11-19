document.addEventListener("DOMContentLoaded", function () {
  fetch('navbar.html')
    .then(function(response) {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.text();
    })
    .then(function(data) {
      document.querySelector("header").innerHTML = data;

      const currentPath = window.location.pathname;
      const navItems = document.querySelectorAll("header a");

      navItems.forEach(function (item) {
        const href = item.getAttribute("href");
        if (currentPath.includes(href)) {
          item.classList.add("active");
        }
        item.addEventListener('click', function(event) {
          event.preventDefault();
          navItems.forEach(function(navItem) {
            navItem.classList.remove('active');
          });

          
          this.classList.add("active");
          const href = this.getAttribute("href");
          window.location.href = href;
        });
      });
    })
    .catch(function(error) {
      console.error('Error fetching navbar:', error);
    });
});
