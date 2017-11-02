export const houseData = (state = [], action) => {
  switch (action.type) {
  case 'SET_HOUSE_DATA':
    return action.houseData;
  default:
    return state;
  }
};

export const fetchFailure = (state = false, action) => {
  switch (action.type) {
  case 'FETCH_FAILURE':
    return action.status;
  default:
    return state;
  }
};

export const fetchSuccess = (state = false, action) => {
  switch (action.type) {
  case 'FETCH_SUCCESS':
    return action.status;
  default:
    return state;
  }
};

export const fetchInProgress = (state = false, action) => {
  switch (action.type) {
  case 'FETCH_IN_PROGRESS':
    return action.status;
  default:
    return state;
  }
};
