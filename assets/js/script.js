//* Borde para la imagen
const imagen = document.querySelector('#imagen');

imagen.addEventListener('click', () => {
    imagen.classList.toggle('borde-rojo');
});

//* Contar los stickers
document.getElementById('calcular').addEventListener('click', () => {
    const sticker1Value = document.querySelector('#sticker1').value;
    const sticker2Value = document.querySelector('#sticker2').value;
    const sticker3Value = document.querySelector('#sticker3').value;

    const sticker1 = parseInt(sticker1Value);
    const sticker2 = parseInt(sticker2Value);
    const sticker3 = parseInt(sticker3Value);

    const resultado = document.querySelector('#resultado');
    const mensajeError = '';

    if (isNaN(sticker1)) { sticker1 = 0; mensajeError += 'Sticker 1 no es válido. '; }
    if (isNaN(sticker2)) { sticker2 = 0; mensajeError += 'Sticker 2 no es válido. '; }
    if (isNaN(sticker3)) { sticker3 = 0; mensajeError += 'Sticker 3 no es válido. '; }

    const totalStickers = sticker1 + sticker2 + sticker3;

    if (totalStickers <= 10) {
        resultado.textContent = `Llevas ${totalStickers} stickers.`;
    } else {
        resultado.textContent = 'Llevas demasiados stickers.';
    }

    if (mensajeError) {
        resultado.textContent += ` Nota: ${mensajeError}`;
    }
});

//* Verificación de password
document.querySelector('#verificar').addEventListener('click', () => {
    const select1 = document.querySelector('#select1').value;
    const select2 = document.querySelector('#select2').value;
    const select3 = document.querySelector('#select3').value;

    const password = `${select1}${select2}${select3}`;
    const mensajePassword = document.querySelector('#mensaje-password');

    if (password === '911') {
        mensajePassword.textContent = 'Password 1 correcto';
    } else if (password === '714') {
        mensajePassword.textContent = 'Password 2 correcto';
    } else {
        mensajePassword.textContent = 'Password incorrecto';
    }
});
