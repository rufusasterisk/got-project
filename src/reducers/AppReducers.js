export const houseData = (state = [], action) => {
  switch (action.type) {
  case 'SET_HOUSE_DATA':
    return action.houseData;
  case 'TOGGLE_MEMBER_DISPLAY': {
    // const arrayTarget = state.findIndex( house => {
    //   return house.name === action.houseName;
    // });
    // const updatedHouseData = state;
    // updatedHouseData[arrayTarget] = Object.assign({}, updatedHouseData[arrayTarget], {displayMembers: action.status});
    // return updatedHouseData;

    return state.map( (house) => {
      if (house.name === action.houseName) {
        return Object.assign({}, house, {displayMembers: action.status});
      } else {
        return house;
      }
    });
  }
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
