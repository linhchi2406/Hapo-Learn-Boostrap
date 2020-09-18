$("#btn-mess").click(function() {
  $("#chat").toggle();
});

$("#close-btn").click(function() {
    $("#chat").hide();
  });

  function messButton() {
    var messbtns = document.getElementById("box-chat");
    if (messbtns.style.display == "block") {
      messbtns.style.display = "none";
    } else {
      messbtns.style.display = "block";
    }
  }
  
  function closeButton() {
    var closebtns = document.getElementById("box-chat");
    closebtns.style.display = "none";
  }
  

$(document).ready(function(){
  $('#header-button').click(function() {
      $('#icon').toggleClass('fa-times');
      $('#icon').toggleClass('fa-bars');
  });

  $('.fb-content').slick({
    centerMode: false,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed : 2000,
    pauseOnFocus: true,
    pauseOnHover: true,
    prevArrow: $('.next-left'),
    nextArrow: $('.next-right'),
  
      responsive: [
        {
          breakpoint: 980,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
  });
});
