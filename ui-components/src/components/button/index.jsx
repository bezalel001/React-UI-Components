import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';


export default class Button extends React.Component {
  static propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.element,
      PropTypes.array
    ]).isRequired, 
    primary: PropTypes.bool,
    secondary: PropTypes.bool,
    success: PropTypes.bool,
    danger: PropTypes.bool,
    warning: PropTypes.bool,
    info: PropTypes.bool,
    default: PropTypes.bool,
    light: PropTypes.bool,
    dark: PropTypes.bool,
    link: PropTypes.bool,
    outlinePrimary: PropTypes.bool,
    outlineSecondary: PropTypes.bool,
    outlineSuccess: PropTypes.bool,
    outlineWarning: PropTypes.bool,
    outlineDanger: PropTypes.bool,
    outlineInfo: PropTypes.bool,
    href: PropTypes.string,
  };

  render() {
    const classes = classNames( 'btn btn-lg', {
      'btn-primary': this.props.primary,
      'btn-secondary': this.props.secondary,
      'btn-success': this.props.success,
      'btn-danger': this.props.danger,
      'btn-warning': this.props.warning,
      'btn-info': this.props.info,
      'btn-light': this.props.light,
      'btn-dark': this.props.dark,
      'btn-link': this.props.link,
      'btn-outline-primary': this.props.outlinePrimary,
      'btn-outline-danger': this.props.outlineDanger,
      'btn-outline-secondary': this.props.outlineSecondary,
      'btn-outline-success': this.props.outlineSuccess,
      'btn-outline-info': this.props.outlineInfo,
      'btn-outline-warning': this.props.outlineWarning,
     } );
     
    return (
      <div className="container">
        <button
          type="button"
          className={classes}
        >
          {this.props.children}
        </button>
      </div>
    );
  }
}

