export function getIdFromUrlField (url) {
    const regEx = /\/([0-9]*)\/$/ 
    return url.match(regEx)[1]
}