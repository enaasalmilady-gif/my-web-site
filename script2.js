
document.addEventListener("DOMContentLoaded", () => {
  
 
  const options = {
    threshold: 0.2, 
    rootMargin: "0px 0px -50px 0px" 
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
        
        
        observer.unobserve(entry.target);
      }
    });
  }, options);

  
  const elements = document.querySelectorAll(".reveal, .reveal-img");

 
  elements.forEach((el) => {
    observer.observe(el);
  });
});




const menuToggle = document.getElementById('menuToggle');
const sidebar = document.getElementById('sidebar');

menuToggle.addEventListener('click', () => {
    sidebar.classList.toggle('active');
    
    // Optional: Change the icon from "bars" to "X" when open
    const icon = menuToggle.querySelector('i');
    if (sidebar.classList.contains('active')) {
        icon.classList.replace('fa-bars', 'fa-xmark');
    } else {
        icon.classList.replace('fa-xmark', 'fa-bars');
    }
});
