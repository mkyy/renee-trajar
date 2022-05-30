import styled from 'styled-components';

export const WelcomeWrapper = styled.section`
  width: 100vw;
  height: 630px;
  background-color: #0f1013;

  .content {
    background-image: url(home_bg.png);
    background-size: cover;
    height: 100%;
    max-width: 1366px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding-left: 98px;
    padding-bottom: 98px;

    @media (max-width: 425px) {
      max-width: 100vw;
      padding: 0 20px 98px 20px;
      align-items: center;
      background-image: url(home_bg_mobile.png);
    }
  }

  .title {
    display: flex;
    flex-direction: column;
    width: 438px;

    strong {
      font-family: 'Playfair Display';
      font-style: normal;
      font-weight: 400;
      font-size: 90.0346px;
      line-height: 120px;
      text-transform: uppercase;
      color: rgba(2, 75, 104, 0.68);
      line-height: 90px;
      text-align: center;
    }
    span {
      font-family: 'Playfair Display';
      font-style: italic;
      font-weight: 400;
      font-size: 32.5627px;
      line-height: 43px;
      color: #be9667;

      :first-child {
        text-align: left;
      }

      :last-child {
        text-align: right;
      }
    }

    @media (max-width: 425px) {
      width: 100%;
      strong {
        font-size: 72px;
        line-height: 96px;
        line-height: 60px;
      }
      span {
        font-size: 26px;
        line-height: 35px;
      }
    }
  }

  p {
    width: 438px;
    font-family: 'Lato';
    font-style: normal;
    font-weight: 300;
    font-size: 24px;
    line-height: 31px;
    text-transform: uppercase;

    color: #e5e5e5;
    strong {
      font-weight: 900;
    }

    @media (max-width: 425px) {
      width: 100%;
      font-size: 22px;
      line-height: 142%;
    }
  }

  button {
    background-color: #014561;
    border: none;
    width: fit-content;
    border-radius: 2px;
    width: 297px;
    height: 50px;
    font-family: 'Lato';
    font-style: normal;
    font-weight: 300;
    font-size: 18px;
    line-height: 22px;
    text-align: center;
    text-transform: uppercase;
    color: #e5e5e5;
    transition: 0.5s ease-out;

    &:hover {
      background: transparent;
      border: 1px solid #be9667;
      cursor: pointer;
    }

    @media (max-width: 425px) {
      width: 100%;
    }
  }
`;

export const AboutWrapper = styled.section`
  .content {
    display: flex;
    height: 100%;
    max-width: 1366px;
    margin: 0 auto;
    justify-content: space-between;

    #renee-photo {
      margin: 50px 0px;
    }
  }

  .text-box {
    position: relative;
    margin: 50px 100px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    h1 {
      font-family: 'Cormorant';
      font-weight: 300;
      font-size: 38px;
      line-height: 46px;
      margin: 0;
      position: relative;

      display: flex;
      align-items: center;
      text-align: center;
      color: #014561;

      &:hover {
        ::after {
          width: 350px;
          left: -10%;
        }
      }

      &::after {
        content: '';
        width: 53px;
        height: 1px;
        background: #70b0c4;
        position: absolute;
        bottom: -10px;
        left: 8%;
        transition: all 0.5s ease-in-out;
      }
    }
    p {
      font-family: 'Lato';
      font-weight: 300;
      font-size: 19px;
      line-height: 141.3%;
      color: #333333;
    }
    quote {
      display: block;
      font-family: 'Cormorant';
      font-style: italic;
      font-weight: 400;
      font-size: 24px;
      line-height: 141.3%;
      color: #1c86a4;
      position: relative;

      span {
        font-family: 'Cormorant';
        font-style: normal;
        font-weight: 500;
        font-size: 20px;
        line-height: 141.3%;
        color: #828282;
        position: absolute;
        right: 0;
      }
    }

    #quote-img {
      width: 156px;
      height: 123px;
      position: absolute;
      right: -8%;
      bottom: 80px;
    }

    button {
      background: #014561;
      border-radius: 2px;
      border: none;
      font-family: 'Lato';
      font-style: normal;
      font-weight: 300;
      font-size: 18px;
      width: 300px;
      height: 50px;
      text-align: center;
      color: #e5e5e5;
      transition: 0.5s ease-out;

      &:hover {
        background: #013145;
        cursor: pointer;
      }
    }
  }
  @media (max-width: 425px) {
    display: none;
  }
`;

