export const fetchInProgress = (status) => ({
  type: 'FETCH_IN_PROGRESS',
  status
});

export const fetchFailure = (status) => ({
  type: 'FETCH_FAILURE',
  status
});

export const fetchSuccess = (status) => ({
  type: 'FETCH_SUCCESS',
  status
});

export const setHouseData = (houseData) => ({
  type: 'SET_HOUSE_DATA',
  houseData
});


export const getHouseData = (fetchData) => (dispatch) => {
  dispatch(fetchInProgress(true));
  fetch('http://localhost:3001/api/v1/houses')
    .then(response => response.json())
    .then(parsedResponse => {
      // console.log(parsedResponse);
      dispatch(fetchInProgress(false));
      dispatch(fetchSuccess(true));
      dispatch(setHouseData(parsedResponse));
    })
    .catch(error => {
      dispatch(fetchInProgress(false));
      dispatch(fetchFailure(true));
      alert(`There was an error with the request: `, error);
    });
};
