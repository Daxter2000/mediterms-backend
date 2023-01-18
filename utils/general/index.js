
const exclude = (object = {}, keys = []) => {
    keys.forEach(key => {
        delete object[key]
    })
    console.log(object)
    return object
}


module.exports = {exclude}