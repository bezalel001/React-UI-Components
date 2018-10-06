import React from 'react';
import PropTypes from 'prop-types';
import Gridicons from 'gridicons';



export default class Accordion extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
    icon: PropTypes.element,
    status: PropTypes.object,
    initialExpanded: PropTypes.bool,
  };

  state = {
    show: this.props.initialExpanded || false
  };

  constructor(props) {
    super(props);
  }

  handleToggle = () => {
    const show = this.state.show;
    this.setState( {
      show: ! show
    });
  }

  render() {
    return (        
          <div className="card width__accordion-card">
            <div className="card-header">
              <h5 className="mb-0">
                <button 
                  className="btn btn-link" 
                  onClick={ this.handleToggle }
                >
                  { this.props.title }
                </button>
              </h5> 
              { this.props.icon && <span>{ this.props.icon }</span> }
              { this.props.subtitle && <small>{ this.props.subtitle }</small> }
            </div>
            { this.state.show  &&  <div className="card-body">{ this.props.children }</div> }         
          </div>
    );
  }
}