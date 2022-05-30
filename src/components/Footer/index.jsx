import { Container } from './style';

const Footer = () => {
  return (
    <footer style={{ borderTop: '1px solid #BE9667' }}>
      <Container>
        <div className='logo-button'>
          <img src='black_logo.svg' alt='' />
          <a href='#'>
            <button>
              <img src='up.svg' alt='' />
            </button>
          </a>
        </div>
        <div className='text-box'>
          <span>CNPJ:04.487.685/0001-01</span>
          <p>Copyright: 2021 © Renee Trajar - Todos os direitos reservados.</p>
        </div>
      </Container>
    </footer>
  );
};
export default Footer;
