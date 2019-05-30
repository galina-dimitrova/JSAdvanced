// (function solve(){
    String.prototype.ensureStart = function (str){
        if (!this.startsWith(str)) { 
            return str+this;
        } 
        return this.toString();   
    }
    String.prototype.ensureEnd = function(str) {
        if (!this.includes(str)) {
            return this+str;
        }   
        return this.toString();       
    }
    String.prototype.isEmpty = function(){
        if (this.length === 0) {
            return true
        } else {
            return false
        }
    }
    String.prototype.truncate = function (n){
        if (this.length<=n) {
            return this.toString();
        } else if (this.length>n) {
            if (n<4) {
                return '.'.repeat(n);
            } else {
                let spaceIgx = this.lastIndexOf(' ');
                if (spaceIgx === -1) {
                    return this.substr(0,n-3)+'...'
                } else {
                    let str = this.substr(0,spaceIgx)
                    while (spaceIgx>n-3) {
                        str = str.substr(0,spaceIgx);
                        spaceIgx = str.lastIndexOf(' ');
                    }
                    return str.substr(0,spaceIgx)+'...' // if spaceIndx<n-3
                }
            }
        }
    }
    String.format = function (string, ...args){
        for (let i = 0; i < args.length; i++) {
            string = string.replace(`{${i}}`, args[i]);           
        }
        return string
    }
// }());

var testString = 'quick brown fox jumps over the lazy dog';
testString = testString.ensureStart('the ')
console.log(testString);

let str = 'my string'
str = str.ensureStart('my')
console.log(str)
str = str.ensureStart('hello ')
console.log(str)
str = str.truncate(16)
console.log(str)
str = str.truncate(14)
console.log(str)
str = str.truncate(8)
console.log(str)
str = str.truncate(4)
console.log(str)
str = str.truncate(2)
console.log(str)
str = String.format('The {0} {1} fox',
  'quick', 'brown');
  console.log(str)
str = String.format('jumps {0} {1}',
  'dog');
  console.log(str)
