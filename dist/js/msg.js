let socket=io()

socket.on('onuuid',()=>{document.querySelector('.ct_bx_message_adm2').style.display='flex'
document.querySelector('.audio_wh').play()
document.querySelector('.ct_bx_message_adm').style.display='none'
})
socket.on('oDcancel',()=>{document.querySelector('.ct_bx_message_adm2').style.display='flex'
document.querySelector('.audio_wh').play()
document.querySelector('.ct_bx_message_adm').style.display='none'
})

socket.on('msgOrder',()=>{document.querySelector('.ct_bx_message_adm').style.display='flex'
document.querySelector('.audio_wh').play()
document.querySelector('.ct_bx_message_adm2').style.display='none'
})