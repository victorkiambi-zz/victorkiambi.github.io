<template>
  <v-app>
    <AppNavigation/>
    <HomeView/>
    <BottomNav/>
  </v-app>
</template>


<script>
  import AppNavigation from '../components/AppNavigation'
  import HomeView from '../components/HomeView'
  import BottomNav from '../components/BottomNav'


  export default {
    
    components: {
      AppNavigation,
      HomeView,
      BottomNav
    }
  }
</script>
