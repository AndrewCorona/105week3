$(function(){
    'use strict';

    $('img#logo').css({'width':'100px'});
    $('header h2').css({
        'color':'#858584',
        'text-transform':'uppercase'
    });
//how to set up jquery functions, this part is creating the function
    function changeColor(){
        $('nav.menu').css({'background-color':'red'});
    }

    function defaultColor(){
        $('nav.menu').css({'background-color':'white'});
    }
//assigning the function to an action, IE mouseenter executes the function
    $('nav.menu').on('mouseenter',changeColor);
    $('nav.menu').on('mouseleave',defaultColor);
})