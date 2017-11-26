import $ from 'jquery'
import validateInputs from './validateInputs'

const init = () => {
    addEventListener()    
}

const addEventListener = () => {
    $('#button').click(() => validateInputs())
}

export default init