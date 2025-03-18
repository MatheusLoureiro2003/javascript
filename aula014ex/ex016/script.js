$(function() { 
    $("#contar").on('click', function() {
        var inicio = $("#txti")
        var fim = $("#txtf")
        var passo = $("#txtp")
        let res = $("#res")
    
        if (inicio.val().length == 0 || fim.val().length == 0 || passo.val().length == 0) {
            res.html('Impossível contar!')
            alert('[ERRO] Faltam dados!')
        } else {
            res.html('Contando: <br>')
            var i = Number(inicio.val())
            var f = Number(fim.val())
            var p = Number(passo.val())
            if (p <= 0) {
                alert('Passo inválido! Considerando PASSO 1')
                p = 1
            }
            if ( i < f) { // contagem crescente
                for (var c = i; c <= f; c += p) {
                    res.html(res.html() + `${c} \u{1F449}`)
                }
            } else { // contagem regressiva
                for (var c = i; c >= f; c -= p) {
                    res.html(res.html() + `${c} \u{1F449}`) 
                }
            }
            res.html(res.html() + `\u{1F3C1}`)
            
        }
    })
});