<template>
  <!-- REGISTER -->

  <section class="register">
    <a class="register__dismiss-btn" href="/"></a>
    <a class="register__logo" href="/">
      <img class="register__logo-img" src="~/assets/img/logo.svg" alt="Shakhrisabz 2024 logo" />
    </a>

    <img class="register__bg" src="~/assets/img/bg-register.jpg" />

    <div class="screen screen--one screen--active">
      <p class="register__title register__title--one">{{ $t('register.registerCode') }}</p>
      <p class="register__subtitle register__subtitle--one">{{ $t('register.writeCode') }}</p>
      <input class="register__input register__input--one" :placeholder="$t('register.placeholder')">
      <button class="register__btn register__btn--one">{{ $t('register.continue') }}</button>
    </div>

    <div class="screen screen--two">
      <p class="register__title register__title--two">{{ $t('register.contents') }}</p>

      <form class="register__form" method="post" style="display: contents;">
        <label class="register__input-wrapper w-50">
          <span class="register__input-title">{{ $t('register.name') }}</span>
          <input class="register__input" :placeholder="$t('register.name')" name="first_name" required>
        </label>

        <label class="register__input-wrapper w-50">
          <span class="register__input-title">{{ $t('register.surname') }}</span>
          <input class="register__input" :placeholder="$t('register.surnamePl')" name="last_name" required>
        </label>

        <label class="register__input-wrapper w-50">
          <span class="register__input-title">{{ $t('register.birthDate') }}</span>
          <input class="register__input" :placeholder="$t('register.birthDatePl')" type="date" name="birth_date" required>
        </label>

        <label class="register__input-wrapper w-50">
          <span class="register__input-title">{{ $t('register.email') }}</span>
          <input class="register__input" :placeholder="$t('register.emailPl')" type="email" name="email_address"
            required>
        </label>

        <label class="register__input-wrapper">
          <span class="register__input-title">{{ $t('register.citizenship') }}</span>
          <select class="register__input" name="country" required>
            <option selected disabled value="">{{ $t('register.citizenship') }}</option>
            <option value="Afghanistan">Afghanistan</option>
            <option value="Åland Islands">Åland Islands</option>
            <option value="Albania">Albania</option>
            <option value="Algeria">Algeria</option>
            <option value="American Samoa">American Samoa</option>
            <option value="Andorra">Andorra</option>
            <option value="Angola">Angola</option>
            <option value="Anguilla">Anguilla</option>
            <option value="Antarctica">Antarctica</option>
            <option value="Antigua and Barbuda">Antigua and Barbuda</option>
            <option value="Argentina">Argentina</option>
            <option value="Armenia">Armenia</option>
            <option value="Aruba">Aruba</option>
            <option value="Australia">Australia</option>
            <option value="Austria">Austria</option>
            <option value="Azerbaijan">Azerbaijan</option>
            <option value="Bahamas">Bahamas</option>
            <option value="Bahrain">Bahrain</option>
            <option value="Bangladesh">Bangladesh</option>
            <option value="Barbados">Barbados</option>
            <option value="Belarus">Belarus</option>
            <option value="Belgium">Belgium</option>
            <option value="Belize">Belize</option>
            <option value="Benin">Benin</option>
            <option value="Bermuda">Bermuda</option>
            <option value="Bhutan">Bhutan</option>
            <option value="Bolivia, Plurinational State of">Bolivia, Plurinational State of</option>
            <option value="Bonaire, Sint Eustatius and Saba">Bonaire, Sint Eustatius and Saba</option>
            <option value="Bosnia and Herzegovina">Bosnia and Herzegovina</option>
            <option value="Botswana">Botswana</option>
            <option value="Bouvet Island">Bouvet Island</option>
            <option value="Brazil">Brazil</option>
            <option value="British Indian Ocean Territory">British Indian Ocean Territory</option>
            <option value="Brunei Darussalam">Brunei Darussalam</option>
            <option value="Bulgaria">Bulgaria</option>
            <option value="Burkina Faso">Burkina Faso</option>
            <option value="Burundi">Burundi</option>
            <option value="Cambodia">Cambodia</option>
            <option value="Cameroon">Cameroon</option>
            <option value="Canada">Canada</option>
            <option value="Cape Verde">Cape Verde</option>
            <option value="Cayman Islands">Cayman Islands</option>
            <option value="Central African Republic">Central African Republic</option>
            <option value="Chad">Chad</option>
            <option value="Chile">Chile</option>
            <option value="China">China</option>
            <option value="Christmas Island">Christmas Island</option>
            <option value="Cocos (Keeling) Islands">Cocos (Keeling) Islands</option>
            <option value="Colombia">Colombia</option>
            <option value="Comoros">Comoros</option>
            <option value="Congo">Congo</option>
            <option value="Congo, the Democratic Republic of the">Congo, the Democratic Republic of the</option>
            <option value="Cook Islands">Cook Islands</option>
            <option value="Costa Rica">Costa Rica</option>
            <option value="Côte d'Ivoire">Côte d'Ivoire</option>
            <option value="Croatia">Croatia</option>
            <option value="Cuba">Cuba</option>
            <option value="Curaçao">Curaçao</option>
            <option value="Cyprus">Cyprus</option>
            <option value="Czech Republic">Czech Republic</option>
            <option value="Denmark">Denmark</option>
            <option value="Djibouti">Djibouti</option>
            <option value="Dominica">Dominica</option>
            <option value="Dominican Republic">Dominican Republic</option>
            <option value="Ecuador">Ecuador</option>
            <option value="Egypt">Egypt</option>
            <option value="El Salvador">El Salvador</option>
            <option value="Equatorial Guinea">Equatorial Guinea</option>
            <option value="Eritrea">Eritrea</option>
            <option value="Estonia">Estonia</option>
            <option value="Ethiopia">Ethiopia</option>
            <option value="Falkland Islands (Malvinas)">Falkland Islands (Malvinas)</option>
            <option value="Faroe Islands">Faroe Islands</option>
            <option value="Fiji">Fiji</option>
            <option value="Finland">Finland</option>
            <option value="France">France</option>
            <option value="French Guiana">French Guiana</option>
            <option value="French Polynesia">French Polynesia</option>
            <option value="French Southern Territories">French Southern Territories</option>
            <option value="Gabon">Gabon</option>
            <option value="Gambia">Gambia</option>
            <option value="Georgia">Georgia</option>
            <option value="Germany">Germany</option>
            <option value="Ghana">Ghana</option>
            <option value="Gibraltar">Gibraltar</option>
            <option value="Greece">Greece</option>
            <option value="Greenland">Greenland</option>
            <option value="Grenada">Grenada</option>
            <option value="Guadeloupe">Guadeloupe</option>
            <option value="Guam">Guam</option>
            <option value="Guatemala">Guatemala</option>
            <option value="Guernsey">Guernsey</option>
            <option value="Guinea">Guinea</option>
            <option value="Guinea-Bissau">Guinea-Bissau</option>
            <option value="Guyana">Guyana</option>
            <option value="Haiti">Haiti</option>
            <option value="Heard Island and McDonald Islands">Heard Island and McDonald Islands</option>
            <option value="Holy See (Vatican City State)">Holy See (Vatican City State)</option>
            <option value="Honduras">Honduras</option>
            <option value="Hong Kong">Hong Kong</option>
            <option value="Hungary">Hungary</option>
            <option value="Iceland">Iceland</option>
            <option value="India">India</option>
            <option value="Indonesia">Indonesia</option>
            <option value="Iran, Islamic Republic of">Iran, Islamic Republic of</option>
            <option value="Iraq">Iraq</option>
            <option value="Ireland">Ireland</option>
            <option value="Isle of Man">Isle of Man</option>
            <option value="Israel">Israel</option>
            <option value="Italy">Italy</option>
            <option value="Jamaica">Jamaica</option>
            <option value="Japan">Japan</option>
            <option value="Jersey">Jersey</option>
            <option value="Jordan">Jordan</option>
            <option value="Kazakhstan">Kazakhstan</option>
            <option value="Kenya">Kenya</option>
            <option value="Kiribati">Kiribati</option>
            <option value="Korea, Democratic People's Republic of">Korea, Democratic People's Republic of</option>
            <option value="Korea, Republic of">Korea, Republic of</option>
            <option value="Kuwait">Kuwait</option>
            <option value="Kyrgyzstan">Kyrgyzstan</option>
            <option value="Lao People's Democratic Republic">Lao People's Democratic Republic</option>
            <option value="Latvia">Latvia</option>
            <option value="Lebanon">Lebanon</option>
            <option value="Lesotho">Lesotho</option>
            <option value="Liberia">Liberia</option>
            <option value="Libya">Libya</option>
            <option value="Liechtenstein">Liechtenstein</option>
            <option value="Lithuania">Lithuania</option>
            <option value="Luxembourg">Luxembourg</option>
            <option value="Macao">Macao</option>
            <option value="Macedonia, the Former Yugoslav Republic of">Macedonia, the Former Yugoslav Republic of
            </option>
            <option value="Madagascar">Madagascar</option>
            <option value="Malawi">Malawi</option>
            <option value="Malaysia">Malaysia</option>
            <option value="Maldives">Maldives</option>
            <option value="Mali">Mali</option>
            <option value="Malta">Malta</option>
            <option value="Marshall Islands">Marshall Islands</option>
            <option value="Martinique">Martinique</option>
            <option value="Mauritania">Mauritania</option>
            <option value="Mauritius">Mauritius</option>
            <option value="Mayotte">Mayotte</option>
            <option value="Mexico">Mexico</option>
            <option value="Micronesia, Federated States of">Micronesia, Federated States of</option>
            <option value="Moldova, Republic of">Moldova, Republic of</option>
            <option value="Monaco">Monaco</option>
            <option value="Mongolia">Mongolia</option>
            <option value="Montenegro">Montenegro</option>
            <option value="Montserrat">Montserrat</option>
            <option value="Morocco">Morocco</option>
            <option value="Mozambique">Mozambique</option>
            <option value="Myanmar">Myanmar</option>
            <option value="Namibia">Namibia</option>
            <option value="Nauru">Nauru</option>
            <option value="Nepal">Nepal</option>
            <option value="Netherlands">Netherlands</option>
            <option value="New Caledonia">New Caledonia</option>
            <option value="New Zealand">New Zealand</option>
            <option value="Nicaragua">Nicaragua</option>
            <option value="Niger">Niger</option>
            <option value="Nigeria">Nigeria</option>
            <option value="Niue">Niue</option>
            <option value="Norfolk Island">Norfolk Island</option>
            <option value="Northern Mariana Islands">Northern Mariana Islands</option>
            <option value="Norway">Norway</option>
            <option value="Oman">Oman</option>
            <option value="Pakistan">Pakistan</option>
            <option value="Palau">Palau</option>
            <option value="Palestine, State of">Palestine, State of</option>
            <option value="Panama">Panama</option>
            <option value="Papua New Guinea">Papua New Guinea</option>
            <option value="Paraguay">Paraguay</option>
            <option value="Peru">Peru</option>
            <option value="Philippines">Philippines</option>
            <option value="Pitcairn">Pitcairn</option>
            <option value="Poland">Poland</option>
            <option value="Portugal">Portugal</option>
            <option value="Puerto Rico">Puerto Rico</option>
            <option value="Qatar">Qatar</option>
            <option value="Réunion">Réunion</option>
            <option value="Romania">Romania</option>
            <option value="Russian Federation">Russian Federation</option>
            <option value="Rwanda">Rwanda</option>
            <option value="Saint Barthélemy">Saint Barthélemy</option>
            <option value="Saint Helena, Ascension and Tristan da Cunha">Saint Helena, Ascension and Tristan da Cunha
            </option>
            <option value="Saint Kitts and Nevis">Saint Kitts and Nevis</option>
            <option value="Saint Lucia">Saint Lucia</option>
            <option value="Saint Martin (French part)">Saint Martin (French part)</option>
            <option value="Saint Pierre and Miquelon">Saint Pierre and Miquelon</option>
            <option value="Saint Vincent and the Grenadines">Saint Vincent and the Grenadines</option>
            <option value="Samoa">Samoa</option>
            <option value="San Marino">San Marino</option>
            <option value="Sao Tome and Principe">Sao Tome and Principe</option>
            <option value="Saudi Arabia">Saudi Arabia</option>
            <option value="Senegal">Senegal</option>
            <option value="Serbia">Serbia</option>
            <option value="Seychelles">Seychelles</option>
            <option value="Sierra Leone">Sierra Leone</option>
            <option value="Singapore">Singapore</option>
            <option value="Sint Maarten (Dutch part)">Sint Maarten (Dutch part)</option>
            <option value="Slovakia">Slovakia</option>
            <option value="Slovenia">Slovenia</option>
            <option value="Solomon Islands">Solomon Islands</option>
            <option value="Somalia">Somalia</option>
            <option value="South Africa">South Africa</option>
            <option value="South Georgia and the South Sandwich Islands">South Georgia and the South Sandwich Islands
            </option>
            <option value="South Sudan">South Sudan</option>
            <option value="Spain">Spain</option>
            <option value="Sri Lanka">Sri Lanka</option>
            <option value="Sudan">Sudan</option>
            <option value="Suriname">Suriname</option>
            <option value="Svalbard and Jan Mayen">Svalbard and Jan Mayen</option>
            <option value="Swaziland">Swaziland</option>
            <option value="Sweden">Sweden</option>
            <option value="Switzerland">Switzerland</option>
            <option value="Syrian Arab Republic">Syrian Arab Republic</option>
            <option value="Taiwan, Province of China">Taiwan, Province of China</option>
            <option value="Tajikistan">Tajikistan</option>
            <option value="Tanzania, United Republic of">Tanzania, United Republic of</option>
            <option value="Thailand">Thailand</option>
            <option value="Timor-Leste">Timor-Leste</option>
            <option value="Togo">Togo</option>
            <option value="Tokelau">Tokelau</option>
            <option value="Tonga">Tonga</option>
            <option value="Trinidad and Tobago">Trinidad and Tobago</option>
            <option value="Tunisia">Tunisia</option>
            <option value="Turkey">Turkey</option>
            <option value="Turkmenistan">Turkmenistan</option>
            <option value="Turks and Caicos Islands">Turks and Caicos Islands</option>
            <option value="Tuvalu">Tuvalu</option>
            <option value="Uganda">Uganda</option>
            <option value="Ukraine">Ukraine</option>
            <option value="United Arab Emirates">United Arab Emirates</option>
            <option value="United Kingdom">United Kingdom</option>
            <option value="United States">United States</option>
            <option value="United States Minor Outlying Islands">United States Minor Outlying Islands</option>
            <option value="Uruguay">Uruguay</option>
            <option value="Uzbekistan">Uzbekistan</option>
            <option value="Vanuatu">Vanuatu</option>
            <option value="Venezuela, Bolivarian Republic of">Venezuela, Bolivarian Republic of</option>
            <option value="Viet Nam">Viet Nam</option>
            <option value="Virgin Islands, British">Virgin Islands, British</option>
            <option value="Virgin Islands, U.S.">Virgin Islands, U.S.</option>
            <option value="Wallis and Futuna">Wallis and Futuna</option>
            <option value="Western Sahara">Western Sahara</option>
            <option value="Yemen">Yemen</option>
            <option value="Zambia">Zambia</option>
            <option value="Zimbabwe">Zimbabwe</option>
          </select>
        </label>

        <label class="register__input-wrapper w-50">
          <span class="register__input-title">{{ $t('register.passport') }}</span>
          <!-- <div class="register__multiple"> -->
          <!-- <input class="register__input w-20" placeholder="AA"> -->
          <input class="register__input" :placeholder="$t('register.passportPl')" type="text" minlength="5"
            name="passport_id" required>
          <!-- </div> -->
        </label>

        <label class="register__input-wrapper w-50">
          <span class="register__input-title">{{ $t('register.passportDate') }}</span>
          <input class="register__input" :placeholder="$t('register.passportDate')" type="date" name="passport_date" required>
        </label>

        <label class="register__input-wrapper">
          <span class="register__input-title">{{ $t('register.organization') }}</span>
          <select class="register__input" name="organization" required>
            <option selected disabled value="">{{ $t('register.organizationPl') }}</option>
            <option v-for="organization in organizations" :value="organization.title">{{ organization.title }}</option>
          </select>
        </label>

        <label class="register__input-wrapper w-50">
          <span class="register__input-title">{{ $t('register.organizationInfo') }}</span>
          <input class="register__input" :placeholder="$t('register.organizationInfoPl')" name="organization_info" required>
        </label>

        <label class="register__input-wrapper w-50">
          <span class="register__input-title">{{ $t('register.position') }}</span>
          <input class="register__input" :placeholder="$t('register.position')" name="organization_position" required>
        </label>

        <label class="register__input-wrapper w-50">
          <span class="register__input-title">{{ $t('register.photo') }}</span>
          <input class="register__input" :placeholder="$t('register.photo')" type="file" name="photo" required>
        </label>

        <button class="register__btn register__btn--two" type="submit">{{ $t('register.title') }}</button>
      </form>

      <p class="offer">
        {{ $t('register.offer1') }}
        <a class="offer__link" href="#">{{ $t('register.offer2') }}</a>
        {{ $t('register.offer3') }}
        <a class="offer__link" href="#">{{ $t('register.offer4') }}</a> 
      </p>
    </div>

    <div class="screen screen--three">
      <p class="register__title register__title--three">{{ $t('success.title') }}</p>
      <p class="register__subtitle register__subtitle--three">{{ $t('success.id') }}</p>
      <p class="register__title register__title--three" id="uid"></p>
    </div>
  </section>
