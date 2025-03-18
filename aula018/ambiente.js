$(function() {
    function atualizarMensagem() {
        $('#msg').text('Que Loulcuras!');
    }
    
    $('#meuBotao').on('click', function() {
        atualizarMensagem();
    });
});
$(function() { 
    $("a").on('click', function() {
        $("p").addClass("destaque");
    })
});

$(function() {
    $("a").on('click', function() {
        $("p").css("border", "1px solid red");
    });
});

$(function() {
    $("#lista_teste li:last-child").on('mouseenter', function() {
        $(this).addClass("fundo");
    });

    $("#lista_teste li:last-child").on('mouseleave', function() {
        $(this).removeClass("fundo");
    });
});

$(function() {
    $('#meuBotao').on('click', function() {
        $("#lista_teste").addClass("fundo");
    });
});   