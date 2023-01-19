/* SE NECESITA INSTALAR LA LIBRERIA DE JQUERY Y VINCULARLA*/
$(document).ready(function(){ /*para que se ejecute una vez cargada la pagina   */ 
    $('.lista-categoria .categoria[category="todo"]').addClass('ct_activar-item');

    $('.categoria').click(function(){
        //agregar enlace al  seleccionado
        //creando variables
        var varProdcuto=$(this).attr('category'); //al dar click va a igualar al atributo de categoria
        console.log(varProdcuto);//para ver los cambios en consola

        $('.categoria').removeClass('ct_activar-item'); //Se remueva el color al ahcer click
        $(this).addClass('ct_activar-item'); //mover a clase a la cual de click
        //ocultando productos :o
        $('.itemproducto').hide()
        //mostrar productos :D
        $('.itemproducto[category="'+varProdcuto+'"]').show()
    });

    $('.categoria[category="todo"]').click(function(){
        $('.itemproducto').show();
    })
});
