
$(function () {
    $("#tabuada").on('click', function() {
        let num = $("#txtn")
        let tab = $("#seltab")
        if(num.val().length == 0) {
            alert('Por favor, digite um número!')    
        } else {
            let n = Number(num.val())
            let c = 1
            tab.html('')
            while (c <= 10) {
                let item = $('<option></option>').text(`${n} x ${c} = ${n * c}`).val(`tab${c}`)
                tab.append(item)
                c++
            }
        }   
    })
});


