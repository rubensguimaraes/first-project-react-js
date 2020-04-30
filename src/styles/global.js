import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    /* A propriedade box-sizing no CSS faz com que margin, padding e todos os outros espaçamentos
       que podemos adicionar num elemento, eles sejam sempre somados a largura do elemento.
       Por exemplo:
       Se tivermos um elemento com 280px de largura fixa e adicionarmos 10px de padding, ele não passar a ocupar
       300px, ele continua ocupando 280px, no entanto, o conteúdo desse elemento será exprimido para 260px,
       que representa 260px + 10px de cada lado.  Isto é muito bom, pois evita algumas quebras de layout*/
    box-sizing: border-box;
  }

  html, body, #root {
    min-height: 100%;
  }

  body {
    background: #7159c1;
    -webkit-font-smoothing: antialiased !important;
  }

  body, input, button {
    color: #222;
    font-size: 14px;
    font-family: Arial, Helvetica, sans-serif;
  }

  button {
    cursor: pointer;
  }
`;
