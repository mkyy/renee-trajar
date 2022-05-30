import styled from 'styled-components';

export const Container = styled.header`
  height: 111px;
  width: 100vw;
  background: linear-gradient(180deg, #000000 29.73%, rgba(0, 0, 0, 0) 100%);
  display: flex;
  position: fixed;
  z-index: 10;

  .content {
    width: 100%;
    max-width: 1366px;
    padding: 0 40px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;

    #logo {
      width: 127.96px;
      height: 57px;
    }

    #black-logo {
      width: 78.46px;
      height: 38px;
      display: none;
    }

    nav ul {
      display: flex;
      align-items: center;
      list-style: none;

      li a {
        text-decoration: none;
        font-family: 'Lato';
        font-weight: 300;
        font-size: 16px;
        line-height: 19px;
        text-transform: uppercase;
        color: #949494;
        margin-left: 40px;
        transition: 0.5s ease;

        &:hover {
          color: rgba(28, 134, 164, 1);
        }
      }
    }
  }
  @media (max-width: 728px) {
    display: none;
  }
`;

export const FixedMobileLogo = styled.div`
  background-color: transparent;
  width: 100vw;
  height: 160px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;

  img {
    width: 148px;
    height: 66px;
  }

  @media (min-width: 426px) {
    display: none;
  }
`;

export const MobileContainer = styled.header`
  display: none;
  position: fixed;
  top: 0;
  width: 100vw;
  height: fit-content;
  transition: ease 0.5s;
  z-index: 10;

  nav {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    font-family: system-ui, -apple-system, Helvetica, Arial, sans-serif;
    background: transparent;
    height: 15vh;
    margin: 0 auto;
    width: 100%;
  }

  .nav-list {
    list-style: none;
    display: flex;
    margin: 0;
    position: absolute;
    top: 0;
    right: 0;
    width: 100vw;
    height: 100vh;
    background: #013145;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    transform: translateX(100%);
    transition: transform 0.3s ease-in;
  }

  .nav-list li {
    letter-spacing: 3px;
    opacity: 0;
    margin-top: 40px;

    a {
      text-decoration: none;
      color: rgba(190, 150, 103, 1);
      text-transform: uppercase;
      font-size: 26px;

      &:hover {
        color: #fff;
      }
    }

    div {
      h2 {
        font-family: 'Lato';
        font-weight: 300;
        font-size: 18px;
        line-height: 22px;
        text-transform: uppercase;
        color: #1c86a4;
        margin: 10px;
        text-align: center;
      }
      p {
        font-family: 'Lato';
        font-weight: 300;
        font-size: 16px;
        line-height: 150.1%;
        color: #828282;
        margin-top: 0;
        text-align: center;
      }
    }
  }

  .mobile-menu {
    cursor: pointer;
    z-index: 10;
    padding-right: 20px;
  }

  .mobile-menu div {
    width: 32px;
    height: 2px;
    background: #fff;
    margin: 8px;
    transition: 0.3s;
  }

  .nav-list.active {
    transform: translateX(0);
    padding: 0;
  }

  .mobile-menu.active .line1 {
    transform: rotate(-45deg) translate(-8px, 8px);
  }

  .mobile-menu.active .line2 {
    opacity: 0;
  }

  .mobile-menu.active .line3 {
    transform: rotate(45deg) translate(-5px, -7px);
  }

  @keyframes navLinkFade {
    from {
      opacity: 0;
      transform: translateX(50px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @media (max-width: 728px) {
    display: inherit;
  }
`;
