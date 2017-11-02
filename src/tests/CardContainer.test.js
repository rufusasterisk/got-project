import React from 'react';
import CardContainer from '../components/CardContainer/CardContainer';
import renderer from 'react-test-renderer';

describe('CardContainer', () => {
  const dummyArray = [
    {
      name: 'name1',
      words: 'words1',
      founded: 'founded1',
      seats: ['name1seat1, name1seat2'],
      titles: ['name1title1'],
      ancestralWeapons: ['name1weapon1', 'name1weapon2'],
      coatOfArms: 'coatOfArms1'
    },
    {
      name: 'name2',
      words: 'words2',
      founded: '',
      seats: ['name2seat1, name2seat2'],
      titles: ['name2title1'],
      ancestralWeapons: ['name2weapon1', 'name2weapon2'],
      coatOfArms: 'coatOfArms2'
    }
  ];

  it('matches the snapshot', () => {
    const expected = renderer.create(
      <CardContainer houseArray={dummyArray} />).toJSON();

    expect(expected).toMatchSnapshot();
  });
});
