import {
  fetchInProgress,
  fetchFailure,
  fetchSuccess,
  setHouseData,
  getHouseData } from '../actions/AppActions';

const expectationTrue = (type) => ({
  type,
  status: true
});

const expectationFalse = (type) => ({
  type,
  status: false
});

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
    const expected = {
      type: 'SET_HOUSE_DATA',
      houseData: objectArray
    };

    expect(setHouseData(objectArray)).toEqual(expected);
  });

});
