import React from 'react';


import Card from '..';
import '../styles.css';


export default class CardComponentExample extends React.Component {
  state = {
    softwareEngineering: 'Software Engineering',
    controlEngineering: 'Systems and Control Engineering',
    music: 'Music',
    fitness: 'Fitness & Health',
    realEstate: 'Real Estate Development',
    education: 'Teaching/Education',
    leadership: 'Leadership',
    business: 'Entrepreneurship'
  }


  render() {
    return (
      <div className="container mb-5">
        <div className="row mb-4 mt-4">         
            <h1 style={{textAlign: "right"}}>Card Component</h1>           
        </div>

        <div className="row mb-4">
          <div className="col-sm">
            <Card title={this.state.softwareEngineering} />             
          </div>
          <div className="col-sm">
          <Card title={this.state.controlEngineering} />
          </div>
        </div>
        <div className="row mb-4">
          <div className="col-sm">
          <Card title={this.state.music} />  
          </div>
          <div className="col-sm">
          <Card title={this.state.business} />
          </div>
        </div>
      
        <div className="row mb-4">
          <div className="col-sm">
          <Card title={this.state.leadership} />
          </div>
          <div className="col-sm">
          <Card title={this.state.fitness} />
          </div>
        </div>
        <div className="row mb-4">
          <div className="col-sm">
          <Card title={this.state.realEstate} />
          </div>
          <div className="col-sm">
          <Card title={this.state.education} />
          </div>
        </div>
        
         
      </div>        
    );
  }
}