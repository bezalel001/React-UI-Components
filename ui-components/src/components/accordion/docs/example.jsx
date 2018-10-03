import React from 'react';
import PropTypes from 'prop-types';
import Accordion from '..';
import Gridicons from 'gridicons';



export default class AccordionExampleUsage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Accordion title="Some accordion header number 1" subtitle="subtitle for this header" icon={<Gridicons icon="cross" />}>
              By the end of this tutorial, we will have created an API for a todo list application 
              that will enable us to create multiple todos, add list items to those todos, update the 
              list items and delete them. By working through an application in which we implement 
              functionality to add things, update and delete them from a database, this tutorial 
              will serve as an introduction to writing more advanced CRUD applications.
        </Accordion>
        <br />
        <Accordion title="Some accordion header with no subtitle" icon={<Gridicons icon="trash" />}>
            By the end of this tutorial, we will have created an API for a todo list application 
            that will enable us to create multiple todos, add list items to those todos, update the 
            list items and delete them. By working through an application in which we implement 
            functionality to add things, update and delete them from a database, this tutorial 
            will serve as an introduction to writing more advanced CRUD applications.
        </Accordion>
        <br />
        <Accordion title="Some accordion header with no icon" subtitle="subtitle for this header" >
              By the end of this tutorial, we will have created an API for a todo list application 
              that will enable us to create multiple todos, add list items to those todos, update the 
              list items and delete them. By working through an application in which we implement 
              functionality to add things, update and delete them from a database, this tutorial 
              will serve as an introduction to writing more advanced CRUD applications.
        </Accordion>
        <br />
        <Accordion title="Some accordion header neither icon nor subtitle" >
            By the end of this tutorial, we will have created an API for a todo list application 
            that will enable us to create multiple todos, add list items to those todos, update the 
            list items and delete them. By working through an application in which we implement 
            functionality to add things, update and delete them from a database, this tutorial 
            will serve as an introduction to writing more advanced CRUD applications.
      </Accordion>
      <br />
      <Accordion title="Some accordion header neither icon nor subtitle but initially open" initialExpanded >
            By the end of this tutorial, we will have created an API for a todo list application 
            that will enable us to create multiple todos, add list items to those todos, update the 
            list items and delete them. By working through an application in which we implement 
            functionality to add things, update and delete them from a database, this tutorial 
            will serve as an introduction to writing more advanced CRUD applications.
      </Accordion>
    </div>
    );
  }
}

