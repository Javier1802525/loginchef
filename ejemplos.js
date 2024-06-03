const users = {};

function showRegisterForm() {
    document.getElementById('loginForm').classList.add('hidden');
    document.getElementById('registerForm').classList.remove('hidden');
}

function showLoginForm() {
    document.getElementById('registerForm').classList.add('hidden');
    document.getElementById('loginForm').classList.remove('hidden');
}

function showMainContent() {
    document.getElementById('loginForm').classList.add('hidden');
    document.getElementById('registerForm').classList.add('hidden');
    document.getElementById('mainContent').classList.remove('hidden');
}

function register() {
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const phone = document.getElementById('phone').value;
    const birthdate = document.getElementById('birthdate').value;
    const password = document.getElementById('registerPassword').value;

    const year = new Date(birthdate).getFullYear();
    const user = firstName.slice(0, 2) + lastName.slice(0, 3) + year + phone.slice(0, 3);

    users[user] = password;
    alert(`Usuario creado con éxito: ${user}`);

    showLoginForm();
    return false;
}

function login() {
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;

    if (users[username] && users[username] === password) {
        alert('Inicio de sesión exitoso');
        showMainContent();
    } else {
        alert('Usuario o contraseña incorrectos');
    }

    return false;
}