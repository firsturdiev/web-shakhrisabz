<template>
  <section class="forum">
    <div class="container">
      <div class="forum__inner">
        <h1 class="forum__title">{{ $t('7.title') }}</h1>

        <p class="forum__info">{{ $t('7.subtitle1') }}</p>
        <img class="forum__poster" src="~/assets/img/7.1.jpg" />
        <p class="forum__paragraph">{{ $t('7.text1') }}</p>
        <p class="forum__paragraph">{{ $t('7.text2') }}</p>
        <p class="forum__info">{{ $t('7.subtitle2') }}</p>
        <img class="forum__poster" src="~/assets/img/7.2.jpg" />
        <p class="forum__paragraph">{{ $t('7.text3') }}</p>
        <p class="forum__paragraph">{{ $t('7.text4') }}</p>
        <p class="forum__paragraph">{{ $t('7.text5') }}</p>
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