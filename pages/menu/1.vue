<template>
  <section class="forum">
    <div class="container">
      <div class="forum__inner">

        <h1 class="forum__title">{{ $t('1.title') }}</h1>

        <p class="forum__info">{{ $t('1.subtitle1') }}</p>
        <img class="forum__poster" src="~/assets/img/1.1.jpg" />
        <img class="forum__poster" src="~/assets/img/1.2.jpg" />
        <img class="forum__poster" src="~/assets/img/1.3.jpg" />
        <p class="forum__paragraph">{{ $t('1.text1') }}</p>
        <p class="forum__paragraph">{{ $t('1.text2') }}</p>
        <p class="forum__paragraph">{{ $t('1.text3') }}</p>
        <p class="forum__paragraph">{{ $t('1.text4') }}</p>
    <p class="forum__paragraph">{{ $t('1.text5') }}</p>

        <p class="forum__info">{{ $t('1.subtitle2') }}</p>
        <p class="forum__paragraph">{{ $t('1.text6') }}</p>

        <p class="forum__info">{{ $t('1.subtitle3') }}</p>
        <img class="forum__poster" src="~/assets/img/1.4.jpg" />
        <p class="forum__paragraph">{{ $t('1.text7') }}</p>
        <p class="forum__paragraph">{{ $t('1.text8') }}</p>

        <p class="forum__info">{{ $t('1.subtitle4') }}</p>
        <img class="forum__poster" src="~/assets/img/1.5.jpg" />
        <img class="forum__poster" src="~/assets/img/1.6.jpg" />
        <img class="forum__poster" src="~/assets/img/1.7.jpg" />
        <img class="forum__poster" src="~/assets/img/1.8.jpg" />
        <img class="forum__poster" src="~/assets/img/1.9.jpg" />
        <p class="forum__paragraph">{{ $t('1.text9') }}</p>
        <p class="forum__paragraph">{{ $t('1.text10') }}</p>

        <p class="forum__info">{{ $t('1.subtitle5') }}</p>
        <img class="forum__poster" src="~/assets/img/1.10.jpg" />
        <img class="forum__poster" src="~/assets/img/1.11.jpg" />
        <p class="forum__paragraph">{{ $t('1.text11') }}</p>
        <p class="forum__paragraph">{{ $t('1.text12') }}</p>

        <p class="forum__info">{{ $t('1.subtitle6') }}</p>
        <img class="forum__poster" src="~/assets/img/1.12.jpg" />
        <p class="forum__paragraph">{{ $t('1.text13') }}</p>
        <p class="forum__paragraph">{{ $t('1.text14') }}</p>

        <p class="forum__info">{{ $t('1.subtitle7') }}</p>
        <img class="forum__poster" src="~/assets/img/1.13.jpg" />
        <img class="forum__poster" src="~/assets/img/1.14.jpg" />
        <p class="forum__paragraph">{{ $t('1.text15') }}</p>
        <p class="forum__paragraph">{{ $t('1.text16') }}</p>

      </div>
    </div>
  </section>
</template>

<style scoped>
.forum {
  padding: 16px 8px;
}

.forum__title {
  color: #020C4C;
  font-family: "Bebas Neue", sans-serif;
  font-size: 24px;
  font-weight: 700;
  line-height: 32px;
}

.forum__info {
  margin-bottom: 16px;
  color: #6A6E82;
  font-size: 12px;
  line-height: 16px;
}

.forum__poster {
  width: 100%;
  margin-bottom: 16px;
  min-height: 200px;
  object-fit: cover;
}

.forum__paragraph {
  color: #000;
  font-size: 12px;
  line-height: 16px;
}

.forum__paragraph:not(:last-child) {
  margin-bottom: 16px;
}

@media screen and (min-width: 768px) {
  .forum {
    padding: 48px 77px;
  }

  .forum__title {
    font-size: 40px;
    line-height: 48px;
  }

  .forum__info {
    margin-bottom: 24px;
    font-size: 18px;
    line-height: 24px;
  }

  .forum__poster {
    min-height: 300px;
  }

  .forum__paragraph:not(:last-child) {
    margin-bottom: 13px;
  }

  .forum__paragraph {
    font-size: 16px;
    line-height: 24px;
  }
}

@media screen and (min-width: 1300px) {
  .forum {
    padding: 96px 142px;
  }

  .forum__title {
    margin-bottom: 16px;
    font-size: 72px;
    line-height: 80px;
  }

  .forum__info {
    margin-bottom: 40px;
    font-size: 32px;
    line-height: 40px;
  }

  .forum__poster {
    margin-bottom: 48px;
    min-height: 565px;
  }

  .forum__paragraph:not(:last-child) {
    margin-bottom: 24px;
  }

  .forum__paragraph {
    font-size: 32px;
    line-height: 40px;
  }
}
</style>

<script>
export default {
  mounted() {
    document.querySelector('.site-header').classList.add('site-header--dark');
    document.querySelector('.site-header--dark .site-header__logo-img').src = '/logo-dark.svg';
  }
}
</script>