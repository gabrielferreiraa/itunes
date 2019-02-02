import React, { Fragment, Component } from 'react';
import styled from 'styled-components';
import { getArtist, getAlbumsFromArtist } from 'helpers/requests';
import ArtistWidget from 'components/ArtistWidget';
import { AlbumList, AlbumItem } from 'components/Album';
import { Link } from 'react-router-dom';
import global from 'helpers/global';

const Back = styled(Link)`
	position: absolute;
	top: 15px;
	left: 15px;
	color: ${global.style.primaryColor};
	font-weight: 700;
	text-decoration: none;
`;

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
			<Fragment>
				<Back to="/">voltar</Back>
				{artist && <ArtistWidget artist={artist} />}
				<AlbumList>
					{albums.map((album, key) => (
						<AlbumItem album={album} key={key} />
					))}
				</AlbumList>
			</Fragment>
		);
	}
}

export default Artist;
