import * as api from '../api';

export const getDegrees = () => async (dispatch) => {
    try {
        const { data } = await api.fetchDegrees();

        dispatch({ type: 'FETCH_ALL', payload: data });
    } catch (error) {
        console.log(error.message);
    }
}
/*export const searchDegrees = (degree) => async (dispatch) => {
    try {
        const { data } = await api.fetchSearchDegrees(degree);

        dispatch({ type: 'FETCH_SEARCH', payload: data });
    } catch (error) {
        console.log(error.message);
    }
}*/
export const getCourses = (degree) => async (dispatch) => {
    try {
        const { data } = await api.fetchDegrees();
        console.log(data)
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

export const updateDegree = (id, degree, history) => async (dispatch) => {
    try{
        const {data} = await api.updateDegree(id, degree);
        dispatch({type: 'UPDATE', payload: data});
        history.push("/csc530/dev/admin/editdegree");
    }
    catch(error){
        console.log(error.message);
    }
}

export const deleteDegree = (id, history) => async (dispatch) => {
    try{
        await api.deleteDegree(id);

        dispatch({type: 'DELETE', payload: id});
        
        history.push("/csc530/dev/admin/editdegree");
    }catch(error)
    {
        console.log(error);
    }
}