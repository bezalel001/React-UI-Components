import React from 'react';

import '../../../testConfig'
import { shallow } from 'enzyme';
import Gridicons from 'gridicons';

import Accordion from '..';

describe( 'the Accordion component', () => {
  it( 'should render with title', () => {
    const accordionWrapper = shallow(
      <Accordion title='This is the title'> And here is the content</Accordion>
    );

    const accordionTitle = accordionWrapper.find( 'button' ).first();

    expect(
      accordionTitle.props().children
    ).toEqual( 'This is the title' );
  });

  it( 'should render with subtitle ', () => {
    const accordionWrapper = shallow(
      <Accordion title='This is the title' subtitle="subtitle goes here"> And here is the content</Accordion>
    );
    expect(
      accordionWrapper.contains(
        <small>subtitle goes here</small> )
    ).toBe( true );
  });

  it( 'should render with an icon', () => {
    const accordionWrapper = shallow(
      <Accordion title='This is the title' icon={ <Gridicons icon="trash" /> }> And here is the content</Accordion>
    );
    expect(
      accordionWrapper.contains(
        <span><Gridicons icon="trash" /></span>
      )
    ).toBe( true );
  })

  describe( 'when it is expanded ', () => {
    it( 'should set show state to `true`', () => {
      const accordionWrapper = shallow( 
        <Accordion title="Expanded"  initialExpanded >Some content</Accordion>
      );
      expect(
        accordionWrapper.state().show
      ).toEqual( true );
    })

    it( 'should have `card-body` class', () => {
      const accordionWrapper = shallow( 
        <Accordion title="Expanded"  initialExpanded >Some content to be displayed</Accordion>
      );
      expect(
        accordionWrapper.find( '.card-body' ).length
      ).toBe( 1 );
    });

    it( 'should render the content', () => {
      const accordionWrapper = shallow(
        <Accordion title="Expanded"  initialExpanded >Some content to be displayed</Accordion>
      );
      const content = accordionWrapper.find( 'div.card-body' ).first();
      expect(
        content.props().children
      ).toEqual( 'Some content to be displayed' );
    });
  });

  describe( 'the user clicks on the title with hidden content', () => {
    let accordionWrapper;

    beforeEach( () => {
      accordionWrapper = shallow(
        <Accordion title="Click title">Show content</Accordion>
      );
      accordionWrapper.find( 'button' ).first().simulate( 'click' );
    });

    it( 'should set show to `true`', () => {      
      expect(
        accordionWrapper.state().show
      ).toEqual( true );
    });

    it( 'should render content', () => {
      expect(
        accordionWrapper.contains(
          <div className="card-body">Show content</div>
        )
      ).toBe( true );
    });
  });

  describe( 'the user clicks on the title with visible content', () => {
    let accordionWrapper;

    beforeEach( () => {
      accordionWrapper = shallow(
        <Accordion title="Click title" initialExpanded >Show content</Accordion>
      );
      accordionWrapper.find( 'button' ).first().simulate( 'click' );
    });

    it( 'should set show to `false`', () => {      
      expect(
        accordionWrapper.state().show
      ).toEqual( false );
    });

    it( 'should render without content', () => {
      expect(
        accordionWrapper.contains(
          <div className="card-body">Show content</div>
        )
      ).toBe( false );
    });
  });
} );