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

const buildFetchPayload = (url) => ({
  url,
  headers: {
    'Content-Type': 'application/json'
  },
  method: 'POST'
});


export const getHouseData = (fetchData) => (dispatch) => {
  dispatch(fetchInProgress(true));
  return fetch('http://localhost:3001/api/v1/houses')
    .then(response => response.json())
    .then(parsedResponse => {
      // console.log(parsedResponse);
      dispatch(fetchInProgress(false));
      dispatch(fetchSuccess(true));
      const compiledData = parsedResponse.map( (house) => {
        const unresolvedSwornMemberPromises = house.swornMembers.map( (memberURL) => {
          fetch('http://localhost:3001/api/v1/character', buildFetchPayload(memberURL))
            .then( response => response.json())
            .then(memberObject => memberObject.name);
        });
        return Promise.all(unresolvedSwornMemberPromises)
          .then(swornMemberStringArray => {
            Object.assign(house, {displayMembers: false, swornMemberNames: swornMemberStringArray});
          });
      });
      compiledData.then(combinedData => {
        console.log(combinedData);

      })
      dispatch(setHouseData(parsedResponse));
    })
    .catch(error => {
      dispatch(fetchInProgress(false));
      dispatch(fetchFailure(true));
      alert(`There was an error with the request: `, error);
    });
};