export const CommentWrapper = styled.div`
  .bg-color {
    background: rgba(239, 247, 249, 0.5);
    width: 100%;
    height: 360px;
    position: absolute;
    z-index: -1;
  }

  .content {
    height: 360px;
    max-width: 1366px;
    margin: 0 auto;
    position: relative;

    .sub-content {
      background-image: url(comment_bg.png);
      background-size: cover;
      position: relative;
      width: calc(100% - 313px);
      height: 100%;
      display: flex;
      align-items: center;
      padding-left: 130px;

      img {
        z-index: 3;
        position: absolute;
        right: -70px;
      }
    }

    .text-box {
      display: flex;
      flex-direction: column;
      justify-content: center;
      p {
        width: 630px;
        height: 102px;
        font-family: 'Lato';
        font-weight: 300;
        font-size: 24px;
        line-height: 141.3%;
        text-align: center;
        color: #828282;
        margin-bottom: 47px;
      }

      h2 {
        font-family: 'Cormorant';
        font-style: italic;
        font-weight: 400;
        font-size: 28px;
        text-align: center;
        color: #014561;
        margin: 0;
      }

      h3 {
        font-family: 'Lato';
        font-weight: 300;
        font-size: 20px;
        line-height: 141.3%;
        text-align: center;
        color: #be9667;
        margin: 0;
      }
    }

    .img-bg {
      #bg-img-comment {
        position: absolute;
        right: 0;
        top: 0;
        height: 360px;
        width: 313px;
        z-index: -1;
      }

      .bg {
        position: absolute;
        right: 0;
        top: 0;
        height: 360px;
        width: 313px;
        z-index: 2;
        background: rgba(2, 75, 104, 0.81);
      }
    }
  }

  @media (max-width: 425px) {
    display: none;
  }
`;

export const ProsWrapper = styled.div`
  height: 200px;
  .content {
    max-width: 1366px;
    height: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    padding: 0px 70px;

    .item {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      position: relative;

      h1 {
        font-family: 'Cormorant';
        font-weight: 600;
        font-size: 24px;
        line-height: 29px;
        text-align: center;
        text-transform: uppercase;
        color: #1c86a4;
        margin-bottom: 5px;
      }

      p {
        font-family: 'Lato';
        font-weight: 300;
        font-size: 14px;
        line-height: 17px;
        text-align: center;
        color: #727272;
        margin: 0;
      }

      :nth-child(2) {
        ::after {
          content: '';
          width: 1px;
          height: 57px;
          background: #cccccc;
          position: absolute;
          left: -30%;
          bottom: 25%;
        }
        ::before {
          content: '';
          width: 1px;
          height: 57px;
          background: #cccccc;
          position: absolute;
          right: -30%;
          bottom: 25%;
        }
      }
    }
  }

  @media (max-width: 425px) {
    display: none;
  }
`;

