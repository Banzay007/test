$('#btn-on').click(function() {
    $('#modal').fadeIn('slow')
});

$('#btn-off').click(function() {
    $('#modal').fadeOut('fast')
});


// $('#btn-on').on('clik', (event) => {
//     $('#modal').fadeIn('slow')
// });

// $('#btn-off').on('clik', (event) => {
//     $('#modal').fadeOut('slow')
// });





// Вариант 1
/*

// добавляем класс "modal_active" модальному окну. При нажатии на крестик удаляем.
$(function () {
  $('#callback-button').click(function () {
    $('.modal').addClass('modal_active');
  });
 
  $('.modal__close-button').click(function () {
    $('.modal').removeClass('modal_active');
  });
});

// Закрыть модальное окно при клике вне его области.
$('.modal').mouseup(function (e) {
    let modalContent = $(".modal__content");
    if (!modalContent.is(e.target) && modalContent.has(e.target).length === 0) {
      $(this).removeClass('modal_active');
    }
  });


  */