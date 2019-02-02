import http from 'helpers/http';

/**
 * Realiza uma busca por termos
 *
 * @param {*} term
 */
export const byTerm = term =>
	http({
		method: 'GET',
		url: `/search?term=${term}&entity=song`
	}).then(({ results }) => results);

/**
 * Realize uma busca pelo ID do artista e retorna o primeiro encontrado
 *
 * @param {*} artistId
 */
export const getArtist = artistId =>
	http({
		method: 'GET',
		url: `/lookup?id=${artistId}`
	}).then(({ results }) => results.shift());

/**
 * Obtem os 3 albuns mais recentes de um determinado artista
 *
 * @param {*} artistId
 */
export const getAlbumsFromArtist = artistId => {
	const filterAlbumsOnly = result => result.wrapperType === 'collection';

	return http({
		method: 'GET',
		url: `/lookup?id=${artistId}&entity=album&limit=3`
	}).then(({ results }) => results.filter(filterAlbumsOnly));
};

/**
 * Obtem 5 músicas de um determinado album
 *
 * @param {*} collectionId
 */
export const getSongsFromAlbum = collectionId => {
	const filterSongsOnly = result => result.wrapperType === 'track';

	return http({
		method: 'GET',
		url: `/lookup?id=${collectionId}&entity=song&limit=5`
	}).then(({ results }) => results.filter(filterSongsOnly));
};
