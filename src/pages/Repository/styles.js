import styled from 'styled-components';

export const Loading = styled.div`
  color: #fff; /* Cor branca */
  font-size: 30px; /* tamanho bem grande */
  font-weight: bold; /* Negrito */
  display: flex; /* Cria um flex container a nível de bloco */
  justify-content: center; /* Alinha orizontalmente ao centro */
  align-items: center;
  height: 100vh; /* Altura total da tela */
`;

export const Owner = styled.header`
  display: flex;
  flex-direction: column; /* Para ficar um item embaixo do outro (imagem, título e descrição) */
  align-items: center; /* Serão alinhados horizontalmente ao centro */

  a {
    color: #7159c1;
    font-size: 16px;
    text-decoration: none; /* Retira o underline do link */
  }

  img {
    width: 120px; /* Para a imagem da logo daremos uma largura de 120px */
    border-radius: 50%; /* Como nem todas as bordas são arredondadas, isto garante que todas sejam arredondaddas */
    margin-top: 20px; /* Como teremos um link para voltarmos para a página inicial acima da logo, definimos eeste espaço */
  }

  h1 {
    font-size: 24px;
    margin-top: 10px; /* Distância do nome do repositório para a logo */
  }

  p {
    margin-top: 5px;
    font-size: 14px;
    color: #666; /* Para a descrição do repositório colocaremos um cinza mais claro */
    line-height: 1.4; /* Aumenta 40% do line-height tradicional */
    text-align: center;
    max-width: 400px; /* Largura máxima de 400px, desta forma ele fará uma quebra automática  */
  }

  select {
    flex: 1;
    margin-top: 15px;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 5px 10px;
  }
`;

export const IssueList = styled.ul`
  padding-top: 30px; /* distancia a lista do header das informações do repositório */
  margin-top: 30px;
  border-top: 1px solid #eee; /* Distância da lista à borda */
  list-style: none;

  li {
    display: flex; /* Já faz o alinhamento horizontal do que tem no li */
    padding: 15px 10px;
    border: 1px solid #eee;
    border-radius: 4px; /* Cria uma borda para cada issue */
  }

  /* O & faz a estilização da segunda linha em diante, ou seja, adiciona a margem a partir do 2o item */
  & + li {
    margin-top: 10px;
  }

  /* Estilização da imagem */
  img {
    width: 36px; /* Largura de 36px */
    height: 36px; /* Altura de 36px */
    border-radius: 50px; /* Deixa a imagem redonda */
    border: 2px solid #eee; /* Cria uma borda para a imagem */
  }

  /* A estilização da div compreende o que está por volta do título da issue e do login do autor */
  div {
    flex: 1; /* Ocupa todo o espaço possível (Não deixa ultrapassar o limite da tela) */
    margin-left: 15px; /* Distanciamento da imagem */

    strong {
      font-size: 16px; /* Estilização do título da issue */

      /* Estilização do título da descrição da issue */
      a {
        text-decoration: none;
        color: #333;
        /* Define uma cor para quando o usuário passar o mouse por cima da descrição da issue */
        &:hover {
          color: #7159c1;
        }
      }

      /* Estilização do span que envolve as labels das issues */
      span {
        background: #eee;
        color: #333;
        border-radius: 2px;
        font-size: 12px;
        font-weight: 600;
        height: 20px;
        padding: 3px 4px; /* 3 acima e abaixo e 4 nas laterais (direita e esquerda) */
        margin-left: 10px; /* distância do título */
      }
    }

    /* Estilização para o nome do autor da issue */
    p {
      margin-top: 5px;
      font-size: 12px;
      color: #999; /* Um cinze bem apagado */
    }
  }
`;

export const IssueFilter = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: center;
  button {
    border-radius: 4px;
    outline: 0;
    border: 0;
    padding: 10px;
    margin: 0 5px;
    &:nth-child(${(props) => props.active + 1}) {
      background: #7159c1;
      color: #fff;
    }
  }
`;

export const Pagination = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: space-between;
  margin-top: 30px;
  padding: 0px 10px;

  span {
    background-color: #fff;
  }

  svg {
    margin-right: 0px;
    cursor: pointer;
    color: #fff;
    background-color: #7159c1;
    padding: 5px;
    border: 1px solid #ccc;
    border-radius: 4px;
    height: 30px;
    width: 30px;
    &[disabled] {
      cursor: not-allowed;
      opacity: 0.6;
    }
  }
`;
