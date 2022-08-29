$(document).ready(function () {})


let data = new Date;
console.log(data.getMinutes())


let rotate_segundo = data.getSeconds() * 6;
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
    $('#ponteiro_segundo').css({
        transform: "rotate(" + rotate_segundo + "deg)"
    })

    $('#ponteiro_minuto').css({
        transform: "rotate(" + rotate_minuto + "deg)"
    })

    $('#ponteiro_hora').css({
        transform: "rotate(" + rotate_hora + "deg)"
    })
    rotate_segundo += (6 / 10);
    rotate_minuto += (0.1 / 10);
    rotate_hora += ((3 / 360) / 10);

    if(rotate_segundo >= 360){
        rotate_segundo = 0
    }
    if(rotate_minuto >= 360){
        rotate_minuto = 0
    }
    if(rotate_hora >= 360){
        rotate_hora = 0
    }
}, 100);
