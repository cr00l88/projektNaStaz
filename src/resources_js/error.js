import $ from 'jquery'
import contraints from './contraints'

export const flash = (id, msg) => {
    if(id === 'main') {
        let error = `<div class="errormsg">${msg}</div>`
        return $('#holder').append(error)
    }
    $(`#${id}`).addClass('error').parent().append(`<div class="errormsg">${msg}</div>`)
}
export const clear = () => {
    $('#holder').children('.errormsg').remove()
    for(let id in contraints) { clearEl(id); }
}

const clearEl = (id) => {
    $(`#${id}`).removeClass('error').parent().children('.errormsg').remove()
}