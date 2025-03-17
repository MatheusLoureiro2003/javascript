$(function() {
    function atualizarMensagem() {
        $('#msg').text('Que Loulcuras!');
    }
    
    $('#meuBotao').on('click', function() {
        atualizarMensagem();
    });
});




