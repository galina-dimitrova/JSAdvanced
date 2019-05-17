function gcd(first, second) {
    if (second === 0) {
        return first
    }
    return gcd(second, first%second)
}

console.log(gcd(252, 105))