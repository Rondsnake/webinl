

  var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slide");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
var rows = document.querySelectorAll('#timetable table tr');
rows.forEach(function(row) {
  row.addEventListener('click', function() {
    this.classList.toggle('selected');
  });
});


const cartItemsElement = document.getElementById('cart-items');
const cartTotalElement = document.getElementById('cart-total');

const products = document.querySelectorAll('.product');

let cartItems = [];
let cartTotal = 0;

function updateCartDisplay() {
  cartItemsElement.innerHTML = '';
  cartItems.forEach(item => {
    const li = document.createElement('li');
    li.textContent = `${item.name} - $${item.price}`;
    cartItemsElement.appendChild(li);
  });
  cartTotalElement.textContent = `Total: $${cartTotal.toFixed(2)}`;
}

function addToCart(name, price) {
  cartItems.push({ name, price });
  cartTotal += price;
  updateCartDisplay();
}

products.forEach(product => {
  const addToCartButton = product.querySelector('.add-to-cart');
  addToCartButton.addEventListener('click', () => {
    const productName = product.querySelector('h3').textContent;
    const productPrice = parseFloat(product.querySelector('p').textContent.replace('Price: $', ''));
    addToCart(productName, productPrice);
  });
});



