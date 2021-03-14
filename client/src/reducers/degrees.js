export default (degrees = [], action) => {
    switch (action.type) {
        case 'FETCH_ALL':
            return action.payload;
        case 'CREATE':
            return [...degrees, action.payload];
        default:
            return degrees;
    }
};