import axios from 'axios';

//Task List:
//1. Add a thunk action called fetchSmurfs that triggers a loading status display in our application, performs an axios call to retreive smurfs from our server, saves the result of that call to our state and shows an error if one is made.
//2. Add a standard action that allows us to add new smurf (including the name, nickname, position, summary)
//3. Add a standard action that allows us to set the value of the error message slice of state.

export const SMURF_START = "SMURF_START";
export const fetchStart = () => {
    return({type:SMURF_START})
}

export const SMURF_SUCCESS = "SMURF_SUCCESS";
export const fetchSuccess = (data) => {
    return({type:SMURF_SUCCESS, payload:data})
}

export const SMURF_FAIL = "SMURF_FAIL";
export const fetchFail = (error) => {
    return({type:SMURF_FAIL, payload:error})
}

export const SMURF_ADD = "SMURF_ADD";
export const addSmurf = (smurf) => {
    return{type:SMURF_ADD, payload:smurf}
}

export const ADD_ERROR = "ADD_ERROR";
export const setError = (error) => {
    return{type: ADD_ERROR, payload:error}
}

export const fetchSmurfs = () => {
    return (dispatch) => {
        dispatch({type:SMURF_START});
        axios.get('http://localhost:3333/smurfs')
        .then(res => dispatch({type:SMURF_SUCCESS, payload:res.data}))
        .catch(err => dispatch({type:SMURF_FAIL, payload:err}));
    }
}
