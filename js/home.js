// para o painel `novidades`
$('.novidades button').click(function() {
  // if ($('.novidades').hasClass('painel-aberto')) {
  //   $('.novidades').removeClass('painel-aberto');
  // } else {
  //   $('.novidades').addClass('painel-aberto');
  // }

  // o `toggleClass` já faz o if e else internamente
  $('.novidades').toggleClass('painel-aberto');

  // trocando o escrito do botão
  if ($('.novidades').hasClass('painel-aberto')) {
    $('.novidades button').text('Mostrar menos');
  } else {
    $('.novidades button').text('Mostrar mais');
  }
})

// para o painel `mais-vendidos`
$('.mais-vendidos button').click(function() {
  $('.mais-vendidos').toggleClass('painel-aberto');
  if ($('.mais-vendidos').hasClass('painel-aberto')) {
    $('.mais-vendidos button').text('Mostrar menos');
  } else {
    $('.mais-vendidos button').text('Mostrar mais');
  }
})
