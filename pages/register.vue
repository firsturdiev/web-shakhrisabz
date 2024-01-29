<template>
  <!-- REGISTER -->

  <section class="register">
    <a class="register__dismiss-btn" href="/"></a>
    <a class="register__logo" href="/">
      <img class="register__logo-img" src="~/assets/img/logo.svg" alt="Shakhrisabz 2024 logo" />
    </a>

    <img class="register__bg" src="~/assets/img/bg-register.jpg" />

    <div class="screen screen--one screen--active">
      <p class="register__title register__title--one">Регистрационный код</p>
      <p class="register__subtitle register__subtitle--one">Введите код</p>
      <input class="register__input register__input--one" placeholder="Введите код из пригласительного">
      <button class="register__btn register__btn--one">Продолжать</button>
    </div>

    <div class="screen screen--two">
      <p class="register__title register__title--two">Регистрационны данные</p>

      <label class="register__input-wrapper w-50">
        <span class="register__input-title">Имя:</span>
        <input class="register__input" placeholder="Введите имя">
      </label>

      <label class="register__input-wrapper w-50">
        <span class="register__input-title">Фамилия:</span>
        <input class="register__input" placeholder="Введите фамилию">
      </label>

      <label class="register__input-wrapper w-50">
        <span class="register__input-title">Дата рождения:</span>
        <input class="register__input" placeholder="Выберите дату рождения" type="date">
      </label>

      <label class="register__input-wrapper w-50">
        <span class="register__input-title">Электронная почта:</span>
        <input class="register__input" placeholder="Введите электронную почту" type="email">
      </label>

      <label class="register__input-wrapper">
        <span class="register__input-title">Государство:</span>
        <select class="register__input">
          <option selected disabled>Выберите государство</option>
          <option>Uzbek</option>
        </select>
      </label>

      <label class="register__input-wrapper w-50">
        <span class="register__input-title">Серия и номер паспорта:</span>
        <div class="register__multiple">
          <input class="register__input w-20" placeholder="AA">
          <input class="register__input" placeholder="Введите номер" type="number">
        </div>
      </label>

      <label class="register__input-wrapper w-50">
        <span class="register__input-title">Срок действия паспорта:</span>
        <input class="register__input" placeholder="Введите срок действия" type="date">
      </label>

      <label class="register__input-wrapper">
        <span class="register__input-title">Организация:</span>
        <select class="register__input">
          <option selected disabled>Выберите организация</option>
          <option>Turism</option>
        </select>
      </label>

      <label class="register__input-wrapper w-50">
        <span class="register__input-title">Название организации:</span>
        <input class="register__input" placeholder="Введите название организации">
      </label>

      <label class="register__input-wrapper w-50">
        <span class="register__input-title">Должность::</span>
        <input class="register__input" placeholder="Введите должность">
      </label>

      <label class="register__input-wrapper w-50">
        <span class="register__input-title">Загрузите 3х4 фотографию::</span>
        <input class="register__input" placeholder="Выберите файл" type="file">
      </label>

      <button class="register__btn register__btn--two">Зарегистрироваться</button>
      <p class="offer">Нажимая на кнопку “Продолжить” вы соглашаетесь c
        <a class="offer__link" href="#">Договором
          Оферты</a> и
        <a class="offer__link" href="#">Политикой
          Конфиденциальности</a> UNWTO
      </p>
    </div>

    <div class="screen screen--three">
      <p class="register__title register__title--three">Вы успешно прошли регистрацию</p>
      <p class="register__subtitle register__subtitle--three">Ваш ID код</p>
      <p class="register__title register__title--three">GA 1234567</p>
    </div>
  </section>
</template>

<style scoped>
.register {
  height: 100vh;
  display: flex;
}

.register__bg {
  width: 50%;
  object-fit: cover;
}

.screen {
  position: relative;
  display: none;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin: 120px auto;
  max-width: 544px;
  width: 50%;
}

.screen--active {
  display: flex;
}

.register__dismiss-btn {
  position: absolute;
  top: 56px;
  right: 56px;
  width: 32px;
  height: 32px;
  background-image: url('~/assets/img/icon-dismiss.svg');
  z-index: 10;
}

.register__logo {
  position: absolute;
  top: 30px;
  left: 30px;
  width: 64px;
  height: 25px;
  z-index: 10;
}

.register__logo-img {
  width: 100%;
  height: 100%;
}

.register__title {
  color: #2B2D33;
  font-size: 40px;
  font-weight: 600;
  line-height: 48px;
}

.register__title--one {
  margin-bottom: 16px;
}

