import React, { Component } from 'react';
import { getYearFromRelease } from 'helpers/transformers';
import Audio from 'components/Audio';
import RoundedChart from 'components/RoundedChart';
import { TrackItem, Wrapper, Image, Info, Name, Collection, WrapperChart } from './elements';

const Chart = ({ percentage }) => (
	<WrapperChart>
		<RoundedChart percentage={percentage} />
	</WrapperChart>
);

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
				{percentage !== 0.0 && <Chart percentage={percentage} />}
				<Audio audio={song.previewUrl} onTimeUpdate={this.setPercentage} />
			</TrackItem>
		);
	}
}

export default Track;
