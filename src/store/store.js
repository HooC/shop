const inicialState = [
    {
        id: 0,
        name: 'Iphone 8',
        price: 68000,
        brand: 'apple',
        img: 'img01'
    },
    {
        id: 1,
        name: 'Iphone 7',
        price: 45000,
        brand: 'apple',
        img: 'img02'
    },
    {
        id: 2,
        name: 'Iphone 6',
        price: 23000,
        brand: 'apple',
        img: 'img03'
    },
    {
        id: 3,
        name: 'Samsung GALAXY Note 8',
        price: 65000,
        brand: 'samsung',
        img: 'img04'
    },

    {
        id: 3,
        name: 'Samsung GALAXY Note 5',
        price: 65000,
        brand: 'samsung',
        img: 'img05'
    },
    {
        id: 4,
        name: 'Nokia 8 DS',
        price: 40000,
        brand: 'nokia',
        img: 'img06'
    }
    
];

const store = (state = inicialState, action) => {

    switch (action.type) {
        case('') :
            return state

            break;
        
    }
    return state;
}

export default store;