document.getElementById("contact-form").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Thank you! Your message has been sent.");
  this.reset();
});
function showForm() {
  const form = document.getElementById('contactForm');
  form.style.display = 'block';
  form.scrollIntoView({ behavior: 'smooth' });
}
 
