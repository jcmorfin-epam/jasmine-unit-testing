class Calculator{
    constructor(){

    };

    filterNumbersOnly(numbers){
        var numbersOnly = new Array();
        for(var i = 0; i < numbers.length; i++){
            
            if(typeof numbers[i] === 'number'){
                numbersOnly.push(numbers[i]);
            }
        }

        return numbersOnly;
    };

    add(numbers){
        var numbersToAdd = this.filterNumbersOnly(numbers);
        var result = 0;

        if(numbers.length == 0){
            throw new Error('No numbers to sum up!');
        }
        else if(numbers.length == 1){
            result = numbersToAdd[0];
        }
        else{
            for(var i = 0; i < numbersToAdd.length; i++){
                result += numbersToAdd[i];
            }
        }

        return result;

    };

    multiply(numbers){
        var numbersToMultiply = this.filterNumbersOnly(numbers);
        var result = 1;

        if(numbers.length == 0){
            throw new Error('No numbers to multiply!');
        }
        else if(numbers.length == 1){
            result = numbersToMultiply[0];
        }
        else{
            for(var i = 0; i < numbersToMultiply.length; i++){
                result *= numbersToMultiply[i];
            }
        }

        return result;
    };

}

module.exports = Calculator;