<script>
import AppHeader from './components/AppHeader.vue';
import AppProjects from './pages/AppProjects.vue';
import AppFooter from './components/AppFooter.vue';
export default {
  components: {
    AppHeader,
    AppProjects,
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
