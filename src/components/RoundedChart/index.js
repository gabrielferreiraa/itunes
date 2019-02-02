import React from 'react';
import PropTypes from 'prop-types';
import global from 'helpers/global';
import CircularProgressbar from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const RoundedChart = ({ percentage }) => (
	<CircularProgressbar
		percentage={percentage}
		text={`${percentage.toFixed(0)}%`}
		styles={{
			path: {
				stroke: global.style.secondaryColor
			},
			trail: {
				stroke: global.style.primaryColor
			},
			text: {
				fill: global.style.secondaryColor,
				fontWeight: 900,
				fontSize: '1.6em'
			}
		}}
	/>
);

RoundedChart.defaultProps = {
	percentage: 0
};

RoundedChart.propTypes = {
	percentage: PropTypes.number
};

export default RoundedChart;
