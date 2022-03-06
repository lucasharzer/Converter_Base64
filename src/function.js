const Tipo_Imagem = require("./substring");


function Base64ToImage(base64) {
    var ext = Tipo_Imagem(base64, ";")
    var base64Data = base64.replace(`data:image/${ext};base64,`, ""); 

    require("fs").writeFile(`C:\\Users\\Lucas\\Documents\\GitHub\\base64ToImage\\images\\image.${ext}`, base64Data, 'base64', function(err) {
        console.log(err)
    })
}

module.exports = Base64ToImage;
