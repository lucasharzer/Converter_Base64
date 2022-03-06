const fs = require("fs").promises;
require("dotenv")


async function listarArquivos(diretorio, arquivos) {
    if (!arquivos)
        arquivos = []

    let lista = await fs.readdir(diretorio)
    console.log(lista)

    for(let i in lista) {
        console.log(lista[i])

        if (lista[i].includes("certidao1")) {
            fs.unlink(process.env.PATH_IMAGES + `\\${lista[i]}`)
            console.log('deletou')
        }
    }
}

listarArquivos("../tests")