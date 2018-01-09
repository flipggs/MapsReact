import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Map from './Map/'

class App extends Component {
  render() {
    return (
      <div className="App">
       <Map 
        containerElement={<div style={{height: `100%`}} />}
        mapElement={<div style={{height: `400px`}} />}
        loadingElement={<div style={{height: `100%`}} />}
        googleMapURL='https://maps.googleapis.com/maps/api/js?key=AIzaSyBpMLzvSfHq-oypaqDDQ0VENn3HoDjAcQs&v=3.exp&libraries=geometry,drawing,places'
        />
      </div>
    );
  }
}

export default App;
