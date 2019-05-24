let assert = require('chai').assert;

class StringBuilder {
    constructor(string) {
      if (string !== undefined) {
        StringBuilder._vrfyParam(string);
        this._stringArray = Array.from(string);
      } else {
        this._stringArray = [];
      }
    }
  
    append(string) {
      StringBuilder._vrfyParam(string);
      for(let i = 0; i < string.length; i++) {
        this._stringArray.push(string[i]);
      }
    }
  
    prepend(string) {
      StringBuilder._vrfyParam(string);
      for(let i = string.length - 1; i >= 0; i--) {
        this._stringArray.unshift(string[i]);
      }
    }
  
    insertAt(string, startIndex) {
      StringBuilder._vrfyParam(string);
      this._stringArray.splice(startIndex, 0, ...string);
    }
  
    remove(startIndex, length) {
      this._stringArray.splice(startIndex, length);
    }
  
    static _vrfyParam(param) {
      if (typeof param !== 'string') throw new TypeError('Argument must be string');
    }
  
    toString() {
      return this._stringArray.join('');
    }
  }
  
  describe("StringBuilder", function() {
      let sb;
      beforeEach(function () {
          sb = new StringBuilder()
      });
      describe('constructor tests', function(){
        it("should vrfyParam take string", function() {
            sb = new StringBuilder('Hello')
            assert.equal(sb._stringArray.join(''),'Hello')
        });
        it("should vrfyParam take empty string", function() { //??
            assert.equal(sb._stringArray.join(''),'')
        });
        it("should vrfyParam no take number", function() { //??
            let errorFunc = () =>{
                sb.prepend(5);
            }
            assert.throw(errorFunc, TypeError)
        });
      })
      describe('toString test', function(){
        it("should return string", function() {
            sb = new StringBuilder('Hello')
            assert.equal(sb.toString('Hello'),'Hello')
        });
      })
      describe('append test', function(){
        it("should return string whit added new string at the end", function() {
            sb = new StringBuilder('Hello');
            sb.append(' Tester')
            assert.equal(sb.toString(),'Hello Tester')
        });
        it("should return Type Error when append number", function() {    
            let errorFunc = () =>{
                sb = new StringBuilder('Hello');
                sb.append(5)
            }
            assert.throw(errorFunc,TypeError)
        });
      })
      describe('prepend test', function(){
        it("should return string whit added new string to the begin", function() {
            sb = new StringBuilder('Hello');
            sb.prepend('Tester, ')
            assert.equal(sb.toString(),'Tester, Hello')
        });
        it("should return Type Error when append number", function() {    
            let errorFunc = () =>{
                sb = new StringBuilder('Hello');
                sb.prepend(5)
            }
            assert.throw(errorFunc,TypeError)
        });
      })
      describe('Insert test', function(){
        it("should return string whit added new string at the given index", function() {
            sb = new StringBuilder('Hello Tester');
            sb.insertAt('my ',6)
            assert.equal(sb.toString(),'Hello my Tester')
        });
        
        it("should return Type Error when append number", function() {    
            let errorFunc = () =>{
                sb = new StringBuilder('Hello Tester');
            sb.insertAt(5,6)
            }
            assert.throw(errorFunc,TypeError)
        });
      })
      describe('remove test', function(){
        it("should return string whith removed string", function() {
            sb = new StringBuilder('Hello Tester');
            sb.remove(10, 2)
            assert.equal(sb.toString(),'Hello Test')
        });
        it("should return string whith removed string", function() {
            sb = new StringBuilder('Hello Tester');
            sb.remove(11, 2)
            assert.equal(sb.toString(),'Hello Teste')
        });
      })
      describe('check if functions are attached to proto', function(){
        it("check if functions are attached to proto", function() {
            assert.isTrue(typeof StringBuilder.prototype.append === 'function');
            assert.isTrue(typeof StringBuilder.prototype.prepend === 'function');
            assert.isTrue(typeof StringBuilder.prototype.insertAt === 'function');
            assert.isTrue(typeof StringBuilder.prototype.remove === 'function');
            assert.isTrue(typeof StringBuilder.prototype.toString === 'function');


        });
        
      })
});
