// ----------------------------------------------------
// SYSTEME DE TOGGLE POUR AFFICHER LE MENU 
// ----------------------------------------------------

$(document).ready(function(){

    // selectionner btn-toggle-menu
    $('#btn-toggle-menu').click( ()=> {
        $('.menu ').show();
    })

    // fermer le menu
    $('#btn-close').click( ()=> {
        $('.menu ').hide();
    })


    if (window.matchMedia('(max-width: 800px)').matches) {
        // functionality for screens smaller than 1200px
        $('nav a.link').click( ()=> {
            $('.menu ').hide();
        })
    
        $('nav a.close').click( ()=> {
            $('.menu ').hide();
        })
        
    }

    


});