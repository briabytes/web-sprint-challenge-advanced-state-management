import axios from 'axios';

export const FETCHING_SMURF_START = 'FETCHING_SMURF_START';
export const FETCHING_SMURF_SUCCESS = 'FETCHING_SMURF_SUCCESS';
export const FETCHING_SMURF_FAIL = 'FETCHING_SMURF_FAIL';

export const ADD_SMURF = 'ADD_SMURF';

export const GetSmurfs = () => (dispatch) => {
    dispatch({type: FETCHING_SMURF_START});
    axios
    .get('http://localhost:3333/smurfs')
    .then(res => {
    
        console.log('this is the response', res.data);
        dispatch({type: FETCHING_SMURF_SUCCESS, payload: res.data})
    })
    .catch(err => {
        console.log('get smurfs is not working',err);
        dispatch({type: FETCHING_SMURF_FAIL, payload: err.response})
    })
};

export const addSmurf = (newSmurf) => (dispatch) => {
    return(dispatch => {
        axios
        .post('http://localhost:3333/smurfs', newSmurf)
        .then(res => { 
            console.log('here is your smurf',res.data)
            dispatch({type: ADD_SMURF, payload: res.data})
        })
        .catch(err => {
            console.log('add smurfs is not working',err);
            dispatch({type: ADD_SMURF, payload: err.response})
        })
    })
};

//Task List:
//1. Add fetch smurfs action: 
//              - fetch and return initial list of smurfs
//              - dispatch actions that indicate if we are waiting for a server response
//              - dispatch an error text action if an error is returned from the server
//2. Add add smurf action:
//              - dispatch an error text action if smurf data does not includes a name, nickname and position field
//              - send a post request with the smurf as body to see if there is an error
//              - dispatch add smurf action if request is successful
//              - dispatch an error text action if an request returns an error
//3. Add set error text action:
//              - return action object setting error text
//4. Any other actions you deem nessiary to complete application.