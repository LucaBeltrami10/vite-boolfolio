<script>
import AppHeader from './components/AppHeader.vue';
import AppProjects from './pages/AppProjects.vue';
import AppHome from './pages/AppHome.vue';
import AppTechnologies from './pages/AppTechnologies.vue';
import AppFooter from './components/AppFooter.vue';
export default {
  components: {
    AppHeader,
    AppHome,
    AppProjects,
    AppTechnologies,
    AppFooter,

  }
}
</script>

<template>
  <AppHeader />
  <AppProjects />
  <AppFooter />
</template>

<style lang="scss">
@use './style/general.scss' as *;
</style>
