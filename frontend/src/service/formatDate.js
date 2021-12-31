export function formatDate(str) {
    if (str === undefined) return undefined
    let date = new Date(str)
    return `${date.getMonth()}/${date.getFullYear()}`
}