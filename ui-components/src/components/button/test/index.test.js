import Button from '..';

import React from 'react';

import '../../../testConfig'

import Gridicons from 'gridicons';

import { shallow } from 'enzyme';

describe( 'the "Button" component', () => {
  
  it('should have `button` element', () => {
    const buttonWrapper = shallow(
      <Button>Some title</Button>
    );
    expect( 
      buttonWrapper.containsMatchingElement( 
      <button>Some title</button>
     ) ).toBe( true );
  });

  it( 'should have `button` "Title"', () => {
    const buttonWrapper = shallow(
      <Button>Title</Button>
    );
    const button = buttonWrapper.find( 'button' ).first();
    expect(
        button.props().children
      ).toEqual( 'Title' );
  });

  it( 'should render a single child element as children' , () => {
    const buttonWrapper = shallow(
      <Button>
        <Gridicons icon="trash" />
      </Button>
    );
    const button = buttonWrapper.find( 'button' ).first();
    expect(
      button.props().children
    ).toEqual( <Gridicons icon="trash" /> );
  });

  it( 'should render two children', () => {
    const buttonWrapper = shallow(
      <Button>
        <Gridicons icon="trash" />
        <span>This is unique button</span>
      </Button>
    );
    const button = buttonWrapper.find( 'button' ).first();
    expect(
      button.props().children.length
    ).toBe( 2 );
  });

  it( 'should contain `btn` class', () => {
    const buttonWrapper = shallow(
      <Button>Bootstrap class</Button>
    );
    expect(
      buttonWrapper.find( '.btn' ).length
    ).toBe( 1 );
  });

  it( 'should contain `btn-primary` class', () => {
    const buttonWrapper = shallow(
      <Button primary >Primary Button</Button>
    );
    expect(
      buttonWrapper.containsMatchingElement(
        <button className="btn btn-lg btn-primary">Primary Button</button>
      )
    ).toBe( true );
  });

  it( 'should contain `btn-danger` class', () => {
    const buttonWrapper = shallow(
      <Button danger >Red button</Button>
    );
    expect(
      buttonWrapper.find( '.btn-danger' ).length
    ).toBe( 1 );
  });

  it( 'should contain `btn-info` class', () => {
    const buttonWrapper = shallow(
      <Button info >Info button</Button>
    );
    expect(
      buttonWrapper.find( '.btn-info' ).length
    ).toBe( 1 );
  });

  it( 'should contain `btn-warning` class', () => {
    const buttonWrapper = shallow(
      <Button warning >Warning button</Button>
    );
    expect(
      buttonWrapper.find( '.btn-warning' ).length
    ).toBe( 1 );
  });

  it( 'should contain `btn-light` class', () => {
    const buttonWrapper = shallow(
      <Button light >Light button</Button>
    );
    expect(
      buttonWrapper.find( '.btn-light' ).length
    ).toBe( 1 );
  });

  it( 'should contain `btn-dark` class', () => {
    const buttonWrapper = shallow(
      <Button dark >Dark button</Button>
    );
    expect(
      buttonWrapper.find( '.btn-dark' ).length
    ).toBe( 1 );
  });

  it( 'should contain `btn-link` class', () => {
    const buttonWrapper = shallow(
      <Button link >Link button</Button>
    );
    expect(
      buttonWrapper.find( '.btn-link' ).length
    ).toBe( 1 );
  });
  it( 'should contain `btn-success` class', () => {
    const buttonWrapper = shallow(
      <Button success >Success button</Button>
    );
    expect(
      buttonWrapper.find( '.btn-success' ).length
    ).toBe( 1 );
  });
  it( 'should contain `btn-secondary` class', () => {
    const buttonWrapper = shallow(
      <Button secondary >Secondary button</Button>
    );
    expect(
      buttonWrapper.find( '.btn-secondary' ).length
    ).toBe( 1 );
  });

  it( 'should contain `btn-outline-primary` class', () => {
    const buttonWrapper = shallow(
      <Button outlinePrimary >Outline primary button</Button>
    );
    expect(
      buttonWrapper.find( '.btn-outline-primary' ).length
    ).toBe( 1 );
  });

  it( 'should contain `btn-outline-secondary` class', () => {
    const buttonWrapper = shallow(
      <Button outlineSecondary >Outline secondary button</Button>
    );
    expect(
      buttonWrapper.find( '.btn-outline-secondary' ).length
    ).toBe( 1 );
  });

  it( 'should contain `btn-outline-success` class', () => {
    const buttonWrapper = shallow(
      <Button outlineSuccess >Outline success button</Button>
    );
    expect(
      buttonWrapper.find( '.btn-outline-success' ).length
    ).toBe( 1 );
  });

  it( 'should contain `btn-outline-info` class', () => {
    const buttonWrapper = shallow(
      <Button outlineInfo >Outline info button</Button>
    );
    expect(
      buttonWrapper.find( '.btn-outline-info' ).length
    ).toBe( 1 );
  });

  it( 'should contain `btn-outline-warning` class', () => {
    const buttonWrapper = shallow(
      <Button outlineWarning >Outline warning button</Button>
    );
    expect(
      buttonWrapper.find( '.btn-outline-warning' ).length
    ).toBe( 1 );
  });
  
  it( 'should contain `btn-outline-danger` class', () => {
    const buttonWrapper = shallow(
      <Button outlineDanger >Outline danger button</Button>
    );
    expect(
      buttonWrapper.find( '.btn-outline-danger' ).length
    ).toBe( 1 );
  });

    

});