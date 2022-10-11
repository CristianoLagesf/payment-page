export const validatePayment = (value) => {
    const regName = /^[a-zA-Z]+ [a-zA-Z]+$/;
    const erros = {

    };
    if (!regName.test(value.name)) {
        erros.name = 'First Name and Last Name are required'
    }

    if (isNaN(value.number)) {
        erros.number = 'Insert only numbers'
    } else if (value.number < 16) {
        erros.number = 'You need to inform 16 numbers'
    } else if (value.number > 16) {
        erros.number = 'You need to inform 16 digit'
    }
    return erros
}


