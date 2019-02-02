import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const fileNameBySituation = situation => (situation === 'playing' ? 'paused' : 'playing');

const PlayerBtn = styled.div`
	right: 0;
	top: 0;
	height: 30px;
	width: 30px;
	background: transparent;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;

	&:before {
		content: url(/${props => fileNameBySituation(props.situation)}.svg);
	}
`;

const StyledAudio = styled.audio`
	display: none;
`;

class Audio extends Component {
	state = {
		situation: 'paused'
	};

	audioRef = React.createRef();

	toggleSituation = () => {
		const isPlaying = this.state.situation === 'playing';
		this.setState({ situation: isPlaying ? 'paused' : 'playing' });
	};

	isPaused = () => !!this.audioRef.current.paused;

	percentage = () => {
		const hasPropsOnTimeUpdate = !!this.props.onTimeUpdate;
		const hasAudioRef = !!this.audioRef.current;

		if (!hasAudioRef) {
			return;
		}

		const currentTime = this.audioRef.current.currentTime;
		const duration = this.audioRef.current.duration;

		if (duration === currentTime) {
			this.toggleSituation();
			this.audioRef.current.currentTime = 0;
		}

		if (!hasPropsOnTimeUpdate) {
			return;
		}

		const percent = (currentTime / duration) * 100;

		this.props.onTimeUpdate(percent);
	};

	handleClickAudio = () => {
		if (this.isPaused()) {
			this.toggleSituation();

			return this.audioRef.current.play();
		}

		this.toggleSituation();

		return this.audioRef.current.pause();
	};

	render() {
		const { situation } = this.state;
		const { audio } = this.props;

		return (
			<div>
				<StyledAudio controls preload="false" onTimeUpdate={this.percentage} ref={this.audioRef}>
					<source src={audio} />
				</StyledAudio>
				<PlayerBtn
					onClick={this.handleClickAudio}
					situation={situation}
					title="Clique aqui para ouvir o preview"
				/>
			</div>
		);
	}
}

Audio.propTypes = {
	audio: PropTypes.string.isRequired,
	onTimeUpdate: PropTypes.func
};

export default Audio;
