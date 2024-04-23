<template>
  <Header />

  <main class="site-content">
    <NuxtPage />
  </main>

  <Footer />
</template>

<script setup>
const {locale} = useI18n()
locale.value = localStorage.getItem('locale') || 'ru'
</script>