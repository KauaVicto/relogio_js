$(document).ready(function () {})

let data_atual = Date.now();
let data = new Date(data_atual);
console.log(data)

/* O ponto inicial do ponteiro de segundo */
let rotate_segundo = data.getSeconds() * 6;

/* O ponto inicial do ponteiro do minuto */
let rotate_minuto = (data.getMinutes() * 6) + (data.getSeconds() * 0.1);

let hora_atual = data.getHours();
if(data.getHours() >= 12){
    hora_atual -= 12;
}
let rotate_hora = (hora_atual * 30) + rotate_minuto / 12;


$('#ponteiro_segundo').css({
    transform: "rotate(" + rotate_segundo + "deg)"
})

$('#ponteiro_minuto').css({
    transform: "rotate(" + rotate_minuto + "deg)"
})

$('#ponteiro_hora').css({
    transform: "rotate(" + rotate_hora + "deg)"
})


let timeout = setInterval(function () {

    let data_nova = Date.now();
    let diferenca = data_nova - data_atual
    data_atual = data_nova;

    console.log(diferenca)

    $('#ponteiro_segundo').css({
        transform: "rotate(" + rotate_segundo + "deg)"
    })

    $('#ponteiro_minuto').css({
        transform: "rotate(" + rotate_minuto + "deg)"
    })

    $('#ponteiro_hora').css({
        transform: "rotate(" + rotate_hora + "deg)"
    })
    rotate_segundo += (0.006 * diferenca);
    rotate_minuto += (0.0001 * diferenca);
    rotate_hora += ((0.003 / 360) * diferenca);





    if(rotate_segundo >= 360){
        rotate_segundo = 0
    }
    if(rotate_minuto >= 360){
        rotate_minuto = 0
    }
    if(rotate_hora >= 360){
        rotate_hora = 0
    }

}, 1);
