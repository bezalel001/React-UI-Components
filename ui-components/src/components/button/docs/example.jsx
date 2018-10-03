import React from 'react';
import Gridicon from 'gridicons';

import Button from '../index';
import SmallButton from '../small';


export default class ButtonComponentExample extends React.Component {

  static defaultProps = {
    default: true,
    success: true,
    primary: true,
  }
  
  constructor(props) {
    super(props);
    this.state = {};
  }
  

  render() {
    return (
      <div className="container mb-5">
        <div className="row mb-4 mt-4">         
            <h2>Button Component</h2>           
        </div>

        <div className="row mb-4">
          <div className="col-sm">
            <Button default={this.props.default}>
              <span>Default</span>
            </Button>
          </div>
          <div className="col-sm">
          <Button primary={this.props.primary}>
            <span>Primary</span>
          </Button>
          </div>
        </div>
        <div className="row mb-4">
          <div className="col-sm">
            <Button secondary={true}>
              <span>Secondary</span>
            </Button>  
          </div>
          <div className="col-sm">
            <Button success={this.props.success}>
              <span>Success</span>
            </Button>
          </div>
        </div>
      
        <div className="row mb-4">
          <div className="col-sm">
            <Button danger>
              <span>Danger</span>
            </Button>
          </div>
          <div className="col-sm">
            <Button info>
              <span>Info</span>
            </Button>
          </div>
        </div>
        <div className="row mb-4">
          <div className="col-sm">
            <Button dark>
              <span>Dark</span>
            </Button>
          </div>
          <div className="col-sm">
            <SmallButton warning={true}>
              <span>Small Warning</span>
            </SmallButton>
          </div>
        </div>
        <div className="row mb-4">
          <div className="col-sm">
            <Button light={true}>
              <span>Light</span>
            </Button>
          </div>
          <div className="col-sm">
            <Button link={true}>
              <span>Link</span>
            </Button>     
          </div>
        </div>

        <div className="row mb-4">
          <div className="col-sm">
            <Button danger>              
              <span>Delete</span>
              <Gridicon icon="trash" />
            </Button>
          </div>
          <div className="col-sm">
          <Button danger={true}>
              <Gridicon icon="trash" />
          </Button> 
          </div>
        </div>
        <div className="row mb-4">
          <div className="col-sm">
            <Button outlineDanger>
            <Gridicon icon="cross" />
              <span>Remove</span>              
            </Button>
          </div>
          <div className="col-sm">
          <Button light={true}>
              <Gridicon icon="trash" />
          </Button> 
          </div>
        </div>
        <div className="row mb-4">
          <div className="col-sm">
            <Button outlineInfo={true}>
            <Gridicon icon="globe" />             
            </Button>
          </div>
          <div className="col-sm">
          <Button link={true}>
              <Gridicon icon="link" />
          </Button> 
          </div>
        </div>  
      </div> 
    );
  }
}


