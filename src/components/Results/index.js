import React, { Component } from "react";
import {
  List,
  Item,
  CoverImage,
  WrapperInformations,
  ArtistName,
  MusicName
} from "./elements";
import Audio from "components/Audio";
import { changeImageSize } from "helpers/transformers";
import http from "helpers/http";
import { Link } from "react-router-dom";

const getResults = term =>
  http({
    method: "GET",
    url: `/search?term=${term}&entity=song`
  });

class Results extends Component {
  state = {
    results: []
  };

  async componentDidUpdate(prevProps) {
    const { term } = this.props;

    if (term === prevProps.term) {
      return;
    }

    const { results } = await getResults(term);

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
                <ArtistName title="Clique aqui para ver informações sobre o artista">
                  <Link to={`/artist/${result.artistId}`}>
                    {result.artistName}
                  </Link>
                </ArtistName>
                <MusicName>{result.trackCensoredName}</MusicName>
                <Audio
                  audio={result.previewUrl}
                  onTimeUpdate={percent => console.log(percent)}
                />
              </WrapperInformations>
            </Item>
          ))}
        </List>
      )
    );
  }
}

export default Results;
