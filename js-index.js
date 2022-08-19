let linha = 1
// linha para fazer uma query e localizar a linha necessaria. 
// OBS: A crase serve para escrever codigo no medio da string
let elLinha = document.getElementById(`linha${linha}`)
let elItens = elLinha.querySelectorAll('.caixinha')
var caixinha = 0
var palavra = []
const palavraDoDia = 'OSSOS'

// inserindo uma informação no meu HTML
// elItem1.innerHTML = 'A'
// Trocando a classe do meu elemento
// elItem1.classList.add('preenchendo')

const ouvinteDeTeclas = (event) => {
    let tecla = event.key.toUpperCase();
    const alfabeto = [
        'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'I', 'L',
        'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'U', 'V', 'W', 'X', 'Y', 'Z'
    ];
    // Insere um caractere na caixinha
    if (alfabeto.includes(tecla)) {
        if (palavra.length < 5) {
            elItens[caixinha].innerHTML = tecla     
            palavra.push(tecla)       
            pintaPreenchendo(caixinha)
            if (palavra.length < 5) {
                caixinha += 1                
            } else if (palavra.lenght == 5) {
                palavra[caixinha] = tecla
                pintaPreenchendo(caixinha)
                console.log('aqui')
            }
        }
    }
    // Pula para a proxima linha, após ter 5 caracteres naquela linha, e chama a função para validar os dados 
    if (tecla == 'ENTER' && palavra.length == 5 && linha <= 6) {
        if (linha < 6) {
            validaPalavra(palavra)
            linha += 1
            elLinha = document.getElementById(`linha${linha}`)
            elItens = elLinha.querySelectorAll('.caixinha')
            caixinha = 0
            palavra = []
        }
        else if (linha == 6) {
            validaPalavra(palavra)
        }
    }
    // Apaga um caractere das caixinha
    if (tecla == 'BACKSPACE') {
        console.log(caixinha)
        palavra.pop()
        elItens[caixinha].innerHTML = ''
        pintavazia(caixinha)
        if (caixinha > 0) {
            caixinha -= 1
        }
    }
}

// Valida se a letra esta na posição certa e se a letra existe na palavra
const validaPalavra = (palavra) => {
    var validaPalavraDoDia = palavraDoDia
    if (palavra.join('') == palavraDoDia) {
        caixinha = 0
        for (n of elItens) {
            n.classList.add('verde')
            n.classList.remove('vazia', 'preenchendo')
        }
    }
    // Percorre a palavraDoDia considerando o seu indice.
    palavra = palavra.join('')
    for (indice in palavraDoDia) {
     //debugger
        const regex = new RegExp(palavra[indice], "gi")
        // Compara letra por letra da palavraDoDia com a palavra digita pelo usuario utilizando seu indice como "localizador"
        if (validaPalavraDoDia.indexOf(palavra[indice]) == indice) {
            validaPalavraDoDia = validaPalavraDoDia.replace(palavra[indice], '*')
            palavra = palavra.replace(palavra[indice], '*')
            pintaVerde(indice)
        } else if (!validaPalavraDoDia.includes(palavra[indice])) {
            elItens[indice].classList.add('cinza')
            elItens[indice].classList.remove('vazia', 'preenchendo')
        } else if (palavra.match(regex).length > validaPalavraDoDia.match(regex).length) {
            pintaCinza(indice)
            palavra = palavra.replace(palavra[indice], '*')
        } else if (
            (validaPalavraDoDia.indexOf(palavra[indice]) < palavra.indexOf([palavra[indice]]))
            ||
            ((validaPalavraDoDia.includes(palavra[indice]) && (palavra.match(regex).length >= validaPalavraDoDia.match(regex).length)))
            ||
            (validaPalavraDoDia.indexOf(palavra[indice]) > palavra.indexOf([palavra[indice]]))
        ) {
            console.log(indice)
            if (palavra[indice]==palavraDoDia[indice]){
                validaPalavraDoDia = validaPalavraDoDia.replace(palavra[indice], '*')
                palavra = palavra.replace(palavra[indice], '*')
                pintaVerde(indice)
            } else {
                validaPalavraDoDia = validaPalavraDoDia.replace(palavra[indice], '*')
                palavra = palavra.replace(palavra[indice], '*')
                pintaAmarelo(indice)
            }       
            
        }
    }
}

document.body.addEventListener('keydown', ouvinteDeTeclas)
//(validaPalavraDoDia.indexOf(palavra[indice]) < palavra.indexOf([palavra[indice]]))
// SO VOU UTILIZAR NO MATCH
// const regex = new RegExp(palavra.join('')[indice], "gi")   


const pintaAmarelo = (indice) => {
    elItens[indice].classList.add('amarelo')
    elItens[indice].classList.remove('vazia', 'preenchendo')
}

const pintaVerde = (indice) => {
    elItens[indice].classList.add('verde')
    elItens[indice].classList.remove('vazia', 'preenchendo')
}

const pintaCinza = (indice) => {
    elItens[indice].classList.add('cinza')
    elItens[indice].classList.remove('vazia', 'preenchendo')
}

const pintaPreenchendo = (caixinha) => {
    elItens[caixinha].classList.add('preenchendo')
    elItens[caixinha].classList.remove('vazia')
}

const pintavazia = (caixinha) => {
    elItens[caixinha].classList.add('vazia')
    elItens[caixinha].classList.remove('preenchendo')
}