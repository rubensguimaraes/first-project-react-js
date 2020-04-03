import styled from 'styled-components';

export const Loading = styled.div`
  color: #FFF;
  font-size: 30px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const Owner = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;

  a {
    color: #7159c1;
    font-size: 16px;
    text-decoration: none;
  }

  img {
    width: 120px;
    border-radius: 50%;
    margin-top: 20px;
  }

  h1 {
    font-size: 24px;
    margin-top: 10px;
  }

  p {
    margin-top: 5px;
    font-size: 14px;
    color: #666;
    line-height: 1.4;
    text-align: center;
    max-width: 400px;
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
  padding-top: 30px;
  margin-top: 30px;
  border-top: 1px solid #eee;
  list-style: none;

  li {
    display: flex;
    padding: 15px 10px;
    border: 1px solid #eee;
    border-radius: 4px;
  }

  & + li {
    margin-top: 10px;
  }

  img {
    width: 36px;
    height: 36px;
    border-radius: 50px;
    border: 2px solid #eee;
  }

  div {
    flex: 1;
    margin-left: 15px;

    strong {
      font-size: 16px;

      a {
        text-decoration: none;
        color: #333;
        &:hover {
          color: #7159c1;
        }
      }

      span {
        background: #eee;
        color: #333;
        border-radius: 2px;
        font-size: 12px;
        font-weight: 600;
        height: 20px;
        padding: 3px 4px;
        margin-left: 10px;
      }
    }

    p {
      margin-top: 5px;
      font-size: 12px;
      color: #999;
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
    &:nth-child(${props => props.active + 1}) {
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
