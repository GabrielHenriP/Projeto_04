$(function(){

    $('nav a').click(function(){
        var href = $(this).attr('href');
        var offSetTop = $(href).offset().top;

        $('html, body').animate({'scrollTop': offSetTop},1000);
        
        return false; // para não atualizar a página
    })

})