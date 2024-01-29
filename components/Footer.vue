<template>
  <footer class="site-footer" id="site-footer">
    <div class="container">
      <div class="site-footer__inner">
        <a class="site-footer__logo" href="/">
          <img class="site-footer__logo-img" src="~/assets/img/logo-dark.svg" alt="Shakhrisabz 2024 logo">
        </a>

        <div class="site-footer__center">
          <a class="site-footer__tel" href="tel:+998900000000">+998 90 000 00 00</a>

          <div class="socials">
            <a class="socials__item social" href="#" target="_blank">
              <img class="social__icon" src="~/assets/img/icon-telegram.svg" />
            </a>
            <a class="socials__item social" href="#" target="_blank">
              <img class="social__icon" src="~/assets/img/icon-instagram.svg" />
            </a>
            <a class="socials__item social" href="#" target="_blank">
              <img class="social__icon" src="~/assets/img/icon-youtube.svg" />
            </a>
            <a class="socials__item social" href="#" target="_blank">
              <img class="social__icon" src="~/assets/img/icon-facebook.svg" />
            </a>
            <a class="socials__item social" href="#" target="_blank">
              <img class="social__icon" src="~/assets/img/icon-twitter.svg" />
            </a>
          </div>
        </div>

        <div class="links">
          <a class="links__item link" href="/">Главная</a>
          <a class="links__item link" href="/forum">Образовательный форум</a>
          <a class="links__item link" href="/forum">Инвестиционный форум</a>
          <a class="links__item link" href="#site-footer">Контакты</a>
        </div>
      </div>
    </div>
  </footer>

  <div class="copyright">
    <div class="container">
      <div class="copyright_inner">
        <p class="copyright__text">© Shakhrisabz 2024. Все права защищены</p>
        <p class="copyright__text">При использовании материалов сайта ссылка на источник обязательна.</p>
      </div>
    </div>
  </div>

  <div class="divider"></div>
</template>

<style scoped>
/* SITE-FOOTER */

.site-footer {
  padding: 16px 0 8px;
  border-top: 1px solid #020C4C;
}

.site-footer__inner {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-between;
  row-gap: 8px;
}

.site-footer__logo-img {
  width: 65px;
  height: 24px;
}

.site-footer__center {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

.site-footer__tel {
  margin-bottom: 4px;
  color: #000;
  font-size: 9.6px;
  line-height: 12.8px;
}

.socials {
  display: flex;
  column-gap: 8px;
}

.social__icon {
  width: 16px;
  height: 16px;
}

.links {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  row-gap: 8px;
  column-gap: 32px;
}

.links__item {
  width: 40%;
  flex-grow: 1;
}

/* COPYRIGHT */

.copyright {
  padding: 8px 0 16px;
  border-top: 0.5px solid #D6DBED;
}

.copyright_inner {
  display: flex;
  flex-direction: column;
  row-gap: 8px;
}

.copyright__text {
  color: #6A6E82;
}

/* DIVIDER */

.divider {
  height: 20px;
  background-image: url('~/assets/img/bg-divider.svg');
  background-repeat: repeat-x;
  background-size: 50px 20px;
}

/* TABLET */

@media screen and (min-width: 768px) {
  .site-footer {
    padding: 21px 0;
  }

  .site-footer__inner {
    flex-wrap: nowrap;
    justify-content: initial;
  }

  .links {
    order: 1;
  }

  .site-footer__center {
    order: 3;
    flex-direction: row;
    flex-shrink: 0;
    align-items: center;
    column-gap: 16px;
  }

  .site-footer__logo {
    margin-right: 23px;
  }

  .site-footer__tel {
    margin-bottom: 0;
  }

  .links {
    margin-right: auto;
    column-gap: 12.8px;
    row-gap: 6px;
    flex-wrap: wrap;
  }

  .link,
  .site-footer__tel {
    font-size: 9.6px;
    line-height: 12.8px;
  }

  .link {

    width: auto;
    flex-grow: 0;
  }

  .copyright {
    padding: 0;
    border-top: none;
  }

  .copyright_inner {
    padding: 10px 0 21px;
    border-top: 1px solid #D6DBED;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  .divider {
    height: 40px;
    background-image: url('~/assets/img/bg-divider.svg');
    background-repeat: repeat-x;
    background-size: 100px 40px;
  }

}

@media screen and (min-width: 1300px) {
  .site-footer {
    padding: 40px 0;
  }

  .site-footer__logo {
    margin-right: 45px;
  }

  .site-footer__logo-img {
    width: 130px;
    height: 48px;
  }

  .links {
    column-gap: 24px;
  }

  .link {
    font-size: 18px;
    line-height: 24px;
  }

  .site-footer__tel {
    margin-right: 32px;
    font-size: 18px;
    line-height: 24px;
  }

  .socials {
    column-gap: 16px;
  }

  .social__icon {
    width: 32px;
    height: 32px;
  }

  .copyright_inner {
    padding: 24px 0 40px;
  }

  .copyright__text {
    font-size: 14px;
    line-height: 20px;
  }

  .divider {
    height: 80px;
    background-size: 200px 80px;
  }
}
</style>