export const PromoWrapper = styled.section`
  width: 100vw;
  background-image: url(promo_bg.png);
  background-size: cover;
  height: 560px;
  position: relative;
  z-index: -2;

  .bg {
    background: linear-gradient(0deg, rgba(1, 49, 69, 0.9) 0%, rgba(0, 36, 50, 1) 85%);
    z-index: -1;
    width: 100%;
    height: 100%;
    position: absolute;
  }

  .content {
    max-width: 1366px;
    margin: 0 auto;
    padding: 0px 161px;
    height: 100%;
    display: flex;
    align-items: center;

    .text-box {
      h1 {
        font-family: 'Cormorant';
        font-weight: 400;
        font-size: 53px;
        line-height: 64px;
        text-transform: uppercase;
        color: #be9667;
        text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      }
      ul {
        list-style: none;

        li {
          font-family: 'Lato';
          font-weight: 300;
          font-size: 22px;
          line-height: 26px;
          color: #c4c4c4;
          position: relative;
          margin-bottom: 21px;

          &::before {
            content: '';
            width: 15px;
            height: 1px;
            background: #be9667;
            position: absolute;
            left: -25px;
            bottom: 10px;
          }

          :first-child {
            font-family: 'Cormorant';
            font-style: italic;
            font-weight: 400;
            font-size: 30px;
            line-height: 36px;
            color: #be9667;

            &::before {
              width: 0;
            }
          }
        }
      }
      button {
        background: #be9667;
        border-radius: 2px;
        border: none;
        width: 330px;
        height: 55px;
        margin: 21px 0px;

        font-family: 'Lato';
        font-weight: 400;
        font-size: 18px;
        line-height: 22px;
        text-align: center;
        color: #e0e0e0;
        transition: 0.5s ease-out;

        &:hover {
          cursor: pointer;
        }
      }

      @media (max-width: 425px) {
        display: flex;
        width: 100%;
        flex-direction: column;
        align-items: center;

        h1 {
          margin: 0;
          text-align: center;
        }
        button {
          width: 100%;
        }
      }
    }

    @media (max-width: 425px) {
      max-width: 780px;
      padding: 0px 30px;

      .image {
        display: none;
      }
    }
  }
  @media (max-width: 425px) {
    height: 780px;
  }
`;

export const DualContent = styled.section`
  width: 100vw;
  margin-top: 100px;

  .content {
    max-width: 1366px;
    padding: 0 150px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;

    @media (max-width: 425px) {
      padding: 0;
      max-width: 100%;
      align-items: center;
    }
  }

  .layer {
    display: flex;

    .text-container {
      margin: 0 auto;
      h1 {
        font-family: 'Cormorant';
        font-weight: 300;
        font-size: 62px;
        line-height: 75px;
        text-transform: uppercase;
        color: #014561;
        margin-bottom: 0;
      }
      h2 {
        font-family: 'Lato';
        font-weight: 900;
        font-size: 16px;
        line-height: 19px;
        text-transform: uppercase;
        color: #c4c4c4;
        margin-top: 0;
      }

      .lists {
        display: flex;
        ul li {
          font-family: 'Cormorant';
          font-style: italic;
          font-weight: 400;
          font-size: 24px;
          line-height: 29px;

          color: #727272;
        }
      }
      button {
        background: #014561;
        border-radius: 2px;
        width: 330px;
        height: 50px;
        border: none;
        font-family: 'Lato';
        font-weight: 300;
        font-size: 18px;
        line-height: 22px;
        text-align: center;
        color: #e5e5e5;
        transition: 0.5s ease-out;

        &:hover {
          background: #013145;
          cursor: pointer;
        }
      }

      @media (max-width: 425px) {
        width: 343px;

        h1 {
          font-size: 50px;
          text-align: center;
        }

        .lists {
          flex-direction: column;
          ul {
            margin: 0;
          }
        }
        .btn {
          display: none;
        }

        button {
          margin-top: 40px;
        }
      }
    }

    .img-container {
      width: 550px;
      height: 498px;
      position: relative;
      margin-bottom: 100px;
      img {
        width: 530px;
        height: 488px;
        position: absolute;
      }

      .border {
        width: 550px;
        height: 468px;
        border: 1px solid #1c86a4;
        position: absolute;
        top: 10px;
        left: -10px;
      }
      //@media .img-container
      @media (max-width: 425px) {
        width: 100%;
        margin-bottom: 0;
        height: 300px;
        img {
          width: 318px;
          height: 294px;
        }

        .border {
          width: 338px;
          height: 274px;
        }
      }
    }
    // @media .layer
    @media (max-width: 425px) {
      flex-direction: column;
      align-items: center;
      padding: 20px;

      :last-child {
        flex-direction: column-reverse;
      }
    }
  }

  @media (max-width: 425px) {
    margin-top: 0;
  }
`;

