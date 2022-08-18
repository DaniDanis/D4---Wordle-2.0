let linha = 1
// linha para fazer uma query e localizar a linha necessaria. 
// OBS: A crase serve para escrever codigo no medio da string
let elLinha = document.getElementById(`linha${linha}`)
let elItens = elLinha.querySelectorAll('.caixinha')
var caixinha = 0
var palavra = []
const palavraDoDia = 'AMORA'

// inserindo uma informação no meu HTML
// elItem1.innerHTML = 'A'
// Trocando a classe do meu elemento
// elItem1.classList.add('preenchendo')

const ouvinteDeTeclas = (event) => {
    let tecla = event.key.toUpperCase();    
    const alfabeto = [
        'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'I', 'L',
        'M','N','O','P,','Q','R','S','T','U','U','V','W','X','Y','Z'
    ];
// Pula para a proxima linha, após ter 5 caracteres naquela linha, e chama a função para validar os dados 
        if (tecla == 'ENTER' && caixinha == 4 && linha <= 6){
            if (linha < 6){
                validaPalavra(palavra)
                linha += 1
                elLinha = document.getElementById(`linha${linha}`)
                elItens = elLinha.querySelectorAll('.caixinha')
                caixinha = 0  
                palavra = []              
            }
            else if (linha == 6){
                validaPalavra(palavra)
            }
        }
// Apaga um caractere das caixinha
        if (tecla == 'BACKSPACE'){
            palavra.pop()
            elItens[caixinha].innerHTML = ''
            elItens[caixinha].classList.add('vazio')
            if (caixinha > 0){
                caixinha -= 1}
        } 
// Insere um caractere na caixinha
        if (alfabeto.includes(tecla)) {
            if (caixinha < 5){        
            elItens[caixinha].innerHTML = tecla
                if (caixinha < 4){
                    palavra.push(tecla)
                    elItens[caixinha].classList.add('preenchendo')
                    elItens[caixinha].classList.remove('vazia')
                    caixinha += 1
                } else if (caixinha == 4){
                    palavra[caixinha] = tecla
                    elItens[caixinha].classList.add('preenchendo')
                    elItens[caixinha].classList.remove('vazia')
                }
                }
        }
    
    
}

// Valida se a letra esta na posição certa e se a letra existe na palavra
const validaPalavra = (palavra) => {
    var validaPalavraDoDia = palavraDoDia
    palavra.join('')
    if (palavra.join('') == palavraDoDia) {
        caixinha = 0
        for (n of elItens){
            n.classList.add('verde')
            n.classList.remove('vazia', 'preenchendo')
        }
    }
// Percorre a palavraDoDia considerando o seu indice.
    for (indice in palavraDoDia){     
// Compara letra por letra da palavraDoDia com a palavra digita pelo usuario utilizando seu indice como "localizador"
        if (validaPalavraDoDia.indexOf(palavra[indice]) == indice){
            validaPalavraDoDia = validaPalavraDoDia.replace(palavra[indice], '*')
            palavra[indice] = '*'        
            elItens[indice].classList.add('verde')
            elItens[indice].classList.remove('vazia', 'preenchendo')
            console.log(palavra)
        } else if (validaPalavraDoDia.indexOf(palavra[indice]) < palavra.indexOf[validaPalavraDoDia]) {          

        }
    }
}

document.body.addEventListener('keydown', ouvinteDeTeclas)




// SO VOU UTILIZAR NO MATCH
// const regex = new RegExp(palavra.join('')[indice], "gi")   

