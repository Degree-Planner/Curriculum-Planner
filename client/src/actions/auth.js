import * as api from '../api';

export const authAdmin = (userData, token, history) => async (dispatch) => {
    try {

        const { data } = await api.authAdmin(userData);

        if(data>0){
            dispatch({ type: 'AUTH', data: { userData, token }});
            history.push({pathname: '/csc530/dev/admin', message: 'Sign in Successful!'});
        }else{
            history.push({ pathname: '/csc530/dev', message: 'Sign in Unsuccessful, Account not Verified as an Admin'});
        }
        
    } catch (error) {
        console.log(error.response);
    }
}

export const createAdmin = (adminData) => async (dispatch) => {
    try {
        const { data } = await api.createAdmin(adminData);

        dispatch({ type: 'CREATE', payload: data })
    } catch (error) {
        console.log(error.message);
    }
}