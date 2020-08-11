const Calculator = require('../../app/calculator.js');
const chai = require('chai');
const spies = require('chai-spies');
const { expect } = require('chai');
chai.use(spies);

describe('Addition of numbers', function() {
    let calculator, spy;

    beforeEach(() => {
        calculator = new Calculator();
        spy = chai.spy.on(calculator, 'add');
    });

    afterEach(() => {
        calculator = null;
    });

    it('addition when only one number is passed', function() {
        expect(calculator.add([5])).to.be.equal(5);
        expect(spy).to.have.been.called(1);
    });

    it('addition when no numerical value is passed', function() {
        expect(calculator.add(['a', 'b', 'c'])).to.be.throw;
        expect(spy).to.have.been.called(1);
    });

    it('addition when numbers and strings are passed', function() {
        expect(calculator.add([2, 10, 5, 'not a number', 8])).to.be.equal(25);
        expect(spy).to.have.been.called(1);;
    });

    it('addition when multiple numbers are paseed', function() {
        expect(calculator.add([5, 5, 4])).to.be.equal(14);
        expect(spy).to.have.been.called(1);
    });


});