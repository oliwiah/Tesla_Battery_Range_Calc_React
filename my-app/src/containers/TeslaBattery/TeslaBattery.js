import React from 'react';
import './TeslaBattery.css';
import TeslaNotice from '../../components/TeslaNotice/TeslaNotice';
import TeslaCar from '../../components/TeslaCar/TeslaCar';
import TeslaStats from '../../components/TeslaStats/TeslaStats';
import {TeslaCounter,TeslaCounter2, TeslaCounter3} from '../../components/TeslaCounter/TeslaCounter';
import TeslaClimate from '../../components/TeslaClimate/TeslaClimate';
import TeslaWheels from '../../components/TeslaWheels/TeslaWheels';
import { getModelData } from '../../services/BatteryService';

class TeslaBattery extends React.Component {
    constructor(props) {
        super(props);

        this.calculateStats = this.calculateStats.bind(this);
        this.statsUpdate = this.statsUpdate.bind(this);
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
        this.updateCounterState = this.updateCounterState.bind(this);
        this.handleChangeClimate = this.handleChangeClimate.bind(this);
        this.handleChangeWheels = this.handleChangeWheels.bind(this);

        this.state = {
            carstats: [],
            config: {
                speed: 55,
                temperature: 20,
                climate: true,
                wheels: 19
            }
        }
    }

    calculateStats = (models, value) => {
        const dataModels = getModelData();
        return models.map(model => {
            const { speed, temperature, climate, wheels } = value;
            const miles = dataModels[model][wheels][climate ? 'on' : 'off'].speed[speed][temperature];
            return {
                model,
                miles
            };
        });
    }

    statsUpdate() {
        const carModels = ['60', '60D', '75', '75D', '90D', 'P100D'];
        this.setState({
            carstats: this.calculateStats(carModels, this.state.config)
        });
    }

    componentDidMount() {
        this.statsUpdate();
    }

    updateCounterState(title, newValue) {
        const config = { ...this.state.config };
        // update config state with new value
        title === 'Speed' ? config['speed'] = newValue : config['temperature'] = newValue;
        // update our state
        this.setState({ config }, () => {this.statsUpdate()});
    }
    increment(e, title) {
        e.preventDefault();
        let currentValue, maxValue, step;
        const { speed, temperature } = this.props.counterDefaultVal;
        if (title === 'Speed') {
            currentValue = this.state.config.speed;
            maxValue = speed.max;
            step = speed.step;
        } else {
            currentValue = this.state.config.temperature;
            maxValue = temperature.max;
            step = temperature.step;
        }

        if (currentValue < maxValue) {
            const newValue = currentValue + step;
            this.updateCounterState(title, newValue);
        }
    }

    decrement(e, title) {
        e.preventDefault();
        let currentValue, minValue, step;
        const { speed, temperature } = this.props.counterDefaultVal;
        if (title === 'Speed') {
            currentValue = this.state.config.speed;
            minValue = speed.min;
            step = speed.step;
        } else {
            currentValue = this.state.config.temperature;
            minValue = temperature.min;
            step = temperature.step;
        }

        if (currentValue > minValue) {
            const newValue = currentValue - step;
            this.updateCounterState(title, newValue);
        }
    }

    // handle aircon & heating click event handler
    handleChangeClimate() {
        const config = {...this.state.config};
        config['climate'] = !this.state.config.climate;
        this.setState({ config }, () => {this.statsUpdate()});
    }

    handleChangeWheels(size) {
        const config = {...this.state.config};
        config['wheels'] = size;
        this.setState({ config }, () => {this.statsUpdate()});
    }

    render() {
        const { config, carstats } = this.state;
        return (
            <form className="tesla-battery">
                <h1>Range Per Charge</h1>
                <TeslaCar wheelsize={config.wheels} />
                <TeslaStats carstats={carstats} />
                <div className="tesla-controls cf">
                    <div className="tesla-center-div-main">
                        <div className="tesla-center-div-in">
                            <TeslaCounter
                                currentValue={this.state.config.speed}
                                initValues={this.props.counterDefaultVal.speed}
                                increment={this.increment}
                                decrement={this.decrement}
                            />
                            <TeslaCounter2
                                currentValue={Number((this.state.config.speed * 1.609).toFixed(0))}
                                initValues={this.props.counterDefaultVal.speed}
                                increment={this.increment}
                                decrement={this.decrement}
                            />
                            <TeslaClimate
                                value={this.state.config.climate}
                                limit={this.state.config.temperature > 10}
                                handleChangeClimate={this.handleChangeClimate}
                            />
                            <TeslaCounter
                                currentValue={this.state.config.temperature}
                                initValues={this.props.counterDefaultVal.temperature}
                                increment={this.increment}
                                decrement={this.decrement}
                            />
                            <TeslaCounter3
                                currentValue={(this.state.config.temperature*1.8)+32}
                                initValues={this.props.counterDefaultVal.temperature}
                                increment={this.increment}
                                decrement={this.decrement}
                            />
                        </div>
                    </div>
                </div>
                <div className="tesla-controls cf">
                    <div className="tesla-center-div-main">
                        <TeslaWheels
                           value={this.state.config.wheels}
                           handleChangeWheels={this.handleChangeWheels}
                        />
                    </div>
                </div>
                <TeslaNotice />
            </form>
        )
    }

}

export default TeslaBattery;