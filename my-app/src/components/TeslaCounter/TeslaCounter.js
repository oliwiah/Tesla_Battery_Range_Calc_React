import React from 'react';
import PropTypes from 'prop-types';
import './TeslaCounter.css';

class TeslaCounter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            animationEffect: false,
            direction: ''
        }
    }

    componentWillReceiveProps(nextProps) {
        const { currentValue, initValues } = nextProps;
        if (this.props.currentValue !== nextProps.currentValue) {
            const direction = this.props.currentValue < nextProps.currentValue ? 'increase' : 'decrese';
            this.setState({
                animationEffect: true,
                direction
            });

            setTimeout(
                () => {
                    this.setState({
                        animationEffect: false
                    })
                }, 200
            );
            return;
        }
    }

    render() {
        const { initValues, currentValue, increment, decrement } = this.props;
        const { animationEffect, direction } = this.state;
        const animationClass = animationEffect
            ? (direction==='increase'? 'speed-up-wheel-animation' : 'speed-down-wheel-animation')
            : '';

        return (
            <div className="tesla-counter">
                <p className="tesla-counter__title">{initValues.title}</p>
                <div className="tesla-counter__container cf">
                    <div className="tesla-counter__item">
                        <div className={`${animationClass}`}>
                            <p className="tesla-counter__number">
                                {currentValue}
                                <span>{initValues.unit}</span>
                            </p>
                        </div>
                        <div className="tesla-counter__controls">
                            <button
                                onClick={(e) => increment(e, initValues.title)}
                                disabled={currentValue >= initValues.max}>
                            </button>
                            <button
                                onClick={(e) => decrement(e, initValues.title)}
                                disabled={currentValue <= initValues.min}>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};

TeslaCounter.propTypes = {
    currentValue: PropTypes.number,
    increment: PropTypes.func,
    decrement: PropTypes.func,
    initValues: PropTypes.object
}

class TeslaCounter2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            animationEffect: false,
            direction: ''
        }
    }

    componentWillReceiveProps(nextProps) {
        const { currentValue, initValues } = nextProps;
        if (this.props.currentValue !== nextProps.currentValue) {
            const direction = this.props.currentValue < nextProps.currentValue ? 'increase' : 'decrese';
            this.setState({
                animationEffect: true,
                direction
            });

            setTimeout(
                () => {
                    this.setState({
                        animationEffect: false
                    })
                }, 200
            );
            return;
        }
    }

    render() {
        const { initValues, currentValue, increment, decrement } = this.props;
        const { animationEffect, direction } = this.state;
        const animationClass = animationEffect
            ? (direction==='increase'? 'speed-up-wheel-animation' : 'speed-down-wheel-animation')
            : '';

        return (
            <div className="tesla-counter">
                <p className="tesla-counter__title" id="hidden">{initValues.title}</p>
                <div className="tesla-counter__container cf">
                    <div className="tesla-counter__item">
                        <div className={`${animationClass}`}>
                            <p className="tesla-counter__number">
                                {currentValue}
                                <span id="km"> km/h </span>
                            </p>
                        </div>
                        <div className="tesla-counter__controls">
                            <button
                                onClick={(e) => increment(e, initValues.title)}
                                disabled={currentValue >= 113}
                            >
                            </button>
                            <button
                                onClick={(e) => decrement(e, initValues.title)}
                                disabled={currentValue <= 72}
                            >
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};

TeslaCounter2.propTypes = {
    currentValue: PropTypes.number,
    increment: PropTypes.func,
    decrement: PropTypes.func,
    initValues: PropTypes.object
}

class TeslaCounter3 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            animationEffect: false,
            direction: ''
        }
    }

    componentWillReceiveProps(nextProps) {
        const {currentValue, initValues} = nextProps;
        if (this.props.currentValue !== nextProps.currentValue) {
            const direction = this.props.currentValue < nextProps.currentValue ? 'increase' : 'decrese';
            this.setState({
                animationEffect: true,
                direction
            });

            setTimeout(
                () => {
                    this.setState({
                        animationEffect: false
                    })
                }, 200
            );
            return;
        }
    }

    render() {
        const {initValues, currentValue, increment, decrement} = this.props;
        const {animationEffect, direction} = this.state;
        const animationClass = animationEffect
            ? (direction === 'increase' ? 'speed-up-wheel-animation' : 'speed-down-wheel-animation')
            : '';

        return (
            <div className="tesla-counter">
                <p className="tesla-counter__title">{initValues.title}</p>
                <div className="tesla-counter__container cf">
                    <div className="tesla-counter__item">
                        <div className={`${animationClass}`}>
                            <p className="tesla-counter__number">
                                {currentValue}
                                <span id={"km"}>{initValues.unit} c</span>
                            </p>
                        </div>
                        <div className="tesla-counter__controls">
                            <button
                                onClick={(e) => increment(e, initValues.title)}
                                disabled={currentValue >= initValues.max}
                            >
                            </button>
                            <button
                                onClick={(e) => decrement(e, initValues.title)}
                                disabled={currentValue <= initValues.min}
                            >
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};

TeslaCounter3.propTypes = {
    currentValue: PropTypes.number,
    increment: PropTypes.func,
    decrement: PropTypes.func,
    initValues: PropTypes.object
}

class TeslaCounter4 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            animationEffect: false,
            direction: ''
        }
    }

    componentWillReceiveProps(nextProps) {
        const {currentValue, initValues} = nextProps;
        if (this.props.currentValue !== nextProps.currentValue) {
            const direction = this.props.currentValue < nextProps.currentValue ? 'increase' : 'decrese';
            this.setState({
                animationEffect: true,
                direction
            });

            setTimeout(
                () => {
                    this.setState({
                        animationEffect: false
                    })
                }, 200
            );
            return;
        }
    }

    render() {
        const {initValues, currentValue, increment, decrement} = this.props;
        const {animationEffect, direction} = this.state;
        const animationClass = animationEffect
            ? (direction === 'increase' ? 'speed-up-wheel-animation' : 'speed-down-wheel-animation')
            : '';

        return (
            <div className="tesla-counter">
                <p className="tesla-counter__title" id="hidden">{initValues.title}</p>
                <div className="tesla-counter__container cf">
                    <div className="tesla-counter__item">
                        <div className={`${animationClass}`}>
                            <p className="tesla-counter__number">
                                {currentValue}
                                <span id="km">{initValues.unit} f </span>
                            </p>
                        </div>
                        <div className="tesla-counter__controls">
                            <button
                                onClick={(e) => increment(e, initValues.title)}
                                disabled={currentValue >= 104}
                            >
                            </button>
                            <button
                                onClick={(e) => decrement(e, initValues.title)}
                                disabled={currentValue <= 14}
                            >
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};

TeslaCounter4.propTypes = {
    currentValue: PropTypes.number,
    increment: PropTypes.func,
    decrement: PropTypes.func,
    initValues: PropTypes.object
}

export {
    TeslaCounter,
    TeslaCounter2,
    TeslaCounter3,
    TeslaCounter4
}