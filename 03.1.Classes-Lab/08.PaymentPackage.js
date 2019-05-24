let assert = require('chai').assert;

class PaymentPackage {
    constructor(name, value) {
      this.name = name;
      this.value = value;
      this.VAT = 20;      // Default value    
      this.active = true; // Default value
    }
  
    get name() {
      return this._name;
    }
  
    set name(newValue) {
      if (typeof newValue !== 'string') {
        throw new Error('Name must be a non-empty string');
      }
      if (newValue.length === 0) {
        throw new Error('Name must be a non-empty string');
      }
      this._name = newValue;
    }
  
    get value() {
      return this._value;
    }
  
    set value(newValue) {
      if (typeof newValue !== 'number') {
        throw new Error('Value must be a non-negative number');
      }
      if (newValue < 0) {
        throw new Error('Value must be a non-negative number');
      }
      this._value = newValue;
    }
  
    get VAT() {
      return this._VAT;
    }
  
    set VAT(newValue) {
      if (typeof newValue !== 'number') {
        throw new Error('VAT must be a non-negative number');
      }
      if (newValue < 0) {
        throw new Error('VAT must be a non-negative number');
      }
      this._VAT = newValue;
    }
  
    get active() {
      return this._active;
    }
  
    set active(newValue) {
      if (typeof newValue !== 'boolean') {
        throw new Error('Active status must be a boolean');
      }
      this._active = newValue;
    }
  
    toString() {
      const output = [
        `Package: ${this.name}` + (this.active === false ? ' (inactive)' : ''),
        `- Value (excl. VAT): ${this.value}`,
        `- Value (VAT ${this.VAT}%): ${this.value * (1 + this.VAT / 100)}`
      ];
      return output.join('\n');
    }
  }

  describe("Payment Package", function() {
    let pp;
    beforeEach(function () {
        pp = new PaymentPackage('Cars', 100)
    });
    describe('constructor tests', function(){
      it("should inicialize", function() {
          
          assert.equal(`${pp.name} ${pp.value}`, 'Cars 100')
      });
      it("should vrfyParam no take empty string", function() { //??
        let errorFunc = () =>{
            pp.name = ''
        }
        assert.throw(errorFunc, Error)      });
      it("should vrfyParam no take number", function() { //??
          let errorFunc = () =>{
              pp.value = -5
          }
          assert.throw(errorFunc, Error)
      });
    })
    describe('geters tests', function(){
        it("should get name", function() {
            
            assert.equal(`${pp.name}`, 'Cars')
        });
        it("should get value", function() {
            
            assert.equal(`${pp.value}`, '100')
        });
        it("should get VAT", function() {
            
            assert.equal(`${pp.VAT}`, 20)
        });
        it("should get active", function() {
            
            assert.equal(`${pp.active}`, 'true')
        });

      })
      describe('setters tests', function(){
        it("should set name", function() {
            pp.name = 'Only'
            assert.equal(`${pp.name}`, 'Only')
        });
        it("should trow error for invalid name(not string)", function() {
            let errorFunc = () =>{
                pp.name = 5
            }
            assert.throw(errorFunc, Error)
        });
        it("should trow error for invalid name(empty string)", function() {
            let errorFunc = () =>{
                pp.name = '';
            }
            assert.throw(errorFunc, Error)
        });
        it("should set value", function() {
            pp.value = 1000
            assert.equal(`${pp.value}`, '1000')
        });
        it("should trow error for invalid value(negative number)", function() {
            let errorFunc = () =>{
                pp.value = -5;
            }
            assert.throw(errorFunc, Error)
        });
        it("should trow error for invalid value(not number)", function() {
            let errorFunc = () =>{
                pp.value = 'hi';
            }
            assert.throw(errorFunc, Error)
        });
        it("should set VAT", function() {
            pp.VAT = 50
            assert.equal(`${pp.VAT}`, 50)
        });
        it("should trow error for invalid VAT(not number)", function() {
            let errorFunc = () =>{
                pp.VAT = 'hi';
            }
            assert.throw(errorFunc, Error)
        });
        it("should trow error for invalid VAT(negative number)", function() {
            let errorFunc = () =>{
                pp.VAT = -5;
            }
            assert.throw(errorFunc, Error)
        });
        it("should set active", function() {
            pp.active = false;
            assert.equal(`${pp.active}`, 'false')
        });
        it("should trow error for invalid active(not bolean)", function() {
            let errorFunc = () =>{
                pp.active = 'hi';
            }
            assert.throw(errorFunc, Error)
        });
      })
      describe('toString tests', function(){
        it("should print data active", function() {
            
            let expect = 
            `Package: Cars\n- Value (excl. VAT): 100\n- Value (VAT 20%): 120`
      
            assert.equal(pp.toString(), expect)
        });
        it("should print data inactive", function() {
            pp.active = false;
            let expect = 
            `Package: Cars (inactive)\n- Value (excl. VAT): 100\n- Value (VAT 20%): 120`
      
            assert.equal(pp.toString(), expect)
        });
      })
      describe('check if functions are attached to proto', function(){
        it("check if functions are attached to proto", function() {
            assert.isTrue(typeof PaymentPackage.prototype.toString === 'function');
        });       
      })
});