import React, { Component } from 'react';
import styled from 'styled-components';
import { getSongsFromAlbum } from 'helpers/requests';
import { changeImageSize } from 'helpers/transformers';
import Track from './track';

const StyledAlbumItem = styled.li`
	margin: 15px;
	width: calc(100% / 3);

	@media screen and (max-width: 920px) {
		width: 100%;
	}
`;

const TrackList = styled.ul`
	list-style-type: none;
	padding: 0;
`;

const CollectionCoverImage = styled.img`
	border-radius: 10px;
	width: 100%;
	margin-bottom: 10px;
`;

class AlbumItem extends Component {
	state = {
		songs: []
	};

	async componentDidMount() {
		const { collectionId } = this.props.album;

		const songs = await getSongsFromAlbum(collectionId);

		this.setState({ songs });
	}

	render() {
		const { album } = this.props;

		return (
			<StyledAlbumItem>
				<CollectionCoverImage
					src={changeImageSize(album.artworkUrl100)}
					alt={album.collectionName}
					title={album.collectionName}
				/>
				<TrackList>
					{this.state.songs.map(song => (
						<Track song={song} />
					))}
				</TrackList>
			</StyledAlbumItem>
		);
	}
}

export default AlbumItem;
