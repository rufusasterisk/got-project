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
  body: JSON.stringify({url: url}),
  headers: {
    'Content-Type': 'application/json'
  },
  method: 'POST',
  credentials: 'omit'
});


export const getHouseData = (fetchData) => (dispatch) => {
  dispatch(fetchInProgress(true));
  return fetch('http://localhost:3001/api/v1/houses')
    .then(response => response.json())
    .then(parsedResponse => {
      // console.log(parsedResponse);
      dispatch(fetchInProgress(false));
      dispatch(fetchSuccess(true));
      dispatch(setHouseData(parsedResponse));
      const compiledData = parsedResponse.map( (house) => {
        const unresolvedSwornMemberPromises = house.swornMembers.map( (memberURL) => {
          return fetch('http://localhost:3001/api/v1/character', buildFetchPayload(memberURL))
            .then( response => {
              return response.json();
            })
            .then(memberObject => {
              return memberObject.name;
            });
        });
        console.log(unresolvedSwornMemberPromises);
        return Promise.all(unresolvedSwornMemberPromises)
          .then(swornMemberStringArray => {
            console.log(house.name);
            console.log(swornMemberStringArray);
            return Object.assign(house, {displayMembers: false, swornMemberNames: swornMemberStringArray});
          });
      });
        console.log(compiledData);
        dispatch(setHouseData(compiledData));
    })
    .catch(error => {
      dispatch(fetchInProgress(false));
      dispatch(fetchFailure(true));
      console.log(error);
      alert(`There was an error with the request: `, error);
    });
};
