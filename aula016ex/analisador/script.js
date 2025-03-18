$(function() {
    let valores = [];
    let num = $('#fnum');
    let lista = $('#flista');
    let res = $('#res');



    $(function() {
        function isNumero(n) {
            if(Number(n) >= 1 && Number(n) <= 100) {
                return true
            } else {
                return false
            }    
        }   
        function inLista(n, l) {
            return l.indexOf(Number(n)) !== -1;
        }    
        $("#add").on('click', function() {
            let numero = $("#fnum").val();
            if(isNumero(numero) && !inLista(numero, valores)) {
                valores.push(Number(numero)); // Adiciona o número ao array
                $("select").append(`<option>${numero}</option>`); // Adiciona o número ao select

                
            }
            else {
                alert('Valor inválido ou já encontrado na lista.');
            }
            $("#fnum").val('').focus();
        });
    });

    $("#finalizar").on('click', function() {
        if (valores.length === 0) {
            alert('Adicione valores antes de finalizar!');
        } else {
            let tot = valores.length;
            let maior = Math.max(...valores);
            let menor = Math.min(...valores);
            let soma = valores.reduce((a, b) => a + b, 0);
            let media = soma / tot;

            res.html('');
            res.append(`<p>Ao todo, temos ${tot} números cadastrados.</p>`);
            res.append(`<p>O maior valor informado foi ${maior}.</p>`);
            res.append(`<p>O menor valor informado foi ${menor}.</p>`);
            res.append(`<p>Somando todos os valores, temos ${soma}.</p>`);
            res.append(`<p>A média dos valores digitados é ${media}.</p>`);
        }
    });
});