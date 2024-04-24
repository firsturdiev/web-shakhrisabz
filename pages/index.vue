<template>
  <!-- HERO -->
  <section class="hero">
    <div class="container">
      <div class="hero_inner">
        <img class="hero__logo" src="~/assets/img/logo-hero.svg">
        <a class="hero__btn" href="/register">{{ $t('main.register') }}</a>
      </div>
    </div>
  </section>

  <!-- DIVIDER -->

  <div class="divider" />

  <!-- ABOUT -->

  <section class="about">
    <div class="container">
      <div class="about__inner">
        <h1 class="about__title">Shakhrisabz 2024</h1>
        <!-- <p class="about__info">Главный региональный форум страны и ключевая площадка для обсуждения реализации
          национальных проектов, наращивания экономического потенциала и демонстрации инвестиционных возможностей
          субъектов Республики Узбекистан с целью обеспечения благополучия и достижения нового качества жизни граждан
          Узбекистана.</p> -->

        <iframe class="about__video" loading="lazy"
          src="https://www.youtube-nocookie.com/embed/48PSJqwZVIc?rel=0&iv_load_policy=3"
          title="Uzbekistan Travel: 11 BEAUTIFUL Places to Visit in Uzbekistan (& Best Things to Do)" frameborder="0"
          allowfullscreen></iframe>

        <div class="about__forum forum">
          <div class="forum__start">
            <h2 class="forum__title">{{ $t('about.title') }}</h2>

            <div class="forum__start-inner">
              <p class="forum__info">{{ $t('about.text1') }}</p>
              <p class="forum__info">{{ $t('about.text2') }}</p>
              <p class="forum__info">{{ $t('about.text3') }}</p>
              <p class="forum__info">{{ $t('about.text4') }}</p>
            </div>
          </div>

          <div class="forum__end">
            <div class="forum__controls">
              <button class="forum__btn" :class="{ 'forum__btn--active': activeDay == 1 }" @click="changeDay(1)">
                {{ $t('plan.firstDay.title') }}
              </button>
              <button class="forum__btn" :class="{ 'forum__btn--active': activeDay == 2 }" @click="changeDay(2)">
                {{ $t('plan.secondDay.title') }}
              </button>
              <button class="forum__btn" :class="{ 'forum__btn--active': activeDay == 3 }" @click="changeDay(3)">
              {{ $t('plan.thirdDay.title') }}
            </button>
            </div>

            <div class="forum__end-inner">
              <div class="forum__first-day" style="display: contents;" v-show="activeDay == 1">
                <div class="forum__item">
                  <span class="forum__item-date">16:30 - 17:00</span>
                  <p class="forum__item-title">{{ $t('plan.firstDay.1') }}</p>
                </div>
                <div class="forum__item">
                  <span class="forum__item-date">17:00 - 18:30</span>
                  <p class="forum__item-title">{{ $t('plan.firstDay.2') }}</p>
                </div>
                <div class="forum__item">
                  <span class="forum__item-date">18:30 - 19:00</span>
                  <p class="forum__item-title">{{ $t('plan.firstDay.3') }}</p>
                </div>
                <div class="forum__item">
                  <span class="forum__item-date">19:00 - 20:30</span>
                  <p class="forum__item-title">{{ $t('plan.firstDay.4') }}</p>
                </div>
              </div>

              <div class="forum__second-day" style="display: contents;" v-show="activeDay == 2">
                <div class="forum__item">
                  <span class="forum__item-date">09:30 - 09:45</span>
                  <p class="forum__item-title">{{ $t('plan.secondDay.1') }}</p>
                </div>
                <div class="forum__item">
                  <span class="forum__item-date">10:00 - 11:00</span>
                  <p class="forum__item-title">{{ $t('plan.secondDay.2') }}</p>
                </div>
                <div class="forum__item">
                  <span class="forum__item-date">11:15 - 12:00</span>
                  <p class="forum__item-title">{{ $t('plan.secondDay.3') }}</p>
                </div>
                <div class="forum__item">
                  <span class="forum__item-date">12:15 - 12:45</span>
                  <p class="forum__item-title">{{ $t('plan.secondDay.4') }}</p>
                </div>
                <div class="forum__item">
                  <span class="forum__item-date">13:00 - 14:30</span>
                  <p class="forum__item-title">{{ $t('plan.secondDay.5') }}</p>
                </div>
                <div class="forum__item">
                  <span class="forum__item-date">14:30 - 16:30</span>
                  <p class="forum__item-title">{{ $t('plan.secondDay.6') }}</p>
                </div>
                <div class="forum__item">
                  <span class="forum__item-date">16:30 - 18:30</span>
                  <p class="forum__item-title">{{ $t('plan.secondDay.7') }}</p>
                </div>
                <div class="forum__item">
                  <span class="forum__item-date">19:00 - 20:30</span>
                  <p class="forum__item-title">{{ $t('plan.secondDay.8') }}</p>
                </div>
              </div>

              <div class="forum__third-day" style="display: contents;" v-show="activeDay == 3">
                <div class="forum__item">
                  <span class="forum__item-date">09:30 - 13:00</span>
                  <p class="forum__item-title">{{ $t('plan.thirdDay.1') }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- PROJECTS -->

  <!-- <section class="projects">
    <div class="container">
      <div class="projects__inner">
        <h2 class="projects__title">{{ $t('projects.title') }}</h2>

        <ul class="projects__list">
          <li class="projects__item project" v-for="item in projects">
            <img class="project__poster" :src="item.photo">
            <h3 class="project__title">{{ item[`title_${locale}`] }}</h3>
            <p class="project__info">
              <a :href="'/projects/' + item.id">{{ $t('projects.more') }}</a>
            </p>
          </li>
        </ul>
      </div>
    </div>
  </section> -->

  <!-- FORUM-SECOND -->

  <!-- <section class="forum-second">
    <div class="container">
      <div class="forum-second__inner">
        <div class="forum-second__forum forum">
          <div class="forum__start">
            <h2 class="forum__title">{{ $t('1.title') }}</h2>

            <div class="forum__start-inner">
              <p class="forum__info">Главный региональный форум страны и ключевая площадка для обсуждения реализации
                национальных проектов, наращивания экономического потенциала и демонстрации инвестиционных возможностей
                субъектов Республики Узбекистан с целью обеспечения благополучия и достижения нового качества жизни
                граждан
                Узбекистана.</p>
            </div>
          </div>

          <div class="forum__end">
            <div class="forum__controls">
              <button class="forum__btn forum__btn--active">Первый день</button>
              <button class="forum__btn">Второй день</button>
            </div>

            <div class="forum__end-inner">
              <div class="forum__item">
                <span class="forum__item-date">10:00 - 10:10</span>
                <p class="forum__item-title">Начальная часть</p>
              </div>
              <div class="forum__item">
                <span class="forum__item-date">10:10 - 10:25</span>
                <p class="forum__item-title">Выступление на пути Всемирной туристской организации в сфере образования</p>
              </div>
              <div class="forum__item">
                <span class="forum__item-date">10:25 - 11:10</span>
                <p class="forum__item-title">Министерская дискуссия на высшем уровне по политике поддержки инноваций и
                  образования для нынешнего и будущих поколений</p>
              </div>
              <div class="forum__item">
                <span class="forum__item-date">11:10 - 11:25</span>
                <p class="forum__item-title">Основная лекция: открытие сил завтрашнего дня:
                  трансформация технологий, инноваций и образования в безграничное будущее</p>
              </div>
              <div class="forum__item">
                <span class="forum__item-date">11:25 - 12:10</span>
                <p class="forum__item-title">Открывая горизонты: туризм как обязательный предмет для старшеклассников в
                  школах, перспективы молодежи и презентация образовательного пакета UNWTO</p>
              </div>
              <div class="forum__item">
                <span class="forum__item-date">12:10 - 12:25</span>
                <p class="forum__item-title">Основная лекция: образование, инвестиции в будущее</p>
              </div>
              <div class="forum__item">
                <span class="forum__item-date">12:25 - 12:35</span>
                <p class="forum__item-title">Открытие/презентация академии туризма в Узбекистане</p>
              </div>
              <div class="forum__item">
                <span class="forum__item-date">12:35 - 12:55</span>
                <p class="forum__item-title">Церемония награждения: премия UNWTO Ulysses Award за достижения в области
                  науки и распространения знаний в сфере туризма</p>
              </div>
              <div class="forum__item">
                <span class="forum__item-date">12:55 - 13:00</span>
                <p class="forum__item-title">Заключительная часть & церемония подписания документов</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section> -->

  <!-- NEWS -->

  <section class="news">
    <div class="container">
      <div class="news__inner">
        <h2 class="news__title">{{ $t('news.title') }}</h2>

        <!-- <div class="news__slider glide">
          <div class="glide__track" data-glide-el="track">
            <ul class="glide__slides">
              <li class="glide__slide news__item new">
                <img class="new__poster" src="~/assets/img/bg-new-3.jpg" />
                <div class="new__inner">
                  <h3 class="new__title">Медресе Абдулкасим</h3>
                  <a class="new__link" href="#">Подробно</a>
                </div>
              </li>
              <li class="glide__slide news__item new">
                <img class="new__poster" src="~/assets/img/bg-new-1.jpg" />
                <div class="new__inner">
                  <h3 class="new__title">Гостиница «Узбекистан»</h3>
                  <a class="new__link" href="#">Подробно</a>
                </div>
              </li>
              <li class="glide__slide news__item new">
                <img class="new__poster" src="~/assets/img/bg-new-2.jpg" />
                <div class="new__inner">
                  <h3 class="new__title">Ташкентская Телебашня</h3>
                  <a class="new__link" href="#">Подробно</a>
                </div>
              </li>
              <li class="glide__slide news__item new">
                <img class="new__poster" src="~/assets/img/bg-new-3.jpg" />
                <div class="new__inner">
                  <h3 class="new__title">Дворец международных форумов</h3>
                  <a class="new__link" href="#">Подробно</a>
                </div>
              </li>
            </ul>
          </div>
        </div> -->

        <ul class="news__list">
          <li class="news__item new" v-for="item in news">
            <img class="new__poster" :src="item.photo" />
            <div class="new__inner">
              <h3 class="new__title">{{ item[`title_${locale}`] }}</h3>
              <a class="new__link" :href="'/news/' + item.id">{{ $t('news.more') }}</a>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </section>

  <!-- GALLERIES -->

  <section class="galleries">
    <div class="container">
      <div class="galleries__inner">
        <h2 class="galleries__title">{{ $t('gallery.title') }}</h2>

        <ul class="galleries__list">
          <li class="galleries__item gallery" v-for="item in photos">
            <img class="gallery__poster" :src="item.photo">
          </li>

        </ul>
      </div>
    </div>
  </section>

  <!-- PARTNERS -->

  <section class="partners">
    <div class="container">
      <div class="partners__inner">
        <h2 class="partners__title">{{ $t('partners.title') }}</h2>

        <ul class="partners__list">
          <li class="partners__item partner">
            <img class="partner__poster" src="~/assets/img/partners-1.png">
          </li>
          <li class="partners__item partner">
            <img class="partner__poster" src="~/assets/img/partners-2.png">
          </li>
          <li class="partners__item partner">
            <img class="partner__poster" src="~/assets/img/partners-3.png">
          </li>
          <!-- <li class="partners__item partner">
            <img class="partner__poster" src="~/assets/img/partners-1.png">
          </li> -->
        </ul>
      </div>
    </div>
  </section>

  <!--  -->
</template>

<style scoped>
/* HERO */

.hero {
  position: relative;
  padding: 180px 48px 32px;
}

.hero_inner {
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 157px;
}

.hero::before {
  content: '';
  position: absolute;
  top: -80px;
  left: 0;
  width: 100%;
  height: calc(100% + 100px);
  background-image: url('~/assets/img/bg-hero.jpg');
  background-size: cover;
  z-index: -1;
}

.hero__logo {
  width: 246px;
  height: 32px;
}

.hero__btn {
  text-align: center;
  font-weight: 500;
  background-image: url('~/assets/img/bg-hero-btn.svg');
  width: 157px;
  height: 35px;
  padding: 8px 16px 11px;
  color: #fff;
}

/* DIVIDER */

.divider {
  height: 20px;
  background-image: url('~/assets/img/bg-divider.svg');
  background-repeat: repeat-x;
  background-size: 50px 20px;
}

/* ABOUT */

.about {
  padding: 42px 0 48px;
  background-color: #020C4C;
  background-image: url('~/assets/img/bg-about.svg');
  background-position: top 40px left 50%;
  background-size: 292px 150px;
}

.about__title {
  margin-bottom: 17px;
  color: #19A2DB;
  text-align: center;
  font-family: "Bebas Neue", sans-serif;
  font-size: 24px;
  font-weight: 700;
  line-height: 32px;
  text-transform: uppercase;
}

.about__info {
  padding: 0 3px;
  margin-bottom: 46px;
  color: #C0C0C0;
  text-align: center;
}

.about__video {
  margin-bottom: 32px;
  padding: 0 16px;
  display: block;
  width: 100%;
  /* height: 180px; */
  aspect-ratio: 16 / 9;
}

/* FORUM */

.forum {
  display: flex;
  flex-direction: column;
  row-gap: 32px;
}

.forum__start {
  padding-right: 10px;
}

.forum__title {
  margin-bottom: 16px;
  color: #19A2DB;
  font-family: "Bebas Neue", sans-serif;
  font-size: 24px;
  font-weight: 700;
  line-height: 32px;
  text-transform: uppercase;
}

.forum__start-inner {
  display: flex;
  flex-direction: column;
  row-gap: 8px;
}

.forum__info {
  color: #C0C0C0;
}

.forum__end {
  padding: 24px 16px;
  background-color: #FFA734;
  /* background-image: url('~/assets/img/bg-forum.svg'); */
}

.forum__controls {
  display: flex;
  column-gap: 16px;
  margin-bottom: 8px;
}

.forum__btn {
  color: #fff;
  font-family: "Bebas Neue", sans-serif;
  font-weight: 700;
  line-height: 20px;
  text-transform: uppercase;
  opacity: 0.5;
}

.forum__btn--active {
  opacity: 1;
}

.forum__end-inner {
  display: flex;
  flex-direction: column;
  row-gap: 8px;
}


.forum__item {
  display: flex;
  column-gap: 9px;
}

.forum__item-date {
  flex-shrink: 0;
  color: #fff;
  font-family: "Bebas Neue", sans-serif;
  font-weight: 700;
}

.forum__item-title {
  font-family: "Bebas Neue", sans-serif;
  color: #020C4C;
  white-space: pre-line;
}

/* PROJECTS */

.projects {
  padding: 24px 0;
}

.projects__title {
  margin-bottom: 8px;
  color: #020C4C;
  font-family: "Bebas Neue", sans-serif;
  font-size: 24px;
  font-weight: 700;
  line-height: 32px;
  text-transform: uppercase;
}

.projects__list {
  display: flex;
  flex-direction: column;
  row-gap: 16px;
}

.projects__item:not(:last-child) {
  padding-bottom: 16px;
  border-bottom: 1px solid #C0C0C0;
}

.project__poster {
  width: 100%;
  margin-bottom: 8px;
  object-fit: cover;
}

.project__title {
  margin-bottom: 8px;
  color: #2F373E;
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
}

.project__info {
  color: #6A6E82;
}

/* FORUM-SECOND */

.forum-second {
  padding: 48px 0;
  background-color: #020C4C;
}

.forum-second .forum__end {
  background-color: #19A2DB;
}

/* NEWS */

.news {
  padding: 24px 0;
}

.news__title {
  margin-bottom: 8px;
  color: #020C4C;
  font-family: "Bebas Neue", sans-serif;
  font-size: 24px;
  font-weight: 700;
  line-height: 32px;
  text-transform: uppercase;
}

/* .news .container {
  padding-right: 0;
} */

.news__list {
  display: flex;
  /* column-gap: 13px; */
  row-gap: 16px;
  flex-direction: column;
  /* overflow-x: scroll; */
}

.news__list::-webkit-scrollbar {
  display: none;
}

.news__item {
  flex-shrink: 0;
}

/* .news__item:last-child {
  margin-right: 16px;
} */

.new__poster {
  width: 100%;
  object-fit: cover;
  height: 230px;
}

.new {
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.new__inner {
  flex-grow: 1;
  padding: 13px;
  background-color: #0C2A5C;
}

.new__title {
  margin-bottom: 8.5px;
  color: #FFF;
  font-size: 13px;
  font-weight: 600;
  line-height: 17px;
}

.new__link {
  position: relative;
  color: #FFF;
  font-size: 8.5px;
  line-height: 12.8px;
}

/* .new__link::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  /* background-color: #000; */
/* opacity: 0.5; */
/* } */

.new__link::after {
  content: '';
  position: absolute;
  top: 0;
  left: calc(100% + 8.5px);
  background-image: url('~/assets/img/icon-arrow-right.svg');
  width: 40px;
  height: 100%;
}

/* GALLERIES */

.galleries {
  padding: 24px 0;
  background-color: #020C4C;
}

.galleries__title {
  margin-bottom: 8px;
  color: #fff;
  font-family: "Bebas Neue", sans-serif;
  font-size: 24px;
  font-weight: 700;
  line-height: 32px;
  text-transform: uppercase;
}

/* .galleries .container {
  padding-right: 0;
} */

.galleries__list {
  display: flex;
  flex-direction: column;
  /* column-gap: 8px; */
  gap: 16px;
  /* overflow-x: scroll; */
}

.galleries__list::-webkit-scrollbar {
  display: none;
}

.galleries__item {
  /* width: 60%; */
  flex-shrink: 0;
  flex-grow: 1;
}

/* .galleries__item:last-child {
  margin-right: 16px;
} */

.gallery__poster {
  width: 100%;
  object-fit: cover;
  height: 250px;
}

.gallery {
  border-radius: 5px;
  overflow: hidden;
}

/* PARTNERS */

.partners {
  padding: 24px 0;
}

.partners__title {
  margin-bottom: 16px;
  color: #020C4C;
  font-family: "Bebas Neue", sans-serif;
  font-size: 24px;
  font-weight: 700;
  line-height: 32px;
  text-transform: uppercase;
}

.partners .container {
  padding-right: 0;
}

.partners__list {
  display: flex;
  gap: 16px;
  overflow-x: scroll;
  justify-content: center;
  flex-wrap: wrap;
}

.partners__list::-webkit-scrollbar {
  display: none;
}

.partners__item {
  flex-shrink: 0;
  width: 100%;
}

.partners__item:last-child {
  margin-right: 16px;
}

.partner__poster {
  width: 100%;
  object-fit: contain;
  height: 56px;
}

/* TABLET */

@media screen and (min-width: 768px) {
  /* HERO */

  .hero {
    padding: 200px 48px 60px;
  }

  .hero__logo {
    width: 492px;
    height: 64px;
  }

  .hero__btn {
    position: relative;
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
    padding: 14px 40px 18px;
    width: 232px;
    height: 52px
  }

  .hero::before {
    background-image: url('~/assets/img/bg-hero-tablet.jpg');
    height: calc(100% + 70px);
    top: -70px;
  }

  .hero__btn::after {
    content: '';
    position: absolute;
    top: calc(100% + 16px);
    left: 50%;
    transform: translateX(-50%);
    width: 24px;
    height: 24px;
    background-image: url('~/assets/img/icon-arrow-down.svg');
  }

  /* DIVIDER */

  .divider {
    height: 40px;
    background-size: 100px 40px;
  }


  /* ABOUT */
  .about {
    padding: 56px 0 48px;
    background-position: top 56px left 50%;
    background-size: 269px 138px;
  }

  .about__title {
    font-size: 40px;
    line-height: 48px;
  }

  .about__info {
    padding: 0 77px;
    margin-bottom: 62px;
    font-size: 14px;
    line-height: 20px;
  }

  .about__video {
    margin-bottom: 40px;
    padding: 0 56px;
  }

  /* FORUM */

  .forum {
    flex-direction: row;
    align-items: flex-start;
    column-gap: 22px;
  }

  .forum__start {
    max-width: 512px;
    padding-right: 0;
    padding-top: 30px;
    flex-grow: 1;
  }

  .forum__title {
    margin-bottom: 17px;
    font-size: 40px;
    line-height: 48px;
  }

  .forum__info {
    font-size: 14px;
    line-height: 20px;
  }

  .forum__start-inner {
    row-gap: 9px;
  }

  .forum__end {
    /* width: 160%; */
    flex-grow: 1;
    padding: 30px 13px 20px 20px;
  }

  .forum__controls {
    column-gap: 17px;
    margin-bottom: 12.8px;
  }

  .forum__end-inner {
    row-gap: 8px;
  }

  .forum__item-date,
  .forum__item-title {
    font-size: 14px;
    line-height: 16px;
  }

  /* PROJECTS */

  .projects {
    padding: 40px 0;
  }

  .projects__title {
    margin-bottom: 21px;
    font-size: 40px;
    line-height: 48px;
  }

  .projects__list {
    flex-direction: row;
    column-gap: 13px;
    flex-wrap: wrap;
  }

  .projects__item {
    width: 48%;
  }

  .projects__item:not(:last-child) {
    padding-bottom: 0;
    border-bottom: 0;
  }

  .project__poster {
    margin-bottom: 13px;
  }

  /* FORUM-SECOND */

  .forum-second {
    padding: 40px 0;
  }

  .forum-second .forum__start {
    padding-top: 0;
  }

  /* NEWS */

  .news {
    padding: 40px 0;
  }

  .news__title {
    margin-bottom: 21px;
    font-size: 40px;
    line-height: 48px;
  }

  .news__item:last-child {
    margin-right: 0;
  }

  .news__list {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 16px;
  }

  .new {
    width: 48%;
  }

  /* GALLERIES */

  .galleries {
    padding: 40px 0;
  }

  .galleries__title {
    margin-bottom: 24px;
    font-size: 40px;
    line-height: 48px;
  }

  .gallery__poster {
    height: 300px;
  }

  .galleries__list {
    flex-direction: row;
    column-gap: 16px;
    flex-wrap: wrap;
  }

  .galleries__item {
    width: 48%;
  }

  /* PARTNERS */

  .partners {
    padding: 40px 0;
  }

  .partners__title {
    margin-bottom: 24px;
    font-size: 40px;
    line-height: 48px;
  }

  .partners__list {
    column-gap: 42px;
  }

  .partners__item {
    width: auto;
  }

}

@media screen and (min-width: 1300px) {
  .hero {
    padding: 376px 0 112px;
  }

  .hero__logo {
    width: 800px;
    height: 104px;
  }

  .hero__btn {
    font-size: 28px;
    line-height: 32px;
    padding: 24px 72px 32px;
    width: 435px;
    height: 88px
  }

  .hero::before {
    height: calc(100% + 110px);
    top: -100px;
    background-image: url('~/assets/img/bg-hero-desktop.jpg');
  }

  .hero__btn::after {
    top: calc(100% + 40px);
    width: 48px;
    height: 48px;
  }

  /* DIVIDER */

  .divider {
    height: 80px;
    background-size: 200px 80px;
  }

  /* ABOUT */
  .about {
    padding: 120px 0 11px;
    background-position: top 80px left 50%;
    background-size: 504px 258px;
  }

  .about__title {
    margin-bottom: 32px;
    font-size: 72px;
    line-height: 80px;
  }

  .about__info {
    padding: 0;
    max-width: 960px;
    margin: 0 auto;
    margin-bottom: 120px;
    font-size: 18px;
    line-height: 24px;
  }

  .about__video {
    padding: 0;
    max-width: 1311px;
    margin: 0 auto;
    margin-bottom: 80px;
  }

  .forum {
    column-gap: 40px;
  }

  .forum__start {
    flex-shrink: 0;
    width: 60%;
    max-width: 60%;
  }

  .forum__end {
    max-width: 680px;
  }

  .forum__title {
    margin-bottom: 32px;
    font-size: 72px;
    line-height: 80px;
  }

  .forum__info {
    font-size: 20px;
    line-height: 24px;
  }

  .forum__start-inner {
    row-gap: 16px;
  }

  .forum__end {
    padding: 56px 40px 40px;
  }

  .forum__controls {
    column-gap: 32px;
    margin-bottom: 24px;
  }

  .forum__end-inner {
    row-gap: 16px;
  }

  .forum__btn {
    font-size: 32px;
    line-height: 40px;
  }

  .forum__item {
    column-gap: 16px;
  }

  .forum__item-date,
  .forum__item-title {
    font-size: 24px;
    line-height: 24px;
  }

  .projects {
    padding: 80px 0;
  }

  .projects__title {
    margin-bottom: 40px;
    font-size: 72px;
    line-height: 80px;
  }

  .projects__list {
    column-gap: 24px;
  }

  .projects__item {
    width: 23%;
  }

  .project__poster {
    margin-bottom: 24px;
  }

  .project__title {
    margin-bottom: 16px;
    font-size: 24px;
    line-height: 32px;
  }

  .project__info {
    font-size: 18px;
    line-height: 24px;
  }

  .forum-second {
    padding-top: 80px;
  }

  /* NEWS */

  .news {
    padding: 80px 0;
  }

  .news__title {
    margin-bottom: 40px;
    font-size: 72px;
    line-height: 80px;
  }

  .news__item {
    width: 24%;
    /* flex-grow: 1; */
    /* border-radius: 5px;
    overflow: hidden; */
  }

  /* nels */

  .new__inner {
    padding: 24px;
  }

  .new__title {
    margin-bottom: 16px;
    font-size: 24px;
    line-height: 32px;
  }

  .new__link {
    font-size: 16px;
    line-height: 24px;
  }

  .new__link::after {
    width: 72px;
  }

  .new__poster {
    height: 232px;
  }

  /* GALLERIES */

  .galleries {
    padding: 80px 0;
  }

  .galleries__title {
    margin-bottom: 40px;
    font-size: 72px;
    line-height: 80px;
  }

  .galleries__item {
    width: 20%;
    flex-grow: 1;
  }

  .gallery__poster {
    width: 100%;
    height: auto;
  }

  /* PARTNERS */

  .partners {
    padding: 80px 0;
  }

  .partners__title {
    margin-bottom: 40px;
    font-size: 72px;
    line-height: 80px;
  }

  .partners__list {
    column-gap: 80px;
  }

  .partner__poster {
    height: 104px;
  }
}
</style>

<script setup>
// Fetch photos object from /api/galleries
// Fetch news object from /api/news

import { ref } from 'vue'

const { locale } = useI18n()

const photos = ref([])
const fetchPhotos = async () => {
  const res = await fetch('/api/galleries')
  photos.value = await res.json()
}

const news = ref([])
const fetchNews = async () => {
  const res = await fetch('/api/news')
  news.value = await res.json()
}


const projects = ref([])
const fetchProjects = async () => {
  const res = await fetch('/api/projects')
  projects.value = await res.json()
}

fetchPhotos()
fetchNews()
fetchProjects()

const activeDay = ref(1);

const changeDay = (day) => {
  activeDay.value = day;
}

</script>