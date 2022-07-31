
let newCadena = []

const prevNum = (symbol) =>{

    if(newCadena.lastIndexOf(symbol) - 2 === '-'){
        return ((+newCadena.lastIndexOf(symbol) - 1)*(-1))
    } else {

        return (+newCadena.lastIndexOf(symbol) - 1)
    }
}

const nextNum = (symbol) =>{
    return (+newCadena.lastIndexOf(symbol) + 1)
}

const calc =(cadena)=>{

    if(cadena.length > 30){
        return 'La cadena ingresada debe ser menor a 30 carácteres'
    } else {

        newCadena = cadena.trim().split('');
    
        let symbols = newCadena.filter(symbol=>symbol === '+' || symbol === '-' || symbol === '*' || symbol === '/')
    
        for(let i = 0;i<symbols.length;i++){
    
            if(newCadena.includes('/')){
                newCadena.splice(prevNum('/'), 3, (newCadena.at(prevNum('/')) / newCadena.at(nextNum('/'))));
                }
                if(newCadena.includes('*')){
                    newCadena.splice(prevNum('*'), 3, (newCadena.at(prevNum('*')) * newCadena.at(nextNum('*'))));
                    }
                    if(newCadena.includes('-')){
                    newCadena.splice(prevNum('-'), 3, (newCadena.at(prevNum('-')) - newCadena.at(nextNum('-'))));
                    }
                        if(newCadena.includes('+')){
                        newCadena.splice(prevNum('+'), 3, (+newCadena.at(prevNum('+')) + +newCadena.at(nextNum('+'))));
                        }
        }
    
        return +newCadena.toString()
    }

}

QUnit.test('calc()', assert => {
    assert.equal(calc('4-7+8+9/2*3'),18.5,
                    'calc("4-7+8+9/2*3")');

    assert.equal(calc('6-5/5'), 5,
                    'calc("6-5/5")');

    assert.equal(calc('6-5/5+2-7+5-4*3+5+1'), -1,
                    'calc("6-5/5+2-7+5-4*3+5+1")');

    assert.equal(calc('6-5/5+2-7+5-4*3+5+1+6-5/5+2-7+5-4*3+5+1+6-5/5+2-7+5-4*3+5+1'),
                        'La cadena ingresada debe ser menor a 30 carácteres',
                        'calc("6-5/5+2-7+5-4*3+5+1+6-5/5+2-7+5-4*3+5+1+6-5/5+2-7+5-4*3+5+1")');
  });
