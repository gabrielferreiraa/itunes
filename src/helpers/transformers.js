/**
 * Método responsável por receber a URL de uma determinada imagem da API de iTunes
 * e mudar a dimensão dela para 450px
 */
export const changeImageSize = urlImage => urlImage.replace('100x100', '450x450');
