import {
  fetchInProgress,
  fetchFailure,
  fetchSuccess,
  setHouseData,
  getHouseData } from '../actions/AppActions';
import fetchMock from 'fetch-mock';
// import mockData from './mockData';

const expectationTrue = (type) => ({
  type,
  status: true
});

const expectationFalse = (type) => ({
  type,
  status: false
});

const objectArray = [
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

describe('fetchInProgress', () => {

  it('returns an object', () => {
    expect(typeof fetchInProgress()).toEqual('object');
  });

  it('returns an object with status set to passed boolean', () => {
    expect(fetchInProgress(true)).toEqual(expectationTrue('FETCH_IN_PROGRESS'));
    expect(fetchInProgress(false))
      .toEqual(expectationFalse('FETCH_IN_PROGRESS'));
  });
});

describe('fetchFailure', () => {

  it('returns an object', () => {
    expect(typeof fetchFailure()).toEqual('object');
  });

  it('returns an object with status set to passed boolean', () => {

    expect(fetchFailure(true)).toEqual(expectationTrue('FETCH_FAILURE'));
    expect(fetchFailure(false)).toEqual(expectationFalse('FETCH_FAILURE'));
  });
});

describe('fetchSuccess', () => {

  it('returns an object', () => {
    expect(typeof fetchSuccess()).toEqual('object');
  });

  it('returns an object with status set to passed boolean', () => {

    expect(fetchSuccess(true)).toEqual(expectationTrue('FETCH_SUCCESS'));
    expect(fetchSuccess(false)).toEqual(expectationFalse('FETCH_SUCCESS'));
  });
});

describe('setHouseData', () => {

  it('returns an object', () => {
    expect(typeof setHouseData()).toEqual('object');
  });

  it('returns the array passed as houseData', () => {
    const expected = {
      type: 'SET_HOUSE_DATA',
      houseData: objectArray
    };

    expect(setHouseData(objectArray)).toEqual(expected);
  });

});

describe('getHouseData', () => {

  it('dispatches actions from the thunk and stores data', () => {
    fetchMock.get('http://localhost:3001/api/v1/houses', objectArray);
    const myThunked = getHouseData();
    const expected = [
      fetchInProgress(true),
      fetchInProgress(false),
      fetchSuccess(true),
      setHouseData(objectArray)
    ];
    let myDispatched = [];
    const myMockDispatch = (actionCall) => {
      myDispatched.push(actionCall);
    };
    // const myExpectationPromise = new Promise((resolve) => {
    //   resolve(myThunked(myMockDispatch));
    // });
    // myExpectationPromise.then( (expectation) => {
    //   expect(expectation).toEqual(expected);
    // }
    // );
    myThunked(myMockDispatch).then( () => {
      expect(myDispatched).toEqual(expected);
    });
  });

});