export const Depositions = styled.section`
  width: 100vw;
  height: 608px;

  .bg {
    background: #014561;
    height: 608px;
    width: 100vw;
    z-index: -10;
    background-image: url(depositions_bg.png);
    background-size: cover;
    position: absolute;

    @media (max-width: 425px) {
      height: 780px;
    }
  }

  .content {
    max-width: 1366px;
    height: 608px;
    margin: auto;
    z-index: 5;
    padding-top: 62px;
    padding-left: 150px;
    padding-right: 150px;

    h1 {
      font-family: 'Cormorant';
      font-weight: 300;
      font-size: 38px;
      line-height: 46px;
      text-align: center;
      color: #f2f2f2;
      position: relative;
      margin-bottom: 42px;

      &:hover {
        &::after {
          width: 350px;
          left: 33.5%;
        }
      }

      &::after {
        content: '';
        width: 53px;
        height: 1px;
        background: #70b0c4;
        position: absolute;
        bottom: -10px;
        left: 48%;
        transition: all 0.5s ease-in-out;
      }
    }

    @media (max-width: 425px) {
      max-width: 100%;
      padding: 0;
      height: 780px;
      padding-top: 40px;

      .swiper-desktop {
        display: none;
      }
    }
    @media (min-width: 426px) {
      .swiper-mobile {
        display: none;
      }
    }
  }

  .deposition {
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
      border-radius: 50%;
    }

    p {
      font-family: 'Cormorant';
      font-style: italic;
      font-weight: 300;
      font-size: 26px;
      line-height: 31px;
      text-align: center;
      color: #c4c4c4;
      width: 60%;
      margin: 10px;
    }

    h5 {
      font-family: 'Cormorant';
      font-weight: 400;
      font-size: 20px;
      line-height: 24px;
      text-align: center;
      color: #be9667;
      margin: 0;
    }
    h6 {
      font-family: 'Lato';
      font-weight: 300;
      font-size: 14px;
      line-height: 17px;
      text-align: center;
      color: #949494;
      margin-top: 0;
      margin-bottom: 10px;
    }

    @media (max-width: 425px) {
      height: 100%;
      p {
        width: 100%;
      }
    }
  }

  @media (max-width: 425px) {
    height: 780px;
  }
`;

export const Contact = styled.section`
  height: 500px;
  .content {
    max-width: 1366px;
    height: 500px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    h1 {
      font-family: 'Cormorant';
      font-weight: 300;
      font-size: 38px;
      line-height: 46px;
      text-align: center;
      color: #1c86a4;
      position: relative;
      margin-bottom: 42px;

      &:hover {
        &::after {
          width: 350px;
          left: -90%;
        }
      }

      &::after {
        content: '';
        width: 53px;
        height: 1px;
        background: #70b0c4;
        position: absolute;
        bottom: -10px;
        left: 32%;
        transition: all 0.5s ease-in-out;
      }
    }

    @media (max-width: 425px) {
      height: 760px;
    }
  }

  .sub-content {
    display: flex;
    width: 100%;
    justify-content: center;

    .info {
      margin-right: 130px;
      h2 {
        font-family: 'Lato';
        font-weight: 300;
        font-size: 18px;
        line-height: 22px;
        text-transform: uppercase;
        color: #1c86a4;
        margin: 10px;
      }
      p {
        font-family: 'Lato';
        font-weight: 300;
        font-size: 16px;
        line-height: 150.1%;
        color: #828282;
        margin-top: 0;
      }
      button {
        border: none;
        width: 270px;
        height: 50px;
        background-color: transparent;
        border: 1px solid #1c86a4;
        border-radius: 2px;
        font-family: 'Lato';
        font-weight: 300;
        font-size: 18px;
        line-height: 22px;
        text-align: center;
        color: #014561;
        transition: 0.5s ease-out;

        &:hover {
          border: 1px solid #be9667;
          color: rgba(190, 150, 103, 1);
          cursor: pointer;
        }
      }
    }

    .form form {
      display: flex;
      flex-direction: column;

      input,
      textarea {
        border: 1px solid #1c86a4;
        border-radius: 3px;
        width: 600px;
        margin-bottom: 18px;
        padding-left: 12px;
      }

      input {
        height: 42px;
      }
      textarea {
        height: 77px;
        padding-top: 12px;
      }
      button {
        width: 600px;
        height: 50px;
        background: #014561;
        border-radius: 2px;
        font-family: 'Lato';
        font-weight: 300;
        font-size: 18px;
        line-height: 22px;
        text-align: center;
        color: #e5e5e5;
        border: none;
        transition: 0.5s ease-out;

        &:hover {
          background: #00648c;
          cursor: pointer;
        }
      }
    }

    @media (max-width: 425px) {
      flex-direction: column-reverse;
      align-items: center;
      height: auto;

      .info {
        margin-right: 0;

        h2 {
          text-align: center;
          margin-top: 25px;
          margin-bottom: 0;
        }
        p {
          text-align: center;
        }
        button {
          width: 100%;
        }
      }

      .form form {
        align-items: center;

        input,
        textarea {
          width: 300px;
        }

        button {
          width: 300px;
        }
      }
    }
  }

  @media (max-width: 425px) {
    height: 780px;
  }
`;

