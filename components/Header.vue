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
            <a class="navbar__link" href="/">{{ $t('menu.home') }}</a>
            <button class="navbar__link btn-lang" @click="toggleDropdown1">
              {{ $t('menu.information') }}

              <div class="navbar__dropdown" v-show="showDropdown1">
                <a class="navbar__dropdown-link" href="/menu/1">{{ $t('menu.dropdown.1') }}</a>
                <a class="navbar__dropdown-link" href="/menu/2">{{ $t('menu.dropdown.2') }}</a>
                <a class="navbar__dropdown-link" href="/menu/3">{{ $t('menu.dropdown.3') }}</a>
                <a class="navbar__dropdown-link" href="/menu/4">{{ $t('menu.dropdown.4') }}</a>
                <a class="navbar__dropdown-link" href="/menu/5">{{ $t('menu.dropdown.5') }}</a>
                <a class="navbar__dropdown-link" href="/menu/6">{{ $t('menu.dropdown.6') }}</a>
                <a class="navbar__dropdown-link" href="/menu/7">{{ $t('menu.dropdown.7') }}</a>
              </div>
            </button>
            <!-- <a class="navbar__link" href="#site-footer">{{ $t('menu.contact') }}</a> -->
          </nav>

          <button class="btn-lang" @click="toggleDropdown2">
            {{ $t('selectLanguage') }}

            <div class="navbar__dropdown" v-show="showDropdown2">
              <button class="navbar__dropdown-link" @click="() => setLocale('en')">English</button>
              <button class="navbar__dropdown-link" @click="() => setLocale('fr')">Français</button>
              <button class="navbar__dropdown-link" @click="() => setLocale('ar')">عربي</button>
              <button class="navbar__dropdown-link" @click="() => setLocale('ru')">Русский</button>
              <button class="navbar__dropdown-link" @click="() => setLocale('uz')">O'zbekcha</button>
            </div>
          </button>

          <a class="btn-register" href="/register">{{ $t('menu.register') }}</a>
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

/* .site-header__logo-img {
  width: 64px;
  height: 24px;
} */

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
    position: relative;
    color: #fff;
    display: flex;
    column-gap: 4px;
    align-items: center;
  }

  .btn-lang .navbar__dropdown {
    position: absolute;
    top: 100%;
    left: 0;
    /* display:/ none; */
    flex-direction: column;
    background-color: #fff;
    padding: 8px;
    border-radius: 3px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
    z-index: 100;
  }

  .btn-lang .navbar__dropdown-link {
    width: 100%;
    color: #020C4C;
    padding: 8px 12px;
    border-radius: 3px;
  }

  .btn-lang::after {
    content: '';
    width: 16px;
    height: 16px;
    background-image: url('~/assets/img/icon-arrow-bottom.svg');
  }

  .btn-register {
    margin-left: 16px;
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
    width: 200px;
    height: 70px;
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

  /* .btn-lang {
  } */

  .btn-lang::after {
    width: 24px;
    height: 24px;
  }

  .btn-register {
    margin-left: 40px;
    padding: 12px 24px;
    font-size: 16px;
    line-height: 24px;
  }
}
</style>

<script setup>
import { ref, watch } from 'vue'
const { locale } = useI18n()

const setLocale = (lang) => {
  locale.value = lang
  localStorage.setItem('locale', lang)
}

watch(locale, (newLocale) => {
  localStorage.setItem('locale', newLocale)
})

const showDropdown1 = ref(false);
const showDropdown2 = ref(false);

const toggleDropdown1 = () => {
  showDropdown1.value = !showDropdown1.value;
};
const toggleDropdown2 = () => {
  showDropdown2.value = !showDropdown2.value;
};
</script>