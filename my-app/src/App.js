import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import TeslaBattery from './containers/TeslaBattery/TeslaBattery';
import TeslaCar from './components/TeslaCar/TeslaCar';
import TeslaNotice from './components/TeslaNotice/TeslaNotice';
import TeslaStats from './components/TeslaStats/TeslaStats';

const counterDefaultVal = {
    speed: {
        title: "Speed",
        unit: "mph",
        step: 5,
        min: 45,
        max: 70
    },
    temperature: {
        title: "Outside Temperature",
        unit: "°",
        step: 10,
        min: -10,
        max: 40
    }
};

class App extends Component {
  render() {
    return (
        <div className="App">
            <Header />
            <TeslaBattery counterDefaultVal={counterDefaultVal}>
                <TeslaCar />
                <TeslaStats />

                <TeslaNotice />
            </TeslaBattery>
        </div>

    );
  }
}

export default App;
