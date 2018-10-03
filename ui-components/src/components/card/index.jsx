import React from 'react';
import PropTypes from 'prop-types';



export default class Card extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
  }

  render() {
    return (
      <div className="card">        
        <div className="card-body">
          <div className="card-link">
            <h2>{this.props.title}</h2>
          </div>
        </div>
      </div>
    );
  }
}

 