import React from 'react';
import styled from 'styled-components';
import { getYearFromRelease } from 'helpers/transformers';
import global from 'helpers/global';
import Audio from 'components/Audio';

const TrackItem = styled.li`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding-right: 10px;
	margin-bottom: 5px;
	border-bottom: 1px solid rgba(105, 105, 105, 0.058);
	padding-bottom: 5px;
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

const Track = ({ song }) => {
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
			<Audio audio={song.previewUrl} />
		</TrackItem>
	);
};

export default Track;
