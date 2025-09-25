const mostrarInfoEnlaces = () => {
    const enlaces = document.getElementsByTagName('a');
    const cantidad = enlaces.length;
    let primero = cantidad > 0 ? enlaces[0].href : 'null';
    let ultimo = cantidad > 0 ? enlaces[cantidad - 1].href : 'null';
    alert(`Número de enlaces: ${cantidad}\nPrimer enlace: ${primero}\nÚltimo enlace: ${ultimo}`);
}

document.getElementById('btnMostrarEnlaces').onclick = mostrarInfoEnlaces;
