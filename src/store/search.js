const inicialState = []

const search = (state = inicialState, action) => {
    switch(action.type) {
        case('ADD_SEARCH') :
        // console.log()
            return [action.payload];
        
        case('CLEAR_SEARCH') :
            return []
    } 
    return state;
}

export default search;