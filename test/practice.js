$(function(){
    'use strict';

    $('main').on({
        click:function(){
            $(this).addClass('red-bg');
        },
        mouseenter:function(){
            $(this).addClass('active');
        },
        mouseleave:function(){
            $(this).removeClass('active red-bg');
        }

    })

    var text=$('main h2').text();
    console.log(text);
    $('main h2').text('<h1> Hello World</h1>');
    $('main h2').text('<h1> Hello World</h1>');
})

$('footer').on('click',function(){
    $('main h2').html("<h1>text change</h1>");
});

$('header img').on('click',function(){
    $(this).attr('src','img/puppy2.jpg')  
}
