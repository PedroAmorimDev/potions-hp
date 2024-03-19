const form = document.querySelector("#formularioEntrar");

form.addEventListener("submit", function validacao(event) {
    event.preventDefault();

    function carregamento() {
        const carregamentonatela = document.createElement('div');
        carregamentonatela.id = 'carregamentonatela';
        carregamentonatela.style.position = 'fixed';
        carregamentonatela.style.left = '0';
        carregamentonatela.style.top = '0';
        carregamentonatela.style.width = '100%';
        carregamentonatela.style.height = '100%';
        carregamentonatela.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
        carregamentonatela.style.display = 'flex';
        carregamentonatela.style.justifyContent = 'center';
        carregamentonatela.style.alignItems = 'center';
        carregamentonatela.innerHTML = '<h1>Carregando...</h1>';
        carregamentonatela.style.color = 'white';
        document.body.appendChild(carregamentonatela);
    }
    function hidecarregamentonatela() {
        const carregamentonatela = document.getElementById('carregamentonatela');
        if (carregamentonatela) {
            document.body.removeChild(carregamentonatela);
        }
    }

    let hasErrors = false;
    const emailentrar = document.getElementById('emaillogin').value;
    const senhaentrar = document.getElementById('senhalogin').value;
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const telefoneRegex = /\+\d+[ ]?\(?\d+\)?[ ]?\d+[-. ]?\d+/;

if (emailRegex.test(emailentrar)) {
    document.getElementById('error-required-emailvalidoentrar').style.display = "none";
    document.getElementById('error-required-telefonevalidoentrar').style.display = "none";
    document.getElementById('sucessoLOGIN').style.display = "none";
} else if (telefoneRegex.test(emailentrar)) {
    document.getElementById('error-required-telefonevalidoentrar').style.display = "none";
    document.getElementById('error-required-emailvalidoentrar').style.display = "none";
    document.getElementById('sucessoLOGIN').style.display = "none";
} else {
    hasErrors = true;
    if (emailentrar.includes('@')) {
        document.getElementById('error-required-emailvalidoentrar').style.display = "block";
        document.getElementById('error-required-telefonevalidoentrar').style.display = "none";

    } else {
        document.getElementById('error-required-telefonevalidoentrar').style.display = "block";
        document.getElementById('error-required-emailvalidoentrar').style.display = "none";
    }
}



    if (!emailentrar) {
        document.getElementById('error-required-emaillogin').style.display = "block";
        hasErrors = true;
    } else {
        document.getElementById('error-required-emaillogin').style.display = "none";
    }

    if (!senhaentrar) {
        document.getElementById('error-required-senhalogin').style.display = "block";
        hasErrors = true;
    } else {
        document.getElementById('error-required-senhalogin').style.display = "none";
    }

    if (senhaentrar.length < 8) {
        document.getElementById('error-required-senhalogin8').style.display = "block";
        hasErrors = true;
    } else {
        document.getElementById('error-required-senhalogin8').style.display = "none";
    }

    if (!hasErrors) {
        document.getElementById('sucessoLOGIN').style.display = "block";
    }

    if (!hasErrors) {
        carregamento();
        setTimeout(function() {
            window.location.href = './pages/home.html';
        }, 2500);
    }

})
