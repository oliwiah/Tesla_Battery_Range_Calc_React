import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import TeslaBattery from './containers/TeslaBattery/TeslaBattery';
import TeslaCar from './components/TeslaCar/TeslaCar';
import TeslaNotice from './components/TeslaNotice/TeslaNotice';

class App extends Component {
  render() {
    return (
        <div className="App">
            <Header />
            <TeslaBattery>
                <TeslaCar />

                <TeslaNotice />
            </TeslaBattery>
        </div>

    );
  }
}

export default App;
