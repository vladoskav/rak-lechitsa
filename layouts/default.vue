<template>
  <div>
    <mobile-menu v-if="isMobileMenuOpened" class="main-mobile-menu" />
    <main-header/>
    <pop-up v-if="popupShown" @overlayClick="closePopup('popupShown')" @closeClick="closePopup('popupShown')" >
      <form-inputs v-if="popupShown" />
    </pop-up>
    <pop-up
      v-if="popupSocial"
      @overlayClick="closePopup('popupSocial')"
      @closeClick="closePopup('popupSocial')"
    >
      <form-social v-if="popupSocial" />
    </pop-up>
    <pop-up
      v-if="popupContact"
      @overlayClick="closePopup('popupContact')"
      @closeClick="closePopup('popupContact')"
    >
      <form-contact v-if="popupContact" />
    </pop-up>
    <nuxt />
    <footer-content />
  </div>
</template>

<script>
import Header from '@/components/Header';
import PopUp from '@/components/PopUp';
import Footer from '@/components/Footer';
import MobileMenu from '@/components/MobileMenu';
import Form from '@/components/Form';
import FormSocial from '@/components/FormSocial';
import FormContact from '@/components/FormContact';

export default {
  components: {
    'main-header': Header,
    'pop-up': PopUp,
    'footer-content': Footer,
    'mobile-menu': MobileMenu,
    'form-inputs': Form,
    'form-social': FormSocial,
    'form-contact': FormContact,
  },
  computed: {
    popupShown() {
      return this.$store.getters['popup/getPopupShown']
    },
    isMobileMenuOpened() {
      return this.$store.getters['mobile-menu/getMobileMenuState']
    },
    popupSocial() {
      return this.$store.getters[`popup/getPopupSocial`];
    },
    popupContact() {
      return this.$store.getters[`popup/getPopupContact`];
    },
  },
  methods: {
    closePopup(elem) {
      this.$store.commit('popup/togglePopup', elem);
    },
  },
};
</script>

<style>
html {
  font-family: 'Inter', monospace;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  line-height: 1.15;
  -webkit-text-size-adjust: 100%;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

body {
  margin: 0;
}

main {
  display: block;
}

h1 {
  font-size: 2em;
  margin: 0.67em 0;
}

hr {
  box-sizing: content-box;
  height: 0;
  overflow: visible;
}

pre {
  font-family: monospace, monospace;
  font-size: 1em;
}

a {
  background-color: transparent;
}

abbr[title] {
  border-bottom: none;
  text-decoration: underline;
  text-decoration: underline dotted;
}

b,
strong {
  font-weight: bolder;
}

code,
kbd,
samp {
  font-family: monospace, monospace; /* 1 */
  font-size: 1em; /* 2 */
}

small {
  font-size: 80%;
}

sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

sub {
  bottom: -0.25em;
}

sup {
  top: -0.5em;
}

img {
  border-style: none;
}

button,
input,
optgroup,
select,
textarea {
  font-family: inherit; /* 1 */
  font-size: 100%; /* 1 */
  line-height: 1.15; /* 1 */
  margin: 0; /* 2 */
}

button,
input {
  /* 1 */
  overflow: visible;
}

button,
select {
  /* 1 */
  text-transform: none;
}

button,
[type='button'],
[type='reset'],
[type='submit'] {
  -webkit-appearance: button;
}

button::-moz-focus-inner,
[type='button']::-moz-focus-inner,
[type='reset']::-moz-focus-inner,
[type='submit']::-moz-focus-inner {
  border-style: none;
  padding: 0;
}

button:-moz-focusring,
[type='button']:-moz-focusring,
[type='reset']:-moz-focusring,
[type='submit']:-moz-focusring {
  outline: 1px dotted ButtonText;
}

fieldset {
  padding: 0.35em 0.75em 0.625em;
}

legend {
  box-sizing: border-box; /* 1 */
  color: inherit; /* 2 */
  display: table; /* 1 */
  max-width: 100%; /* 1 */
  padding: 0; /* 3 */
  white-space: normal; /* 1 */
}

progress {
  vertical-align: baseline;
}

textarea {
  overflow: auto;
}

[type='checkbox'],
[type='radio'] {
  box-sizing: border-box; /* 1 */
  padding: 0; /* 2 */
}

[type='number']::-webkit-inner-spin-button,
[type='number']::-webkit-outer-spin-button {
  height: auto;
}

[type='search'] {
  -webkit-appearance: textfield; /* 1 */
  outline-offset: -2px; /* 2 */
}

[type='search']::-webkit-search-decoration {
  -webkit-appearance: none;
}

::-webkit-file-upload-button {
  -webkit-appearance: button; /* 1 */
  font: inherit; /* 2 */
}

details {
  display: block;
}

summary {
  display: list-item;
}

template {
  display: none;
}

[hidden] {
  display: none;
}

.main-mobile-menu {
  display: none;
}

@media screen and (max-width: 768px) {
  .main-mobile-menu {
    max-height: 72px;
    display: flex;
    align-items: left;
  }
}
</style>
