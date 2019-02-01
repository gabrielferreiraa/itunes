/**
 * Método responsável por receber a URL de uma determinada imagem da API de iTunes
 * e mudar a dimensão dela para 450px
 */
export const changeImageSize = urlImage => urlImage.replace('100x100', '450x450');

/**
 * Obtém o ano a partir de um release date da api:
 * Ex: 1991-09-04T07:00:00Z
 *
 * @param {*} releaseDate
 */
export const getYearFromRelease = releaseDate => releaseDate.split('-').shift();
