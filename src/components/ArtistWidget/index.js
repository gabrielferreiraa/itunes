import React from 'react';
import { Wrapper, Avatar, ArtistName, Genre } from './elements';

const ArtistWidget = ({ artist }) => (
	<Wrapper>
		<a href={artist.artistLinkUrl} target="_blank" rel="noopener noreferrer">
			<Avatar src="/not-found-avatar.png" alt={artist.artistName} title={artist.artistName} />
		</a>
		<ArtistName>{artist.artistName}</ArtistName>
		<Genre>{artist.primaryGenreName}</Genre>
	</Wrapper>
);

export default ArtistWidget;