export const AboutMobile = styled.section`
  display: flex;
  height: auto;
  flex-direction: column;
  align-items: center;
  padding: 0px 23px;

  img {
    width: 210px;
    height: 212px;
  }

  h1 {
    font-family: 'Cormorant';
    font-weight: 300;
    font-size: 38px;
    line-height: 46px;
    position: relative;
    display: flex;
    align-items: center;
    text-align: center;
    color: #014561;

    &::after {
      content: '';
      width: 53px;
      height: 1px;
      background: #70b0c4;
      position: absolute;
      bottom: -10px;
      left: 35%;
    }
  }
  p {
    font-family: 'Lato';
    font-weight: 300;
    font-size: 19px;
    line-height: 141.3%;
    color: #333333;
  }
  quote {
    display: block;
    font-family: 'Cormorant';
    font-style: italic;
    font-weight: 400;
    font-size: 24px;
    line-height: 141.3%;
    color: #1c86a4;
    position: relative;
    text-align: center;

    span {
      font-family: 'Cormorant';
      font-style: normal;
      font-weight: 500;
      font-size: 20px;
      line-height: 141.3%;
      color: #828282;
    }
  }

  button {
    background: #014561;
    border-radius: 2px;
    border: none;
    font-family: 'Lato';
    font-style: normal;
    font-weight: 300;
    font-size: 18px;
    width: 300px;
    height: 50px;
    text-align: center;
    color: #e5e5e5;
    margin: 30px 0;
  }

  @media (min-width: 425px) {
    display: none;
  }
`;

export const CommentMobile = styled.section`
  display: flex;
  flex-direction: column;

  .bg-photo {
    width: 100vw;
    height: 269px;
    position: relative;

    .img-bg {
      #bg-img-comment {
        position: absolute;
        right: 0;
        top: 0;
        width: 100%;
        height: 269px;
        z-index: -2;
      }

      .bg {
        position: absolute;
        right: 0;
        top: 0;
        width: 100%;
        height: 269px;
        z-index: -1;
        background: rgba(2, 75, 104, 0.81);
      }
    }

    #nelson-img {
      width: 158px;
      height: 227px;
      z-index: 5;
    }
  }

  .text-box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    p {
      width: 90%;
      font-family: 'Lato';
      font-weight: 300;
      font-size: 24px;
      line-height: 141.3%;
      text-align: center;
      color: #828282;
      margin-bottom: 47px;
      margin: 20px auto;
    }

    h2 {
      font-family: 'Cormorant';
      font-style: italic;
      font-weight: 400;
      font-size: 28px;
      text-align: center;
      color: #014561;
      margin: 0;
    }

    h3 {
      font-family: 'Lato';
      font-weight: 300;
      font-size: 16px;
      line-height: 141.3%;
      text-align: center;
      color: #be9667;
      margin-top: 0;
      margin-bottom: 40px;
    }
  }
  @media (min-width: 425px) {
    display: none;
  }
`;
