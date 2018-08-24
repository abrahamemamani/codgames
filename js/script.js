$('.-smoove').smoove({
    offset: '20%'
})
$('.carousel').carousel();

$('#myCarousel').mouseover(function(){
    $('.carousel-control').css({'opacity':'1'});
});
$('#myCarousel').mouseout(function(){
    $('.carousel-control').css({'opacity':'0'});
});