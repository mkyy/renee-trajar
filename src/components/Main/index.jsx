import {
  AboutMobile,
  AboutWrapper,
  CommentMobile,
  CommentWrapper,
  Contact,
  Depositions,
  DualContent,
  PromoWrapper,
  ProsWrapper,
  WelcomeWrapper,
} from './style';
import { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Main = () => {
  const handleScroll = () => {
    if (window.scrollY > 220) {
      document.getElementsByTagName('header')[0].classList.add('h-active');
    } else {
      document.getElementsByTagName('header')[0].classList.remove('h-active');
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', () => handleScroll());
  }, []);

  return (
    <main>
      <WelcomeWrapper>
        <div className='content'>
          <h2 className='title'>
            <span>Elegante é ter um </span> <strong>ALFAIATE</strong>{' '}
            <span> para chamar de seu.</span>
          </h2>
          <p>
            COMPRE HOJE, <strong> PAGUE EM ATÉ 3X COM 12% DE DESCONTO</strong> E TENHA 10 MESES PARA
            CONFECCIONAR!
          </p>
          <button>Faça já um Orçamento</button>
        </div>
      </WelcomeWrapper>

      <AboutWrapper>
        <div className='content'>
          <img id='renee-photo' src='renee.png' alt='' />
          <div className='text-box'>
            <h1>Renee Trajar</h1>
            <p>
              Com mais de 35 anos de experiência em camisas, calças e ternos sob medida, possuímos
              profissionais experientes e altamente qualificados. <br />
              <br /> Cada cliente tem seu molde exclusivamente desenvolvido para seu biotipo através
              das medidas tiradas pelo próprio Sr. Renee, no escritório ou residência do cliente.
            </p>

            <quote>
              {' '}
              “Nosso objetivo é superar a expectativa do cliente proporcionando-lhe satisfação ao
              usar nossos produtos, aliado a um relacionamento franco e honesto, valorizando o ser
              humano.” <br /> <span>Renee Trajar</span>{' '}
            </quote>
            <img id='quote-img' src='quote.svg' alt='' />

            <button>Agende uma visita!</button>
          </div>
        </div>
      </AboutWrapper>

      <AboutMobile>
        <h1>Renee Trajar</h1>
        <img id='renee-photo' src='rene_mobile.png' alt='' />

        <p>
          Com mais de 35 anos de experiência em camisas, calças e ternos sob medida, possuímos
          profissionais experientes e altamente qualificados. <br />
          <br /> Cada cliente tem seu molde exclusivamente desenvolvido para seu biotipo através das
          medidas tiradas pelo próprio Sr. Renee, no escritório ou residência do cliente.
        </p>

        <quote>
          {' '}
          “Nosso objetivo é superar a expectativa do cliente proporcionando-lhe satisfação ao usar
          nossos produtos, aliado a um relacionamento franco e honesto, valorizando o ser humano.”{' '}
          <br /> <span>Renee Trajar</span>{' '}
        </quote>

        <button>Agende uma visita!</button>
      </AboutMobile>

      <CommentWrapper>
        <div className='bg-color'></div>
        <div className='content'>
          <div className='sub-content'>
            <div className='text-box'>
              <p>
                “Faço roupas com o Renee Trajar há mais de duas décadas, o serviço é impecável em
                todos os detalhes, desde a costura ao caimento. O Renee tem uma equipe de mestre!”
              </p>
              <h2>Nelson Garey</h2>
              <h3>Advogado | Nelson Garey Advogados Associados</h3>
            </div>
            <img src='nelson.png' alt='' />
          </div>

          <div className='img-bg'>
            <div className='bg'></div>
            <img id='bg-img-comment' src='nelson2.png' alt='' />
          </div>
        </div>
      </CommentWrapper>

      <CommentMobile>
        <div className='bg-photo'>
          <div className='img-bg'>
            <div className='bg'></div>
            <img id='bg-img-comment' src='nelson_mobile.png' alt='' />
          </div>
          <img id='nelson-img' src='nelson.png' alt='' />
        </div>
        <div className='text-box'>
          <p>
            “Faço roupas com o Renee Trajar há mais de duas décadas, o serviço é impecável em todos
            os detalhes, desde a costura ao caimento. O Renee tem uma equipe de mestre!”
          </p>
          <h2>Nelson Garey</h2>
          <h3>Advogado | Nelson Garey Advogados Associados</h3>
        </div>
      </CommentMobile>

      <ProsWrapper>
        <div className='content'>
          <div className='item'>
            <img src='item1.svg' alt='' />
            <h1>qualidade</h1>
            <p>Camisaria e Alfaiataria 100% artesanal.</p>
          </div>
          <div className='item'>
            <img src='item2.svg' alt='' />
            <h1>confiança</h1>
            <p>Atendimento personalizado no escritório ou residência.</p>
          </div>
          <div className='item'>
            <img src='item3.svg' alt='' />
            <h1>qualidade</h1>
            <p>Tradição e modernidade proporcionando elegância.</p>
          </div>
        </div>
      </ProsWrapper>

      <PromoWrapper>
        <div className='bg'></div>
        <div className='content'>
          <div className='text-box'>
            <h1>Condição Imperdível</h1>
            <ul>
              <li>Compre hoje e garanta:</li>
              <li>12% de desconto e pagamento em até 3x sem juros;</li>
              <li>
                Até 10 meses para confeccionar sua roupa. Não se preocupe se suas medidas aumentaram
                ou diminuíram, estará sempre elegante;
              </li>
              <li>Condição muito especial por tempo limitado;</li>
              <li>Poder presentear alguém com uma roupa de alta costura, exclusiva.</li>
            </ul>
            <button>Garanta essa condição especial! </button>
          </div>
          <div className='image'>
            <img src='suit_holding.png' alt='' />
          </div>
        </div>
      </PromoWrapper>

      <DualContent>
        <div className='content'>
          <div className='layer'>
            <div className='img-container'>
              <img src='shirt.png' alt='' />
              <div className='border'></div>
            </div>
            <div className='text-container'>
              <h1>Camisaria</h1>
              <h2>confeccionadas artesanalmente</h2>
              <div className='lists'>
                <ul>
                  <li>100% Algodão</li>
                  <li>Monograma</li>
                  <li>Slim</li>
                </ul>
                <ul>
                  <li>Nacionais e Importadas</li>
                  <li>Tradicionais e Esportivas</li>
                  <li>Casamentos</li>
                </ul>
              </div>
              <button className='btn'>Quero um orçamento</button>
            </div>
          </div>

          <div className='layer'>
            <div className='text-container'>
              <h1>Alfaiataria</h1>
              <h2>totalmente feito a mão sob medida</h2>
              <div className='lists'>
                <ul>
                  <li>Fio Super 120 e 130</li>
                  <li>Lã fria Australiana</li>
                  <li>Botões Importados</li>
                </ul>
                <ul>
                  <li>Ternos e Calças</li>
                  <li>Paletós e Smokings</li>
                  <li>Sociais e Espotivos</li>
                </ul>
              </div>
              <button>Quero um orçamento</button>
            </div>
            <div className='img-container'>
              <img src='suit.png' alt='' />
              <div className='border'></div>
            </div>
          </div>
        </div>
      </DualContent>

      <Depositions>
        <div className='bg'></div>
        <div className='content'>
          <h1>Depoimentos</h1>

          <Swiper
            className='swiper-desktop'
            pagination={true}
            spaceBetween={50}
            slidesPerView={1}
            navigation={true}
            modules={[Navigation, Pagination]}
          >
            <SwiperSlide>
              <div className='deposition'>
                <img src='depositions/img1.png' alt='' />
                <p>
                  “Sou cliente do Renee há uns 12 anos. Nosso primeiro contato foi por intermédio de
                  meu pai, que já tem uma história de décadas com o querido Renee. O excelente
                  atendimento antes e pós venda e a alta qualidade dos materiais usados colocam a
                  Renee Trajar em um patamar acima dos demais do ramo.”
                </p>
                <h5>William H. M. Garey</h5>
                <h6>Advogado | Nelson Garey Advogados Associados</h6>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='deposition'>
                <img src='depositions/img2.png' alt='' />
                <p>
                  “Seu corte tanto de camisas, bem como de ternos são impecáveis, muitos dos meus
                  amigos tem elogiado a vestimenta. Recomendo para quem gosta de perfeição. Estamos
                  nos servindo do trabalho do Renee Trajar há mais de vinte anos.”
                </p>
                <h5>Domingos Orestes Chiomento</h5>
                <h6>DOC Contabilidade Empresarial</h6>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className='deposition'>
                <img src='depositions/img3.png' alt='' />
                <p>
                  “Tenho a honra de afirmar que enquanto nossas vidas perdurarem o meu conceito é
                  sempre melhor em relação ao Renee Trajar, sua pessoa, ao profissional competente e
                  idôneo, sempre pontual, atencioso e preocupado em atender da melhor maneira os
                  anseios de seus clientes, incluindo este signatário.”
                </p>
                <h5>José Mauro Marques</h5>
                <h6>Advogado</h6>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='deposition'>
                <img src='depositions/img4.png' alt='' />
                <p>
                  “Conheço o excelente e qualificado trabalho do Renee Trajar e sua equipe há
                  décadas. Para camisas e ternos, o Renee é imbatível, sempre com preços justos,
                  produtos de excelente qualidade e especialmente tudo é feito com muito cuidado e
                  qualidade. Cumpre os prazos com atendimento de alto nível. O Renee trabalha com
                  perfeição nos detalhes.”
                </p>
                <h5>Custódio Pereira</h5>
                <h6>
                  Membro do CONSOCIAL - Conselho Superior de Responsabilidade Social da FIESP-SP
                </h6>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='deposition'>
                <img src='depositions/img5.png' alt='' />
                <p>
                  "Há mais de 10 anos sou cliente da Renee Trajar. A qualidade, caimento e
                  possibilidade de customização das roupas, aliados ao excelente atendimento e prazo
                  de entrega são fatores decisivos para mim."
                </p>
                <h5>Josimar Henrique da Silva</h5>
                <h6>Diretor Presidente | Grupo Hebron</h6>
              </div>
            </SwiperSlide>
          </Swiper>
          <Swiper
            className='swiper-mobile'
            pagination={true}
            spaceBetween={50}
            slidesPerView={1}
            modules={[Pagination]}
          >
            <SwiperSlide>
              <div className='deposition'>
                <img src='depositions/img1.png' alt='' />
                <p>
                  “Sou cliente do Renee há uns 12 anos. Nosso primeiro contato foi por intermédio de
                  meu pai, que já tem uma história de décadas com o querido Renee. O excelente
                  atendimento antes e pós venda e a alta qualidade dos materiais usados colocam a
                  Renee Trajar em um patamar acima dos demais do ramo.”
                </p>
                <h5>William H. M. Garey</h5>
                <h6>Advogado | Nelson Garey Advogados Associados</h6>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='deposition'>
                <img src='depositions/img2.png' alt='' />
                <p>
                  “Seu corte tanto de camisas, bem como de ternos são impecáveis, muitos dos meus
                  amigos tem elogiado a vestimenta. Recomendo para quem gosta de perfeição. Estamos
                  nos servindo do trabalho do Renee Trajar há mais de vinte anos.”
                </p>
                <h5>Domingos Orestes Chiomento</h5>
                <h6>DOC Contabilidade Empresarial</h6>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className='deposition'>
                <img src='depositions/img3.png' alt='' />
                <p>
                  “Tenho a honra de afirmar que enquanto nossas vidas perdurarem o meu conceito é
                  sempre melhor em relação ao Renee Trajar, sua pessoa, ao profissional competente e
                  idôneo, sempre pontual, atencioso e preocupado em atender da melhor maneira os
                  anseios de seus clientes, incluindo este signatário.”
                </p>
                <h5>José Mauro Marques</h5>
                <h6>Advogado</h6>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='deposition'>
                <img src='depositions/img4.png' alt='' />
                <p>
                  “Conheço o excelente e qualificado trabalho do Renee Trajar e sua equipe há
                  décadas. Para camisas e ternos, o Renee é imbatível, sempre com preços justos,
                  produtos de excelente qualidade e especialmente tudo é feito com muito cuidado e
                  qualidade. Cumpre os prazos com atendimento de alto nível. O Renee trabalha com
                  perfeição nos detalhes.”
                </p>
                <h5>Custódio Pereira</h5>
                <h6>
                  Membro do CONSOCIAL - Conselho Superior de Responsabilidade Social da FIESP-SP
                </h6>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='deposition'>
                <img src='depositions/img5.png' alt='' />
                <p>
                  "Há mais de 10 anos sou cliente da Renee Trajar. A qualidade, caimento e
                  possibilidade de customização das roupas, aliados ao excelente atendimento e prazo
                  de entrega são fatores decisivos para mim."
                </p>
                <h5>Josimar Henrique da Silva</h5>
                <h6>Diretor Presidente | Grupo Hebron</h6>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </Depositions>

      <Contact>
        <div className='content'>
          <h1>Contato</h1>
          <div className='sub-content'>
            <div className='info'>
              <h2>Telefones</h2>
              <p>+55 (11) 3088-0757</p>
              <h2>e-mail</h2>
              <p>renee@reneetrajar.com.br</p>

              <h2>atendimento personalizado</h2>
              <button>Clique aqui!</button>
            </div>
            <div className='form'>
              <form>
                <input type='text' placeholder='Nome' />
                <input type='text' placeholder='E-mail' />
                <textarea placeholder='Mensagem' />
                <button>Enviar Mensagem</button>
              </form>
            </div>
          </div>
        </div>
      </Contact>
    </main>
  );
};
export default Main;
