let solution = (function () {
    const add = ([x1,y1],[x2,y2]) => {
        return [x1+x2,y1+y2];
    }
    const multiply = ([x1,y1], scalar) => {
        return [x1*scalar,y1*scalar];
    }
    const length=([x1,y1]) => {
        return Math.sqrt(x1**2+y1**2)
    }
    const dot=([x1,y1],[x2,y2]) => {
        return x1*x2+y1*y2
    }
    const cross=([x1,y1],[x2,y2]) => {
        return x1*y2-y1*x2
    }

    return {
        add,
        multiply,
        length,
        dot,
        cross
    }
})()

console.log(solution.dot([1, 0], [0, -1]))