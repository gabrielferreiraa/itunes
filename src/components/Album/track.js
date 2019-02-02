import React, { Component } from 'react';
import styled from 'styled-components';
import { getYearFromRelease } from 'helpers/transformers';
import global from 'helpers/global';
import Audio from 'components/Audio';
import CircularProgressbar from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const TrackItem = styled.li`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding-right: 10px;
	margin-bottom: 5px;
	border-bottom: 1px solid rgba(105, 105, 105, 0.058);
	padding-bottom: 5px;
	position: relative;
`;

const Image = styled.img`
	margin-right: 7px;
	border-radius: 10px;
`;

const Name = styled.span`
	width: 100%;
	font-weight: 700;
	color: ${global.style.primaryColor};
`;

const Collection = styled.small`
	text-transform: uppercase;
	font-size: 0.6em;
	font-weight: 900;
	color: ${global.style.secondaryColor};
`;

const Info = styled.div`
	display: flex;
	align-items: center;
	flex-wrap: wrap;
`;

const Wrapper = styled.div`
	display: flex;
	align-items: center;
`;

class Track extends Component {
	state = {
		percentage: 0.0
	};

	setPercentage = percentage => this.setState({ percentage });

	render() {
		const { percentage } = this.state;

		const { song } = this.props;
		const releaseYear = getYearFromRelease(song.releaseDate);

		return (
			<TrackItem>
				<Wrapper>
					<Image src={song.artworkUrl100} alt={song.trackName} title={song.trackName} />
					<Info>
						<Name>{song.trackName}</Name>
						<Collection>
							{song.collectionName} ({releaseYear})
						</Collection>
					</Info>
				</Wrapper>
				{percentage !== 0.0 && (
					<div style={{ width: 33, position: 'absolute', right: 50 }}>
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
					</div>
				)}
				<Audio audio={song.previewUrl} onTimeUpdate={this.setPercentage} percentage={percentage} />
			</TrackItem>
		);
	}
}

export default Track;
