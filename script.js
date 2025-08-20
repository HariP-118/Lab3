// Show alert for Add to Cart (demo functionality)
document.querySelectorAll('.add-to-cart').forEach(btn =>
  btn.addEventListener('click', () =>
    alert('This product was added to your cart!')
  )
);
