<script>
import AppHeader from './components/AppHeader.vue';
import ProjectsList from './pages/ProjectsList.vue';
import HomePage from './pages/HomePage.vue';
import TechnologiesList from './pages/TechnologiesList.vue';
import ProjectShow from './pages/ProjectShow.vue';
import AppFooter from './components/AppFooter.vue';
export default {
  components: {
    AppHeader,
    HomePage,
    ProjectsList,
    TechnologiesList,
    AppFooter,
    ProjectShow,
  }
}
</script>

<template>
  <AppHeader />

  <router-view>
  </router-view>

  <AppFooter />
</template>

<style lang="scss">
@use './style/general.scss' as *;
</style>
