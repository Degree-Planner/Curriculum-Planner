import * as api from '../api';

export const getDegrees = () => async (dispatch) => {
    try {
        const { data } = await api.fetchDegrees();

        dispatch({ type: 'FETCH_ALL', payload: data });
    } catch (error) {
        console.log(error.message);
    }
}
export const createDegree = (degree) => async (dispatch) => {
    try{
        const {data} = await api.createDegree(degree);

        dispatch({type: 'CREATE', payload: data});
        
    }
    catch(error){
        console.log(error.message);
    }
}

export const updateDegree = (degree) => async (dispatch) => {
    try{
          const {data} = await api.updateDegree(degree);
          
          dispatch({type: 'UPDATE', payload: data});
    }
    catch(error){
        console.log(error.message);
    }
}