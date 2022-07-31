

const calculateMaxEvenSum = function(array){

    let initialValue = 0;
    let result = array.reduce((initialValue, item) => {
        return initialValue = initialValue + item
    }
    );

    return result
};

//Pruebas unitarias
QUnit.test('calc()', assert => {
    assert.equal(calculateMaxEvenSum([2,3,6,10,1,1]),
                    23,
                    'calculateMaxEvenSum([2,3,6,10,1,1])');

    assert.equal(calculateMaxEvenSum([2,3,6,-5,10,1,1]),
                    18,
                    'calculateMaxEvenSum([2,3,6,-5,10,1,1])');

    assert.equal(calculateMaxEvenSum([2,6,10,1,1]),
                    20,
                    'calculateMaxEvenSum([2,6,10,1,1])');

    assert.equal(calculateMaxEvenSum([2,3,6,10,1]),
                    22,
                    'calculateMaxEvenSum([2,3,6,10,1])');

  });