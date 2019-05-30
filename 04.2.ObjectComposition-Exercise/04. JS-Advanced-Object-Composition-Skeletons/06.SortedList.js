function sortedList() {
    let colllection = (() => {
        let numbers = [];
        let size = 0;

        const add = function (element) {
            numbers.push(element);
            numbers.sort((a,b) => a-b)
            this.size++;
        }

        const remove = function (index) {
            if (index>=0&&index<numbers.length) {
                numbers.splice(index,1);
                this.size--;
            }          
        }

        const get = function (index) {
            if (index>=0&&index<numbers.length) {
                return numbers[index];
            }
        }
        return{
            add,
            remove,
            get,
            size
        }
    })()
    return colllection;
}