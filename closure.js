//  A closure is a feature where an inner function has access
// to the variable of its outer function, even after the 
// outer funnction has finished executing.

function outerFunction(){
    const outerVariable = " i am  from the outer function";
    function innerFunction(){
        console.log(outerVariable);
    }
    return innerFunction;
};

const closureFunction = outerFunction();
closureFunction();

// Example 
function createCounter(){
    let counter = 0;
    
    return function(){
        counter++;
        return counter;
    };
}

const counterFunction = createCounter();
console.log(counterFunction());
console.log(counterFunction());
console.log(counterFunction());
console.log(counterFunction());

function createCart(){
    let good = 0;

    return {
        increaseCart: function(){
            good++;
            return good;
        },
        decreaseCart: function(){
            good--;
            return good;
        },
        getCart: function(){
            return good;
        }
    }
}

const goods = createCart();
console.log(goods.increaseCart());
console.log(goods.increaseCart());
console.log(goods.decreaseCart());
console.log(goods.decreaseCart());