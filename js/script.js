$('.switcher').click(function () {
    $(this).toggleClass('on');
});

$('.mobile__btn').click(function(){
    $(this).toggleClass('active');
    $('.nav').toggleClass('show');
});