.register__subtitle {
  color: #2B2D33;
  font-size: 14px;
  line-height: 20px;
}

.register__subtitle--one {
  margin-bottom: 4px;
}

.register__input {
  padding: 14px 9px 14px 16px;
  border-radius: 4px;
  border: 1px solid #D5D5D6;
  font-size: 14px;
  line-height: 20px;
}

.register__input::placeholder {
  opacity: 1;
  color: #6A6E82;
  font-size: 14px;
  line-height: 20px;
}

.register__input--one {
  margin-bottom: 48px;
  width: 100%;
}


.register__btn {
  border-radius: 8px;
  background-color: #1D71B8;
  padding: 12px 100px;
  color: #FFF;
  text-align: center;
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
}

.register__btn--one {
  width: 100%;
}

.screen--two {
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
  row-gap: 16px;
  column-gap: 16px;
}

.register__title--two {
  width: 100%;
  margin-bottom: 24px;
}

.w-20 {
  width: 20%;
}

.register__input-wrapper {
  width: 100%;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  row-gap: 4px;
}

.register__multiple {
  display: flex;
  column-gap: 8px;
}


.w-50 {
  width: 45%;
}


.register__input-title {
  margin-bottom: 4px;
  color: #2B2D33;
  font-size: 14px;
  line-height: 20px;
}

.register__btn--two {
  width: 100%;
}

.offer {
  color: #808185;
  text-align: center;
  font-size: 16px;
  font-weight: 300;
  line-height: 24px;
}

.offer__link {
  text-decoration: underline;
}

.screen--three {
  align-items: center;
}

.register__title--three {
  margin-bottom: 40px;
  text-align: center;
}

.register__subtitle--three {
  margin-bottom: 8px;
}

@media screen and (max-width: 1200px) {
  .screen {
    margin: 60px auto;
    max-width: 290px;
    width: 290px;
  }

  .register__title {
    font-size: 21.3px;
    line-height: 25.6px;
  }

  .register__title--one {
    margin-bottom: 8.5px;
  }

  .register__subtitle {
    font-size: 7.467px;
    line-height: 10.667px;
  }

  .register__subtitle--one {
    margin-bottom: 2.5px;
  }

  .register__input {
    font-size: 7.5px;
    line-height: 10.6px;
    padding: 7.467px 4.8px 7.467px 8.533px;
  }

  .register__input::placeholder {
    font-size: 7.5px;
    line-height: 10.6px;
  }

  .register__input--one {
    margin-bottom: 25.6px;
  }

  .register__btn {
    padding: 6.4px 53.3px;
    border-radius: 4.3px;
    font-size: 8.5px;
    line-height: 12.8px;
  }

  .register__dismiss-btn {
    width: 17px;
    height: 17px;
    top: 30px;
    right: 30px;
  }

  .screen--two {
    gap: 8.5px;
  }

  .register__title--two {
    margin-bottom: 0;
    padding: 12.8px 0;
  }

  .register__input-wrapper {
    gap: 2.13px;
  }

  .register__multiple {
    column-gap: 4.3px;
  }

  .register__input-title {
    font-size: 7.467px;
    line-height: 10.667px;
  }

  .offer {
    font-size: 8.533px;
    line-height: 12.8px;
  }

  .register__title--three {
    margin-bottom: 21px;
  }

  .register__subtitle--three {
    margin-bottom: 4px;
  }
}

@media screen and (max-width: 600px) {
  .register__bg {
    display: none;
  }

  .register__logo {
    display: none;
  }

  .screen {
    margin: 60px auto;
    max-width: 290px;
    width: 290px;
  }

  .register__title {
    font-size: 21.333px;
    font-weight: 600;
    line-height: 25.6px;
  }

  .register__title--one {
    margin-bottom: 8.5px;
  }

  .register__title--two {
    padding: 12.8px 0;
  }
}
</style>

<script>
export default {
  mounted() {
    document.querySelector('.site-header').style.display = 'none';
    document.querySelector('.site-footer').style.display = 'none';
    document.querySelector('.copyright').style.display = 'none';
    document.querySelector('.divider').style.display = 'none';

    document.querySelector('.register__btn--one').addEventListener('click', (event) => {
      event.target.closest('.screen').classList.remove('screen--active');
      document.querySelector('.screen--two').classList.add('screen--active');
    })

    document.querySelector('.register__btn--two').addEventListener('click', (event) => {
      event.target.closest('.screen').classList.remove('screen--active');
      document.querySelector('.screen--three').classList.add('screen--active');
    })
  }
}
</script>