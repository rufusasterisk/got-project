import {
  houseData,
  fetchFailure,
  fetchSuccess,
  fetchInProgress } from '../reducers/AppReducers';

const emptyAction = {
  type: null
};

describe('houseData', () => {

  it('should return a default state', () => {
    expect(houseData(undefined, emptyAction)).toEqual([]);
  });

  it('should return an updated state', () => {
    const actionData = [
      {
        name: 'string',
        otherData: 'value1',
        moreData: 2
      },
      {
        name: 'stringtastic',
        otherData: 'value42',
        moreData: 11
      }
    ];
    const setAction = {
      type: 'SET_HOUSE_DATA',
      houseData: actionData
    };

    expect(houseData(undefined, setAction)).toEqual(actionData);
  });
});

describe('fetchFailure', () => {

  it('should return a default state', () => {
    expect(fetchFailure(undefined, emptyAction)).toEqual(false);
  });

  it('should return the action.status value', () => {
    expect(fetchFailure(undefined, {type: 'FETCH_FAILURE', status: true}))
      .toEqual(true);
    expect(fetchFailure(undefined, {type: 'FETCH_FAILURE', status: false}))
      .toEqual(false);
  });
});

describe('fetchSuccess', () => {
  it('should return a default state', () => {
    expect(fetchSuccess(undefined, emptyAction)).toEqual(false);
  });

  it('should return the action.status value', () => {
    expect(fetchSuccess(undefined, {type: 'FETCH_SUCCESS', status: true}))
      .toEqual(true);
    expect(fetchSuccess(undefined, {type: 'FETCH_SUCCESS', status: false}))
      .toEqual(false);
  });
});

describe('fetchInProgress', () => {
  it('should return a default state', () => {
    expect(fetchInProgress(undefined, emptyAction)).toEqual(false);
  });

  it('should return the action.status value', () => {
    expect(fetchInProgress(undefined,
      {type: 'FETCH_IN_PROGRESS', status: true})).toEqual(true);
    expect(fetchInProgress(undefined,
      {type: 'FETCH_IN_PROGRESS', status: false})).toEqual(false);
  });
});
