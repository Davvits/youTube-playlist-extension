export default function (obj) {
    const array = []
    for (const iterator of obj) {
       array.pop(iterator)
    }
    return array
}