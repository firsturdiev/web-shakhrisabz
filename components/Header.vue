<template>
  <header class="site-header">
    <div class="container">
      <div class="site-header__inner">
        <NuxtLink class="site-header__logo" to="/">
          <img class="site-header__logo-img" src="~/assets/img/logo.svg" alt="Shakrisabz 2024 logo" />
        </NuxtLink>

        <button class="site-header__toggle"></button>

        <div class="site-header__hidden">
          <nav class="navbar">
            <a class="navbar__link" href="/">Главная</a>
            <a class="navbar__link" href="/forum">Инвестиционный форум</a>
            <a class="navbar__link" href="/forum">Образовательный форум</a>
            <a class="navbar__link" href="#site-footer">Контакты</a>
          </nav>

          <button class="btn-lang">Русский</button>

          <a class="btn-register" href="/register">Зарегистрироваться</a>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>
.site-header {
  padding: 20px 8px 0;
}

.site-header--dark .site-header__toggle {
  background-image: url('~/assets/img/icon-toggle-dark.svg');
}

.site-header--dark .btn-lang {
  color: #020C4C;
}

.site-header--dark .btn-lang::after {
  filter: invert(1);
}

.site-header--dark .navbar__link {
  color: #020C4C;
}


.site-header__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.site-header__logo-img {
  width: 64px;
  height: 24px;
}

.site-header__toggle {
  width: 24px;
  height: 24px;
  background-image: url('~/assets/img/icon-toggle.svg');
}

.site-header__hidden {
  display: none;
}

/* MEDIA */

@media screen and (min-width: 768px) {

  .site-header__toggle {
    display: none;
  }

  .site-header__logo {
    margin-right: 32px;
  }

  .site-header__hidden {
    margin-left: auto;
    display: flex;
    align-items: center;
  }

  .navbar {
    margin-right: 8px;
    display: flex;
    column-gap: 8px;
    row-gap: 4px;
    align-items: center;
    flex-wrap: wrap;
  }

  .navbar__link {
    color: #fff;
  }

  .btn-lang {
    margin-right: 16px;
    color: #fff;
    display: flex;
    column-gap: 4px;
  }

  .btn-lang::after {
    content: '';
    width: 16px;
    height: 16px;
    background-image: url('~/assets/img/icon-arrow-bottom.svg');
  }

  .btn-register {
    color: #fff;
    padding: 8px 12px;
    background-color: #19A2DB;
    border-radius: 3px;
  }
}

@media screen and (min-width: 1300px) {
  .site-header {
    padding: 0;
    padding-top: 24px;
  }

  .site-header__logo-img {
    width: 130px;
    height: 48px;
  }

  .navbar {
    margin-right: 24px;
    column-gap: 24px;
  }

  .navbar__link,
  .btn-lang {
    font-size: 18px;
    line-height: 24px;
  }

  .btn-lang {
    margin-right: 40px;
  }

  .btn-lang::after {
    width: 24px;
    height: 24px;
  }

  .btn-register {
    padding: 12px 24px;
    font-size: 16px;
    line-height: 24px;
  }
}
</style>

<!-- <script>
export default {
  mounted() {
    document.querySelector('.site-header--dark .site-header__toggle').src = '/_nuxt/assets/img/logo-dark.svg';
  }
}
</script> -->