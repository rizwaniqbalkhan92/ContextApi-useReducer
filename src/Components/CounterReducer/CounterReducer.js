import React from 'react';


const CounterReducer = (state, action) => {

    switch (action) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        case 'CLEAR':
            return 0;
    }
}

export default CounterReducer;