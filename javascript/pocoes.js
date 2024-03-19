document.addEventListener('DOMContentLoaded', () => {
    const url = `https://wizard-world-api.herokuapp.com/Elixirs`
    

    fetch(url)
        .then((response) => {
            if (!response.ok) {
                throw new Error('Erro ao receber os dados')
            }
            return response.json()
        })
        .then((data) => {
            renderizarPocoes(data)
        })
        .catch((err) => console.log(err))
})


function renderizarPocoes(items) {
    const container = document.getElementById("p-container")
    items.forEach((item) => {
        const divPersonagens = document.createElement('div')
        divPersonagens.innerHTML = `
        <div class="p-caixa">
            <div>
                <h4>Poção ${item.name}</h4>
                <h5>Efeito da poção: ${item.effect}</h5>
                <a class="informacoes" href="./pocao.html?id=${item.id}">Clique aqui para saber mais</a>

            </div>
        </div>`
        divPersonagens.classList.add('p')
        container.appendChild(divPersonagens)
    });
    
}

document.addEventListener('DOMContentLoaded', () => {
    const url = `https://wizard-world-api.herokuapp.com/Wizards/f86280b1-faa6-44fd-b8a9-f7a4556f8d20`
    

    fetch(url)
        .then((response) => {
            if (!response.ok) {
                throw new Error('Erro ao receber os dados')
            }
            return response.json()
        })
        .then((data) => {
        const container = document.getElementById("tituloeli")
        const divPersonagens = document.createElement('div')
        divPersonagens.innerHTML =` <div class="tituloeli">
        <div>
        <h4 class = "titulo">Pergaminho de poções de ${data.firstName} ${data.lastName}.</h4>
        </div>
        </div>`
        divPersonagens.classList.add('p')
        container.appendChild(divPersonagens)

        })
        .catch((err) => console.log(err))
})

