const Calculator = require('../../app/calculator.js');
const chai = require('chai');
const spies = require('chai-spies');
const { expect } = require('chai');
chai.use(spies);

describe('Multiplication of numbers', function() {
    let calculator, spy;

    beforeEach(() => {
        calculator = new Calculator();
        spy = chai.spy.on(calculator, 'multiply');
    });

    afterEach(() => {
        calculator = null;
    });

    it('multiplication when only one number is passed', function() {
        expect(calculator.multiply([5])).to.be.equal(5);
        expect(spy).to.have.been.called(1);
    });

    it('multiplication when no numerical value is passed', function() {
        expect(calculator.multiply(['a', 'b', 'c'])).to.be.throw;
        expect(spy).to.have.been.called(1);
    });

    it('multiplication when numbers and strings are passed', function() {
        expect(calculator.multiply([2, 10, 5, 'not a number', 8])).to.be.equal(800);
        expect(spy).to.have.been.called(1);
    });

    it('multiplication when multiple numbers are paseed', function() {
        expect(calculator.multiply([5, 5, 4])).to.be.equal(100);
        expect(spy).to.have.been.called(1);
    });


});