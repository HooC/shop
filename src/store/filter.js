const inicialState = ["apple"];

const filter = (state = inicialState, action) => {

    switch (action.type) {
        case('FILTER_BRAND') :

            return state.includes(action.payload) ? state.filter(i => i != action.payload) : [...state, action.payload];
            break;
        
    }
    return state;
}

export default filter;