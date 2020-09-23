$(function(){
    'use strict';

    //$('img#logo').on('click',function(){
    //    $(this).animate({'width':'500px'});
    //});


    //$('img#logo').on('mouseenter',increaseImg);

    //$('img#logo').on('mouseleave',decreaseImg);


    function increaseImg(){
        $(this).animate({'width':'80%'});
    }

    function decreaseImg(){
        $(this).animate({'width':'350px'});
    }

    $('img#logo').on('click',function(){
        $('#petSections').slideUp(1000);
    });

    $('header h1').on('click',function(){
        $('#petSections').slideDown(1000);
    });
});