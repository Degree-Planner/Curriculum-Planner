export default (degrees = [], action) => {
    switch (action.type) {
        case 'FETCH_ALL':
            return action.payload;
        case 'CREATE':
            return [...degrees, action.payload];

        case 'UPDATE':
            return degrees.map((degree) => degree._id === action.payload._id ? action.payload : degree);
        
        case 'DELETE':
            return degrees.filter((degree) => degree._id !==  action.payload);
        default:
            return degrees;
        
    }
};