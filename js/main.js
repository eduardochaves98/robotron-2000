const control = document.querySelectorAll("[data-controle]");
const estatisticas = document.querySelectorAll("[data-estatistica]");
const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}


control.forEach((e) => {
    e.addEventListener("click", (event) => {
        const elementoContador = event.target.parentNode.querySelector('[data-contador]')
        manipulaDados(event.target.dataset.controle, elementoContador)
        atualizaEstatistica(event.target.dataset.peca, event.target.dataset.controle)
    })
})

function manipulaDados(operation, element){
    if(operation === "-"){
        element.value > 0 ? element.value-- : alert("Já está no minimo");
    }else{
        element.value++;
    }
}
function atualizaEstatistica(peca, operation) {
    if(operation === "-") {
        estatisticas.forEach((e) => {
            e.textContent = parseInt(e.textContent) - pecas[peca][e.dataset.estatistica]
        })
    }else{
        estatisticas.forEach((e) => {
            e.textContent = parseInt(e.textContent) + pecas[peca][e.dataset.estatistica]
        })
    }
}
