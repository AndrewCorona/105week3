function initService(){

    $('#BathFullHaircut').hide();
    $('#BathBrush').hide();
    $('#NailClipEarClean').hide();
    $('#FeatherTrim').hide();
    $('#Bathandcondition').hide();
    $('#FullService').hide();

    $('#BathFullHaircut-btn').on('click',function(){
        $('#BathFullHaircut').show();
        $('#BathBrush').hide();
        $('#NailClipEarClean').hide();
        $('#FeatherTrim').hide();
        $('#Bathandcondition').hide();
        $('#FullService').hide();
        $('#BlankService').hide();
    });

    $('#BathandBrush-btn').on('click',function(){
        $('#BathFullHaircut').hide();
        $('#BathBrush').show();
        $('#NailClipEarClean').hide();
        $('#FeatherTrim').hide();
        $('#Bathandcondition').hide();
        $('#FullService').hide();
        $('#BlankService').hide();
    });

    $('#NailClippingandEarCleaning-btn').on('click',function(){
        $('#BathFullHaircut').hide();
        $('#BathBrush').hide();
        $('#NailClipEarClean').show();
        $('#FeatherTrim').hide();
        $('#Bathandcondition').hide();
        $('#FullService').hide();
        $('#BlankService').hide();
    });

    $('#FeatherTrim-btn').on('click',function(){
        $('#BathFullHaircut').hide();
        $('#BathBrush').hide();
        $('#NailClipEarClean').hide();
        $('#FeatherTrim').show();
        $('#Bathandcondition').hide();
        $('#FullService').hide();
        $('#BlankService').hide();
    });

    $('#BathandCondition-btn').on('click',function(){
        $('#BathFullHaircut').hide();
        $('#BathBrush').hide();
        $('#NailClipEarClean').hide();
        $('#FeatherTrim').hide();
        $('#Bathandcondition').show();
        $('#FullService').hide();
        $('#BlankService').hide();
    });
    $('#FullService-btn').on('click',function(){
            $('#BathFullHaircut').hide();
            $('#BathBrush').hide();
            $('#NailClipEarClean').hide();
            $('#FeatherTrim').hide();
            $('#Bathandcondition').hide();
            $('#FullService').show();
            $('#BlankService').hide();
    });
}

window.onload=initService();