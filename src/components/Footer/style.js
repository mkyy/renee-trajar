import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1366px;
  height: 175px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  padding-top: 30px;

  .logo-button {
    display: flex;
    justify-content: space-between;

    img {
      width: 140px;
      height: 68px;
    }

    a {
      text-decoration: none;
      button {
        width: 40px;
        height: 40px;
        background-color: #fff;
        border: none;
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
        border-radius: 4px;
        display: flex;
        transform: rotate(-1800deg);
        align-items: center;
        justify-content: center;
        font-size: 20px;
        color: #014561;

        &:hover {
          cursor: pointer;
        }

        img {
          width: 8px;
          height: 14px;
        }
      }

      @media (max-width: 425px) {
        position: absolute;
        right: 20px;
      }
    }
    @media (max-width: 425px) {
      justify-content: center;
    }
  }
  .text-box {
    display: flex;
    justify-content: space-between;
    align-items: center;

    span {
      font-family: 'Poppins';
      font-weight: 300;
      font-size: 14px;
      line-height: 21px;
      color: #bdbdbd;
    }
    p {
      font-family: 'Poppins';
      font-weight: 300;
      font-size: 14px;
      line-height: 21px;
      text-align: center;
      color: #4f4f4f;
    }

    @media (max-width: 425px) {
      flex-direction: column;

      span {
        margin-top: 20px;
      }

      p {
        width: 70%;
      }
    }
  }
`;
