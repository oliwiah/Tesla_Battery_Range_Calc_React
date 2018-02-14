import React from 'react';
import PropTypes from 'prop-types';
import './TeslaStats.css';

const TeslaStats = (props) => {
    const listItems = props.carstats.map((stat) => (
        <li key={stat.model}>
            <div className={`tesla-stats-icon tesla-stats-icon--${stat.model.toLowerCase()}`}></div>
            <p className="miles">{stat.miles}</p>
            <p className="km">{(stat.miles * 1.609).toFixed(0)}</p>
        </li>
    ));
    return (
        <div className="tesla-stats">
            <ul>
                {listItems}
            </ul>
        </div>
    )
};

TeslaStats.propTypes = {
    carstats: PropTypes.array
}

export default TeslaStats;