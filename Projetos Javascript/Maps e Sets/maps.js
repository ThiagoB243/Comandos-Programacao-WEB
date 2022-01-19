function getAdmins(map) {

    let admins = [];

    for ([key, value] of map) {
        if (value == 'admin') {
            admins.push(key);
        }
    }
    return admins;
}
const usuarios = new Map();

usuarios.set('Thiago', 'admin');
usuarios.set('Carlos', 'user');
usuarios.set('Nala', 'user');

console.log(getAdmins(usuarios));