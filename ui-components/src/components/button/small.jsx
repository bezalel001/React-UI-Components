import React from 'react';

import classnames from 'classnames';

import Button from '.';


const SmallButton = ( props ) => {
  return (
    <div>
      <Button {... props} className={classnames(props.className, 'btn-sm' )}>
        {props.children }
      </Button>
    </div>
  )
};

export default SmallButton;