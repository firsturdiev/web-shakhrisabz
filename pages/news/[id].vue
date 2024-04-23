<template>
  <section class="forum">
    <div class="container">
      <div class="forum__inner">
        <h1 class="forum__title">{{ news[`title_${locale}`] }}</h1>
        <img class="forum__poster" :src="news.photo" />

        <div class="forum__paragraph">
          <StrapiBlocks :content="news[`content_${locale}`]" />
        </div>
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
import { StrapiBlocks } from 'vue-strapi-blocks-renderer';
import { reactive, toRefs, ref } from 'vue';

export default {
  components: {
    StrapiBlocks
  },

  mounted() {
    document.querySelector('.site-header').classList.add('site-header--dark');
    document.querySelector('.site-header--dark .site-header__logo-img').src = '/logo-dark.svg';
  },

  async setup() {

    const { locale } = useI18n()
    const route = useRoute()

    let state = reactive({
      news: {}
    });

    const fetchNews = async () => {
      const res = await fetch('/api/news')
      state.news = (await res.json()).find((item) => item.id == route.params.id)
    }

    await fetchNews()

    return {
      ...toRefs(state),
      locale
    }
  }
}
</script>