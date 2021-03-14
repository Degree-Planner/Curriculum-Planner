import * as api from '../api';

export const authAdmin = (userData, token) => async (dispatch) => {
    try {
        const { data } = await api.authAdmin({email: userData.email});

        if(data>0){
            console.log("Logged in");
            dispatch({ type: 'AUTH', data: { userData, token }});
        }else{
            console.log(data);
            console.log("Not verified as an admin");
        }
        
    } catch (error) {
        console.log(error.response);
    }
}