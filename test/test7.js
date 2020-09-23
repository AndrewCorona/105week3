$(function(){
    'use strict';

    var services=['Nails cut','Shower','Full Service','Gold Service'];
    console.log(services);

    $.each(services,function(i,v){
        if(i==0){
            $('#services').append('<h3>Services</h3>');            
        }
        $('#services').append(`<li> ${v}</li>`);
    });
})