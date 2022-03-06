function isBase64Img(string) {
    const str = string.toString()

    if (str.indexOf("data:image/") !== -1 && str.indexOf(";base64,/") !== -1) {
        return true
    }else{
        return false
    }
}

console.log(isBase64Img(process.env.PATH_IMAGES))
