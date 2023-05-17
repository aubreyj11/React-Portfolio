export function validateUsername(input) {
    return input.length > 0;
}

export function validateMessage(input) {
    return input.length > 0;
}

export function validateEmail(email) {
    const expression = /^([a-z0-9_.-]+)@([\da-z.-]+)\.([a-z.]{2,6})$/;
    return expression.test(String(email).toLowerCase());
}