export default (degrees = [], action) => {
    switch (action.type) {
        case 'FETCH_ALL':
            return action.payload;
        //case 'FETCH_SEARCH':
            //return action.payload;
        case 'CREATE':
            return [...degrees, action.payload];
        default:
            return degrees;
        case 'UPDATE':
            return degrees.map((degree) => degree._id === action.payload._id ? action.payload : degree);
    }
};