</template>

<style scoped>
.register {
  /* height: 100vh; */
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
import { ref } from 'vue';

export default {
  mounted() {
    document.querySelector('.site-header').style.display = 'none';
    document.querySelector('.site-footer').style.display = 'none';
    document.querySelector('.copyright').style.display = 'none';
    document.querySelector('.divider').style.display = 'none';
    // document.querySelector('.screen--two').classList.add('screen--active');

    // Form submit

    document.querySelector('.register__form').addEventListener('submit', async (event) => {
      event.preventDefault();
      const formData = new FormData(event.target);
      const fileInput = document.querySelector('input[type="file"]');
      const file = fileInput.files[0];
      const fileSize = file.size / 1024 / 1024; // size in MB
      const acceptableExtensions = ['jpg', 'jpeg', 'png'];
      const fileExtension = file.name.split('.').pop().toLowerCase();

      if (fileSize > 5) { // change this to your maximum allowed file size
        alert('File size should be less than 5 MB');
        return;
      } else if (!acceptableExtensions.includes(fileExtension)) {
        alert('Invalid file extension. Only jpg, jpeg, and png are allowed');
        return;
      }

      const img = new Image();
      img.src = URL.createObjectURL(file);
      img.onload = function () {
        const width = this.width;
        const height = this.height;
        if (Math.abs((width / height) - (3 / 4)) > 0.1) {
          alert('Image aspect ratio should be approximately 3:4');
          return;
        }
        return sendForm();
      };

      function sendForm() {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = async function () {
          const base64String = reader.result;
          const json = Object.fromEntries(formData.entries());
          json.image = base64String;
          json.code = document.querySelector('.register__input--one').value;

          try {
            const response = await fetch('/api/submit', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(json)
            });
            const data = await response.json();
            if (data.success) {
              document.getElementById('uid').textContent = data.uid;
              document.querySelector('.screen--two').classList.remove('screen--active');
              document.querySelector('.screen--three').classList.add('screen--active');
              return;
            }
            document.querySelector('.screen--three').innerHTML = `
      <h3 class="register__title register__title--three">
        Регистрация не удалась. Проверьте правильность регистрационного кода, изображения и другой необходимой информации. попробуйте отправить еще раз позже
        </h3>
      `;
            document.querySelector('.screen--two').classList.remove('screen--active');
            document.querySelector('.screen--three').classList.add('screen--active');
          } catch (error) {
            console.error('Error:', error);
          }
        };
      }
    });

    document.querySelector('.register__btn--one').addEventListener('click', (event) => {
      // Code input check for length

      const code = document.querySelector('.register__input--one').value;
      if (code.length < 4) {
        alert('Code should be minimum 3 length');
        return;
      }

      event.target.closest('.screen').classList.remove('screen--active');
      document.querySelector('.screen--two').classList.add('screen--active');
    })
  },

  async setup() {
    const organizations = ref([]);
    try {
      const response = await fetch('/api/organizations');
      if (!response.ok) {
        throw new Error('Failed to fetch organizations');
      }
      organizations.value = await response.json();
    } catch (error) {
      console.error('Error:', error);
    }
    return { organizations };
  }
}
</script>
