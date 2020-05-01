import styled, { keyframes, css } from 'styled-components';

export const Form = styled.form`
  margin-top: 30px;
  display: flex;
  flex-direction: row;

  input {
    flex: 1;
    border: 1px solid #eee;
    padding: 10px 15px;
    border-radius: 4px;
    font-size: 16px;
  }
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const SubmitButton = styled.button.attrs((props) => ({
  type: 'submit',
  disabled: props.loading,
}))`
  background: #7159c1;
  border: 0;
  padding: 0 15px;
  margin-left: 10px;
  border-radius: 4px;

  display: flex;
  justify-content: center;
  align-items: center;

  &[disabled] {
    cursor: not-allowed;
    opacity: 0.6;
  }

  ${(props) =>
    props.loading &&
    css`
      svg {
        animation: ${rotate} 2s linear infinite;
      }
    `}
  svg {
    margin: 0px !important;
  }
`;

export const List = styled.ul`
  list-style: none; /* Retira as bolinhas que ficam no início de uma lista */
  margin-top: 30px;

  /* Para cada linha o estilo será o seguinte */
  li {
    padding: 15px 0; /* Espaçamento acima e abaixo de 15px  */
    display: flex;
    flex-direction: row;
    justify-content: space-between; /* Colocará o título do repositório para a esquerda e o detalhes para esquerda */
    align-items: center; /* Força o alinhamento vertical do título e do detalhes */

    /* o & indica que pegaremos todos os li, e depois os li seguidos por um li anterior */
    /* ou seja, aplica a estilização em todos os li, exceto o primeiro. */
    & + li {
      border-top: 1px solid #eee; /* Cria uma borda cinza entre cada item (cada repositório digitado) */
    }
    /* O a representa o "detalhes" */
    a {
      color: #7159c1;
      text-decoration: none; /* retira o undeline */
    }
  }
`;
