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
  },
  data() {
    return {

      navElements: [
        {
          element: 'Home',
          routeName: 'home',
        },
        {
          element: 'Progetti',
          routeName: 'projects',
        },
        {
          element: 'Tecnologie',
          routeName: 'technologies',
        },
        {
          element: 'Contattaci',
          routeName: 'contact-us',
        },
      ]

    };
  },
  methods: {

  },
  mounted() {

  },
}
</script>

<template>
  <AppHeader :navElements="navElements" />

  <router-view>
  </router-view>

  <AppFooter />
</template>

<style lang="scss">
@use './style/general.scss' as *;
</style>
