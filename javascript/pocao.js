async function loadAll(){
    const urlParams = new URLSearchParams(window.location.search)
    const idParam = urlParams.get('id'); 
    
    if(!idParam){
        console.log('ID não encontrado na URL')
        return
    }

    const baseUrl = 'https://wizard-world-api.herokuapp.com/Elixirs';
    const url = `${baseUrl}/${idParam}`;

    fetch(url)
        .then((response) => {
            if (!response.ok) {
                throw new Error('Erro ao receber os dados')
            }
            return response.json()
        })
        .then((data) => {
            //console.log(data)
            renderizarPocao(data)
        })
        .catch((err) => console.log(err))
}
loadAll()

const renderizarPocao = (item) => {
    const container = document.querySelector(".container")
        const divPocao = document.createElement('div')

        let ingredientesHTML = '';
        let sideEffectsHTML = '';
        let inventorsHTML = '';
        let effectHTML = '';


        
        if (item.effect.length > 0) {
            effectHTML += `<h3 class="pequenotitu" >Efeito:</h3><p>${item.effect}</p>`;
        } else {
            effectHTML += '<h3 class="pequenotitu" >Efeito:</h3><p>desconhecido</p>';
        }

        if (item.inventors.length > 0) {
            inventorsHTML += `<h3 class="pequenotitu" >Inventor:${item.inventors}</h3>`;
        } else {
            inventorsHTML += '<h3 class="pequenotitu" >Inventor:</h3><p>desconhecido</p>';
    
        }

    if (item.ingredients.length > 0) {
        ingredientesHTML += '<h3 class="pequenotitu">Ingredientes:</h3>';
        for (let i = 0; i < item.ingredients.length; i++) {
            ingredientesHTML += `<p>${item.ingredients[i].name}</p>`;
        }
    } else {
        ingredientesHTML += '<p>Ingredientes desconhecidos</p>';
    }

    if (item.sideEffects) {
        sideEffectsHTML += `<h3 class="pequenotitu" >Possível efeito colateral:</h3><p>${item.sideEffects}<p/>`;
    } else {
        sideEffectsHTML += '<p class="pequenotitu" >Possível efeito colateral desconhecido</p>';
    }

    divPocao.innerHTML = `
    
        <h1 class="grandetitu">${item.name}</h1>
        ${effectHTML}
        ${ingredientesHTML}
        ${sideEffectsHTML}
        ${inventorsHTML}

    `;
        divPocao.classList.add('pocao')
        container.appendChild(divPocao)
    ;
}
