import React from 'react';

import '../../../testConfig'
import { shallow } from 'enzyme';

import Card from '..';

describe( 'the Card component', () => {
  let cardWrapper;
  const cardTitle = 'Some title';

  beforeEach( ()=> {
    cardWrapper = shallow(
      <Card title={cardTitle}/>
    );
  });

  it( 'should have the card `title` ', () => {
    expect(
      cardWrapper.containsMatchingElement(
        <h2>{cardTitle}</h2>
      )
    ).toBe( true );
  });

  it( 'should have `card` class', () => {
    expect(
      cardWrapper.find( '.card' ).length
    ).toBe( 1 );
  });

  it( 'should have `card-body` class', () => {
    expect(
      cardWrapper.find( '.card-body' ).length
    ).toBe( 1 );
  });

  it( 'should have `card-link` class', () => {
    expect(
      cardWrapper.find( '.card-link' ).length
    ).toBe( 1 );
  });
});