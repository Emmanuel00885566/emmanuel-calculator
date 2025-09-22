export function capitalizeName(name) {
    return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
}

export function fullName(firstName, lastName, middlename) {
    return `${capitalizeName(firstName)} ${capitalizeName(lastName)} ${capitalizeName(middlename)}`;
}