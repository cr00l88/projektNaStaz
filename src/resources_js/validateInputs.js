import constraints from './contraints.js'
import { flash, clear } from './error'
import $ from 'jquery'
import validate from 'validate.js'

let errorTimeout;

export default () => {
    let values = getInputsValues()
    clear()
    if(!values) {
        return flash('main', 'All fields are required')
    }
    let validateResult = validate(values, constraints)
    if(validateResult) {
        printErrors(validateResult)
    } else {
        console.log('Formularz gotowy do wysłania')
    }
}

const getInputsValues = () => {
    let result = {};
    for(let id in constraints) {
        let el = document.getElementById(id)
        if(!el) {
            result = false
            break
        }
        if(el.value.trim()) {
            result[id] = el.value;
        }
    }
    return result
}

const printErrors = (errors) => {
    for(let err in errors) {
        flash(err, errors[err])
    }
    clearTimeout(errorTimeout)
    errorTimeout = setTimeout(() => { clear() }, 5000)
}