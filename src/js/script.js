
$(document).ready(function() {
  function recalculateTotal() {
    var total = 0;
    $('tr[data-price]').each(function() {
      var price = Number($(this).attr('data-price'));
      var quantity = Number($(this).find('select').val());
      total = total + quantity * price;
    });
    $('#price-value').text(total);
    if (!total) {
      $('#form-checkout [type="submit"], #form-confirm-checkout [type="submit"]').prop('disabled', true);
    }
  }

  $('.product-thumbnail').click(function() {
    window.location = './product.html';
  });
  $('[data-toggle="tooltip"]').tooltip();

  $('.btn-shopping-cart').on('click', function() {
    window.location = 'checkout.html';
  });
  
  $('.product-option').on('click', function() {
    $(this).siblings('.active').removeClass('active');
    $(this).addClass('active');
    $(this).find('input').prop('checked', true);
  });
  
  $('#shopping-cart-contents select').on('change', function() {
    var price = Number($(this).parents('tr[data-price]').attr('data-price'));
    var quantity = Number($(this).val());
    $(this).parents('tr').find('.total').text((price * quantity) + '$');
    recalculateTotal();
  });
  
  $('#shopping-cart-contents .btn-delete').on('click', function() {
    $(this).parents('tr').remove();
    recalculateTotal();
  });

  $('.product-thumbnail .btn').click(function(e) {
    e.stopPropagation();
    alert('أضيف المنتج لعربة الشراء');
  });
});