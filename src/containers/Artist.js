import React, { Component } from 'react';
import { getArtist, getAlbumsFromArtist } from 'helpers/requests';
import ArtistWidget from 'components/ArtistWidget';
import { AlbumList, AlbumItem } from 'components/Album';

class Artist extends Component {
	state = {
		artist: [],
		albums: []
	};

	async componentDidMount() {
		const { artistId } = this.props.match.params;

		const artist = await getArtist(artistId);
		const albums = await getAlbumsFromArtist(artistId);

		this.setState({ artist, albums });
	}

	render() {
		const { artist, albums } = this.state;

		return (
			<div>
				{artist && <ArtistWidget artist={artist} />}
				<AlbumList>
					{albums.map((album, key) => (
						<AlbumItem album={album} key={key} />
					))}
				</AlbumList>
			</div>
		);
	}
}

export default Artist;
