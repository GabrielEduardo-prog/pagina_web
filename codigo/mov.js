let contador = 0;
const contadorCarrinho = document.getElementById('contador-carrinho');

var adicionados = Array.from(document.querySelectorAll('.carrinho')).slice(0, 8);
adicionados.forEach(adicionado => {
    adicionado.addEventListener('click', function() {
        adicionado.innerText = 'adicionado';
        adicionado.style.backgroundColor = 'green';
        contador++;
        contadorCarrinho.innerText = contador;

        setTimeout(function () {
            adicionado.innerText = 'adicionar novamente';
            adicionado.style.backgroundColor = '#426b9b';
        }, 2000);
    });
});