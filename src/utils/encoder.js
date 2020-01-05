/**
 * ROT13 implementation, should be replaced by a better cypher/encoding solution
 * https://codereview.stackexchange.com/a/132140
 */
function rot13(str) {
    return str.split('').map(x => rot13.lookup[x] || x).join('')
}
rot13.input  = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('')
rot13.output = 'NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm'.split('')
rot13.lookup = rot13.input.reduce((m,k,i) => Object.assign(m, {[k]: rot13.output[i]}), {})

export default rot13;