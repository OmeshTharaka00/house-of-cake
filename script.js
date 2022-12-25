const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
      });
    
}

if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
      });
    
}

var MainImg = document.getElementById("MainImg");
var smallimg = document.getElementsByClassName("small-img");

    smallimg[0].onclick = function(){
        MainImg.src = smallimg[0].src;
    }
    smallimg[1].onclick = function(){
        MainImg.src = smallimg[1].src;
    }
    smallimg[2].onclick = function(){
        MainImg.src = smallimg[2].src;
    }
    smallimg[3].onclick = function(){
        MainImg.src = smallimg[3].src;
    }


    // -----------------for-Shopping-cart-------------
$(document).ready(function(){
  update_amounts();
  $('.qty, .price').on('keyup keypress blur change', function(e) {
    update_amounts();
  });
});
function update_amounts(){
var sum = 0.0;
    $('#myTable > tbody  > tr').each(function() {
    var qty = $(this).find('.qty').val();
      var price = $(this).find('.price').val();
      var amount = (qty*price)
      sum+=amount;
      $(this).find('.amount').text(''+amount);
    });
$('.total').text(sum);
}



















