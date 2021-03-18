import * as api from '../api';

export const authAdmin = (userData, token, history) => async (dispatch) => {
    try {
        const { data } = await api.authAdmin({email: userData.email});

        if(data>0){
            console.log("Logged in");
            dispatch({ type: 'AUTH', data: { userData, token }});
            history.push('/csc530/dev/admin');
        }else{
            console.log(data);
            console.log("Not verified as an admin");
            history.push('/csc530/dev/auth');
        }
        
    } catch (error) {
        console.log(error.response);
    }
}