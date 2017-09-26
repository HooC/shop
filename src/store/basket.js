const inicialState = [];

const basket = (state = inicialState, action) => {

    switch (action.type) {
        case('ADD_BASKET') :
            return state.length > 0 ? state.some(item => item.id === action.payload.id) ? 
                state.map(item => (
                    item.id == action.payload.id ? Object.assign({}, item, {price: item.price + action.payload.price, count: item.count + 1}) : Object.assign({}, item)
                )) 
                   
                : [...state, Object.assign({}, action.payload, {count: 1}) ]

                : [...state, Object.assign({}, action.payload, {count: 1}) ];

            break;
        case('REMOVE_ITEM') :
            return state.filter(item => item.id != action.payload.id)
    }
    return state;
}

export default basket;