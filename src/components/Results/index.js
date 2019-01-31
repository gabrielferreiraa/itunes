import React, { Component } from 'react';
import { List, Item, CoverImage, WrapperInformations, ArtistName, MusicName } from './ResultElements';
import { changeImageSize } from '../../helpers/transformers';
import http from '../../helpers/http';

const getResults = term =>
	http({
		method: 'GET',
		url: `/search?term=${term}&entity=song&limit=2`
	});

class Results extends Component {
	constructor(props) {
		super(props);

		this.state = {
			results: []
		};
	}

	async componentDidUpdate(prevProps) {
		const { term } = this.props;

		if (term === prevProps.term) {
			return;
		}

		const { results } = await getResults(term);
		console.log(this.audioRef);
		this.setState({ results });
	}

	render() {
		this.audioRef = [];

		const hasResults = this.state.results.length > 0;

		return (
			hasResults && (
				<List>
					{this.state.results.map((result, key) => (
						<Item key={key}>
							<CoverImage src={changeImageSize(result.artworkUrl100)} />
							<WrapperInformations>
								<ArtistName>{result.artistName}</ArtistName>
								<MusicName>{result.trackCensoredName}</MusicName>
								<audio
									controls
									preload="false"
									ref={audio => (this.audioRef[key] = audio)}
									style={{ display: 'none' }}
								>
									<source src="https://audio-ssl.itunes.apple.com/apple-assets-us-std-000001/AudioPreview60/v4/3d/bd/4e/3dbd4e40-37b6-197e-3fad-84a63acb9c54/mzaf_86674658287943224.plus.aac.p.mp3" />
								</audio>
								<button
									onClick={() => {
										console.log(this.audioRef[key]);
										if (this.audioRef[key].paused) {
											return this.audioRef[key].play();
										}

										return this.audioRef[key].pause();
									}}
								>
									{this.audioRef[key].paused ? 'play' : 'pause'}
								</button>
							</WrapperInformations>
						</Item>
					))}
				</List>
			)
		);
	}
}

export default Results;
