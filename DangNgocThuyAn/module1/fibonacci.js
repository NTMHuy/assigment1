/**
 * Tinh so Fibonacci
 * @param {number} n - so thu n
 * @param {boolean} flag - true: de quy, false: vong lap
 */
function Fibonacci(n, flag) {
    if (flag === true) {
        if (n <= 1) return n;
        return Fibonacci(n - 1, true) + Fibonacci(n - 2, true);
    }
}

module.exports = { Fibonacci };