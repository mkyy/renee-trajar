import { Container, FixedMobileLogo, MobileContainer } from './style';
import { useRef, useEffect } from 'react';

const Header = () => {
  const mobileMenuRef = useRef();
  const mobileNavList = useRef();

  useEffect(() => {
    mobileMenuRef.current.addEventListener('click', () => handleClick());
  }, [mobileMenuRef]);

  const handleClick = () => {
    const navLinks = document.querySelectorAll('.nav-list li');

    navLinks.forEach((link, index) => {
      link.style.animation
        ? (link.style.animation = '')
        : (link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`);
    });
    mobileMenuRef.current.classList.toggle('active');
    mobileNavList.current.classList.toggle('active');
  };

  return (
    <>
      <Container>
        <div className='content'>
          <img id='logo' src='logo.svg' alt='' />
          <img id='black-logo' src='black_logo.svg' alt='' />
          <nav>
            <ul>
              <li>
                <a href='#'>empresa</a>
              </li>
              <li>
                <a href='#'>ternos</a>
              </li>
              <li>
                <a href='#'>camisaria</a>
              </li>
              <li>
                <a href='#'>depoimentos</a>
              </li>
              <li>
                <a href='#'>contatos</a>
              </li>
            </ul>
          </nav>
        </div>
      </Container>

      <FixedMobileLogo>
        <img src='logo.svg' alt='' />
      </FixedMobileLogo>

      <MobileContainer id='header-mobile'>
        <nav>
          <div ref={mobileMenuRef} className='mobile-menu'>
            <div className='line1'></div>
            <div className='line2'></div>
            <div className='line3'></div>
          </div>
          <ul ref={mobileNavList} className='nav-list'>
            <li>
              <a href='#'>empresa</a>
            </li>
            <li>
              <a href='#'>camisaria</a>
            </li>
            <li>
              <a href='#'>alfaiataria</a>
            </li>
            <li>
              <a href='#'>depoimentos</a>
            </li>
            <li>
              <a href='#'>contato</a>
            </li>
            <li>
              <div>
                <h2>Telefones</h2>
                <p>+55 (11) 3088-0757</p>
                <h2>e-mail</h2>
                <p>renee@reneetrajar.com.br</p>
              </div>
            </li>
          </ul>
        </nav>
      </MobileContainer>
    </>
  );
};
export default Header;
