function Tipo_Imagem(frase, separador) {
    string = frase.split(separador, 1)[0]
    tipo = string.substring(11)
    console.log(tipo)
    return tipo
}

module.exports = Tipo_Imagem;